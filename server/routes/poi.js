var express = require('express');
var router = express.Router();

const controller = require('../controllers/poi');

/* Point of Interest Routers */
router.route('/')
    // Get POI
    .get(function(req, res, next) {
        controller.get()
            .then(function(results) {
                return res.json(results);
            }).catch(function(err) {
                return next(err);
            });
    })
    // Add POI
    .post(function(req, res, next) {
        controller.add(req.body)
            .then(function(result) {
                return res.status(201)
                    .location('http://'+req.hostname+req.baseUrl+'/'+result.id)
                    .send();
            }).catch(function(err) {
                return next(err);
            });
    });

router.route('/:id')
    // Delete POI
    .delete(function(req, res, next) {
        if(!req.params.id)
            return next();

        controller.remove(req.params.id)
            .then(function(result) {
                if (result) // if number of affected rows not 0
                    return res.status(204).send();
                else
                    return next();
            }).catch(function(err) {
                return next(err);
            });
    });

module.exports = router;
