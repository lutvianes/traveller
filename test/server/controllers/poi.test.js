const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const fixtures = require('sequelize-fixtures');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiAsPromised);

const app = require('app.js');
const models = require('server/models');
const controller = require('server/controllers/poi');

before(function(done) {
    if (app.get('env') !== 'test')
        done(new Error("Not in test environment"));
    else
        done();
});

describe('POI', function() {

    beforeEach(function(done) {
        // clearing database needs more time
        this.timeout(5000);
        // clears database option={force:true} set in config/database/sequelize.js
        models.sequelize.sync()
            .then(function() {
                done();
            })
            .catch(function(err) {
                done(err);
            });
    });

    it('should get all', function(done) {
        fixtures.loadFiles([
            __dirname + '/../fixtures/pois.json'
        ], models)
            .then(function() {
                return controller.get();
            })
            .then(function(result) {
                result.should.be.an('array');
                result[0].should.have.property('name');
                result[0].should.have.property('latitude');
                result[0].should.have.property('longitude');
                done();
            })
            .catch(function(err) {
                done(err);
            });
    });

    it('should add new poi', function(done) {
        fixtures.loadFiles([
            __dirname + '/../fixtures/pois.json'
        ], models)
            .then(function() {
                return controller.add({
                    name: "Foo Bar",
                    latitude: 123.333,
                    longitude: -124.111
                });
            })
            .then(function() {
                return models.Poi.findOne({
                    where: {
                        name: "Foo Bar"
                    }
                });
            })
            .then(function(result) {
                result.name.should.equal("Foo Bar");
                result.latitude.should.equal(123.333);
                result.longitude.should.equal(-124.111);
                done();
            })
            .catch(function(err) {
                done(err);
            });
    });

    it('should remove poi', function(done) {
        fixtures.loadFiles([
            __dirname + '/../fixtures/pois.json'
        ], models)
            .then(function() {
                return controller.remove(1);
            })
            .then(function() {
                return models.Poi.findById(1);
            })
            .then(function(result) {
                expect(result).to.be.null;
                done();
            })
            .catch(function(err) {
                done(err);
            });
    });
})
