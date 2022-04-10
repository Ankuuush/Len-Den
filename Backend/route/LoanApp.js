const express = require("express");
const router = express.Router();
const LoanApp = require('../models/LoanApp')
const loanOffer=require('../models/LoanOffer')
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
    "/fetchallloan",
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

        let loanoffer = await loanOffer.findById(req.params.id);
        if (!loanoffer) {
            return res.status(404).send("Not Found");
        }
        if (loanoffer.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        loanoffer = await loanOffer.findByIdAndUpdate(
            req.params.id,
            {
                state:1
            }
        );
        res.json(loanapp = await LoanApp.findById(req.params.id));
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
        res.json(loanapp = await LoanApp.findById(req.params.id));
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


module.exports = router;