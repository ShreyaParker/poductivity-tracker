const Activity = require('../models/activityModel');
const express =require("express");
const {getActivity, addNewActivity} = require("../controllers/activityController");
const router= express.Router();

router.get("/activities", getActivity);

router.post("/activity",addNewActivity);

module.exports = {activityRouter: router};