const Course = require('../models/Course');

class SiteController {

    index(req, res) {

        Course.find({}, function (err, courses) {
            if (!err) { res.json(courses); }
            else { res.status(400).json({ err: 'message' }); }
        });
        // res.render('site');
    }

    show(req, res) {
        res.send('site detail');
    }

}

module.exports = new SiteController;
