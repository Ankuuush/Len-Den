const express = require("express");
const router = express.Router();
const loanOffer = require('../models/LoanOffer')
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const LoanApp = require("../models/LoanApp");

router.post(
    "/createoffer/:id",
    fetchuser,
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const loanoffer = new loanOffer({
                loanApp: req.params.id,
                user: req.user.id,
                interest: req.body.interest,
                state: 0
            });
            const saveloanoffer = await loanoffer.save();
            res.json(saveloanoffer);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    }
);

router.get(
    "/fetchmyoffer",
    fetchuser,
    async (req, res) => {
        try {
            const loanoffer = await loanOffer.find({ state: 0, user:req.user.id });
            res.json(loanoffer);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    }
);

router.get(
    "/fetchacceptedoffer",
    fetchuser,
    async (req, res) => {
        try {
            const loanoffer = await loanOffer.find({$or:[{ state: 1, user:req.user.id },{ state: 2, user:req.user.id }]});
            res.json(loanoffer);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    }
);


module.exports = router;