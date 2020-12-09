
class SiteController {

    index(req, res) {
        res.render('site');
    }

    show(req, res) {
        res.send('site detail');
    }

}

module.exports = new SiteController;
