const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateProfileInput = require('../../validation/profile');

// Load Profile Model
const Profile = require('../../models/Profile');

// Load User Schema Profile
const User = require('../../models/User');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: "Profile Works" }));

// @route   POST api/profile
// @desc    Create or Edit user profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if(!isValid){
        // Return any errors with 400 status
        return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.location) profileFields.location = req.body.location;

    Profile.findOne({ user: req.user.id }).then(profile => {
        if (profile) {
            // Update
            Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            ).then(profile => res.json(profile));
        } else {
            // Check if handle exists
            Profile.findOne({ handle: profileFields.handle }).then(profile => {
                if (profile) {
                    errors.handle = 'That handle already exists';
                    res.status(400).json(errors);
                }

                // Save Profile
                new Profile(profileFields).save().then(profile => res.json(profile));
            });
        }
    });
});

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete('/', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOneAndRemove({ user:req.user.id }).then(() => {
            User.findOneAndRemove({ _id: req.user.id }).then(() => 
                res.json({ success: true })
            )
        });
    }
)

module.exports = router;