const Poi = require('../models').Poi;

// Get all
function get() {
    return Poi.findAll();
}

function add(poi) {
    return Poi.create(poi);
}

function update(poi, id) {
    return Poi.update(poi, {
        where: { id: id },
        limit: 1
    });
}

function remove(id) {
    return Poi.destroy({
        where: { id: id }
    });
}

module.exports = {
    get: get,
    add: add,
    update: update,
    remove: remove
}
