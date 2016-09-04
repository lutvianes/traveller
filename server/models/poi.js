'use strict';
module.exports = function(sequelize, DataTypes) {
    var Poi = sequelize.define('Poi', {
        name: DataTypes.STRING,
        latitude: DataTypes.DECIMAL(12, 9),
        longitude: DataTypes.DECIMAL(12, 9)
    }, {
        underscored: true,
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Poi;
};
