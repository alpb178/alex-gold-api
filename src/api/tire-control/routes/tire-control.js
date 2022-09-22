'use strict';

/**
 * tire-control router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tire-control.tire-control');
