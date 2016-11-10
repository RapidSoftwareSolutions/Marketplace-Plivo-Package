const app     = require('../index');
const assert  = require('chai').assert;
const request = require('supertest-as-promised');

const authToken = 'ZWZlMGUzMjAxNDFkMmRhY2QwZTA1MjFjNGYwMDY1',
    authId = 'MAZJJLN2Y5NDFKOTC3NJ',
    alias = 'test',
    limit = 1;

let subauthId, appId, endpointId, carrierId;

describe('Plivo API', () => {
    it('/getAccountDetails', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getAccountDetails`)
        .send({args:{authToken, authId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/updateAccount', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/updateAccount`)
        .send({args:{authToken, authId, name: 'RapidApi Test'}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/createSubaccount', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/createSubaccount`)
        .send({args:{authToken, authId, name: 'RapidApi Test Sub'+Math.random(5).toString()}})
        .expect(200)
        .then((res) => {
            subauthId = res.body.contextWrites.to.auth_id;
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/updateSubaccount', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/updateSubaccount`)
        .send({args:{authToken, authId, subauthId, name: 'RapidApi Test Sub'+Math.random(5).toString()}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getSingleSubaccount', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getSingleSubaccount`)
        .send({args:{authToken, authId, subauthId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getSubaccounts', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getSubaccounts`)
        .send({args:{authToken, authId, limit}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/deleteSubaccount', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/deleteSubaccount`)
        .send({args:{authToken, authId, subauthId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/createApplication', function() {
      this.timeout(20000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/createApplication`)
        .send({args:{authToken, authId, appName: 'RapidApi Test Sub'+Math.random(5).toString(), answerUrl: 'https://rapidapi.com'}})
        .expect(200)
        .then((res) => {
            appId = res.body.contextWrites.to.app_id;
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getApplications', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getApplications`)
        .send({args:{authToken, authId, limit}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getSingleApplication', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getSingleApplication`)
        .send({args:{authToken, authId, appId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/updateApplication', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/updateApplication`)
        .send({args:{authToken, authId, appId, answerUrl: 'https://google.com'}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/deleteApplication', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/deleteApplication`)
        .send({args:{authToken, authId, appId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/createEndpoint', function() {
      this.timeout(15000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/createEndpoint`)
        .send({args:{authToken, authId, username: 'api', password: 'rapidapi!', alias}})
        .expect(200)
        .then((res) => {
            endpointId = res.body.contextWrites.to.endpoint_id;
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getSingleEndpoint', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getSingleEndpoint`)
        .send({args:{authToken, authId, endpointId}})
        .expect(200)
        .then((res) => {
            endpointId = res.body.contextWrites.to.endpoint_id;
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getEndpoints', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getEndpoints`)
        .send({args:{authToken, authId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/updateEndpoint', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/updateEndpoint`)
        .send({args:{authToken, authId, endpointId, password: 'newpass', alias}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/deleteEndpoint', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/deleteEndpoint`)
        .send({args:{authToken, authId, endpointId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getMessages', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getMessages`)
        .send({args:{authToken, authId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getRentedNumbers', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getRentedNumbers`)
        .send({args:{authToken, authId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/addIncomingCarrier', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/addIncomingCarrier`)
        .send({args:{authToken, authId, name: 'testc'+ Math.random(3).toString().slice(5, 7), ipSet: '88.214.0.' + Math.random(3).toString().slice(5, 7)}})
        .expect(200)
        .then((res) => {
            carrierId = res.body.contextWrites.to.carrier_id;
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/updateIncomingCarrier', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/updateIncomingCarrier`)
        .send({args:{authToken, authId, carrierId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/listIncomingCarriers', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/listIncomingCarriers`)
        .send({args:{authToken, authId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/addOwnCarrierNumber', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/addOwnCarrierNumber`)
        .send({args:{authToken, authId, numbers: '+380' + Math.random(3).toString().slice(2, 11), carrier: carrierId, region: 'UA'}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getSingleIncomingCarrier', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getSingleIncomingCarrier`)
        .send({args:{authToken, authId, carrierId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    }); 

    it('/removeIncomingCarrier', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/removeIncomingCarrier`)
        .send({args:{authToken, authId, carrierId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    }); 

    it('/searchNewNumbers', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/searchNewNumbers`)
        .send({args:{authToken, authId, countryIso: 'JP'}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    }); 

    it('/getPricing', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getPricing`)
        .send({args:{authToken, authId, countryIso: 'JP'}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    }); 

    it('/getRecordings', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getRecordings`)
        .send({args:{authToken, authId, countryIso: 'JP'}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });    
});
