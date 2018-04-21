'use strict';

const _ = require('underscore');
const assert = require('assert-plus');

function AnalyticsDAO (mongoConnection) {
    assert.object(mongoConnection);

    this.Analytics = mongoConnection.model('APIServiceCredentials', require('../models/api_service_credentials'));

    this.ErrorCodes = {
        ERROR_FINDING_OR_CREATING_API_SERVICE_CREDENTIALS: 'ERROR_FINDING_OR_CREATING_API_SERVICE_CREDENTIALS',
    };

    this.Environments = {
        INTEGRATION: 'INTEGRATION',
        DEVELOPMENT: 'DEVELOPMENT',
        PRODUCTION: 'PRODUCTION'
    };
}

AnalyticsDAO.prototype.getPurchasesData = function (startDate, endDate, callback) {
    assert.string(startDate);
    assert.string(endDate);

    const self = this;
    const errorContext = {
        start_date: startDate,
        end_date: endDate
    };

    this.Analytics.find({ created: { $gte: startDate, $lte: endDate }}, function (err, analyticsData) {
        if (err) {
            return callback(err);
        }

        if (!analyticsData) {
            return callback(null, []);
        }
    });
};