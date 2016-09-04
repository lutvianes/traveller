'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Pois', [
        { name: 'Restoran', latitude: 44.968046, longitude: -94.420307, created_at: "2013-03-20", updated_at: "2013-03-20" },
        { name: 'Restoran', latitude: 44.968046, longitude: -94.420307, created_at: "2013-03-20", updated_at: "2013-03-20" },
        { name: 'Restoran', latitude: 44.968046, longitude: -94.420307, created_at: "2013-03-20", updated_at: "2013-03-20" },
        { name: 'Restoran', latitude: 44.968046, longitude: -94.420307, created_at: "2013-03-20", updated_at: "2013-03-20" }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Pois', null, {});
  }
};
