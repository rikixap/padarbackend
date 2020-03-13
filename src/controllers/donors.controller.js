const Donors = require('../models/donors.model')


module.exports = {
    donors_post: (req, res) => {
        Donors.create(req.body, (err, donors) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: 'Cant post donors'
                })
            } else {
            res.status(200).json({
                    success: true,
                    donors: donors
                })
            }
        })
    },
    donors_all: (req, res) => {
        Donors.find({}, (err, donors) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: 'Cant get donors'
                })
            } else {
                res.status(200).json({
                    success: true,
                    donors: donors
                })
            }
        })
    },
    donors_delete: (req, res) => {
        Donors.findByIdAndDelete({
            _id: req.params.id
        }, (err, deleted) => {
            if (err) {
                res.status(400).json({
                    success: false,
                    message: 'Cant delete donors'
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Success delete donors',
                    deleted: deleted
                })
            }
        })
    }
}