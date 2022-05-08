const express = require("express");
const router = express.Router();
const LoanApp = require('../models/LoanApp')
const loanOffer=require('../models/LoanOffer')
const user=require('../models/User')
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

router.post(
    "/addloanapp",
    fetchuser,
    async (req, res) => {
        try {
            const { loanType, amount, period } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const loanapp = new LoanApp({
                user: req.user.id,
                loanType: loanType,
                amount: amount,
                period: period
            });
            const saveLoanApp = await loanapp.save();
            res.json(saveLoanApp);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    }
);

router.get(
    "/fetchcurrapp",
    fetchuser,
    async (req, res) => {
        try {
            const loanapp = await LoanApp.find({ activeState: 0 });
            res.json(loanapp);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    }
);

router.get(
    "/fetchcurrloan",
    fetchuser,
    async (req, res) => {
        try {
            const loanapp = await LoanApp.find({ activeState: 1 });
            res.json(loanapp);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    }
);

router.get(
    "/fetchpastloan",
    fetchuser,
    async (req, res) => {
        try {
            const loanapp = await LoanApp.find({ activeState: 2 });
            res.json(loanapp);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    }
);

router.delete(
    "/deleteapp/:id",
    fetchuser,
    async (req, res) => {
        try {
            const loanapp = await LoanApp.deleteOne({_id:req.params.id});
            res.json(loanapp);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    }
);


router.get(
    "/fetchmyloan",
    fetchuser,
    async (req, res) => {
        try {
            const loanapp = await LoanApp.find({ $or:[{activeState: 1, user: req.user.id },{activeState: 2, user: req.user.id }]});
            res.json(loanapp);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    }
);

router.get(
    "/currentloan/:id",
    fetchuser,
    async (req, res) => {
        try {
            const loanapp = await LoanApp.find({activeState: 1, user: req.user.id });
            const loanoffer=await loanOffer.find({loanApp:loanapp._id})
            const userDetails=await user.find({_id:loanOffer.user})
            const json={...loanapp,...loanoffer,...userDetails};
            res.json(loanapp);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    }
);

router.patch("/offeraccepted/:id", fetchuser, async (req, res) => {
    try {
        const { interest, dateBorrowed } = req.body;
        let loanapp = await LoanApp.findById(req.params.id);
        if (!loanapp) {
            return res.status(404).send("Not Found");
        }
        if (loanapp.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        loanapp = await LoanApp.findByIdAndUpdate(
            req.params.id,
            {
                interest: interest,
                dateBorrowed: dateBorrowed,
                activeState:1
            }
        );

        let loanoffer = await loanOffer.find({loanApp:req.params.id});
        if (!loanoffer) {
            return res.status(404).send("Not Found");
        }

        loanoffer = await loanOffer.updateOne(
            {loanApp:req.params.id},
            {
                state:1
            }
        );
        console.log(loanoffer)
        res.json(loanoffer = await loanOffer.find({loanApp:req.params.id}));
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


router.patch("/repayed/:id", fetchuser, async (req, res) => {
    try {
        const { dateRepayed } = req.body;
        let loanapp = await LoanApp.findById(req.params.id);
        if (!loanapp) {
            return res.status(404).send("Not Found");
        }
        if (loanapp.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        loanapp = await LoanApp.findByIdAndUpdate(
            req.params.id,
            {
                dateRepayed:dateRepayed,
                activeState:2
            }
        );
        let loanoffer = await LoanOffer.updateOne({loanApp:req.params.id},{state:2});
        res.json(loanapp = await LoanApp.findById(req.params.id));
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


module.exports = router;