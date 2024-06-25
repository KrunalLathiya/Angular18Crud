const express = require('express');
const businessRoutes = express.Router();

// Require Business model in our routes module
let Business = require('../models/Business');

// Defined store route
businessRoutes.route('/add').post(async (req, res) => {
    try {
        let business = new Business(req.body);
        await business.save();
        res.status(200).json({ 'business': 'Business added successfully' });
    } catch (err) {
        res.status(400).send("Unable to save to database");
    }
});

// Defined get data (index or listing) route
businessRoutes.route('/').get(async (req, res) => {
    try {
        const businesses = await Business.find();
        res.json(businesses);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Defined edit route
businessRoutes.route('/edit/:id').get(async (req, res) => {
    try {
        let id = req.params.id;
        const business = await Business.findById(id);
        res.json(business);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Defined update route
businessRoutes.route('/update/:id').post(async (req, res) => {
    try {
        let id = req.params.id;
        const business = await Business.findById(id);
        if (!business) {
            return res.status(404).send('Document not found');
        }

        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;

        await business.save();
        res.json('Update complete');
    } catch (err) {
        res.status(400).send("Unable to update the database");
    }
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').delete(async (req, res) => {
    try {
        const result = await Business.findByIdAndDelete(req.params.id);
        if (result) {
            res.json('Successfully removed');
        } else {
            res.status(404).json('Document not found');
        }
    } catch (err) {
        console.error(`Error deleting business with id: ${req.params.id}`, err);
        res.status(400).send(err);
    }
});

module.exports = businessRoutes;
