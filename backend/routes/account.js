// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require("../middleware");
const {Account}= require("../db")

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    console.log("balance fetched for ", req.userId)
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});

module.exports = router;