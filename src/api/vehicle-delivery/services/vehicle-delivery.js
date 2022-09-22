'use strict';

/**
 * vehicle-delivery service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vehicle-delivery.vehicle-delivery');
