'use strict';

/**
 * tire-control service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tire-control.tire-control');
