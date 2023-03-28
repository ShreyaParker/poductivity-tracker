const activityModel= require('../models/activityModel');
const Activity = require("../models/activityModel");

const getActivity =async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const addNewActivity =async (req, res) => {
    const activity= new activityModel(req.body);
    try{
        const newActivity= await activity.save();
        res.status(201).json(newActivity);

    }catch (error){
        res.status(409).json({message: error.message});
    }
}

module.exports = {getActivity, addNewActivity};