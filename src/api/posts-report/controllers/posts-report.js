'use strict';

/**
 * A set of functions called "actions" for `posts-report`
 */

 const findJewlByClient= async(pObjeto)=>
{
const nombre=pObjeto.params.client;

const rawBuilder = strapi.db.connection.raw(
      "select * from jewls_users_permissions_client_links where user_id = "+nombre
    );
	
    const resp = await rawBuilder.then();
	// console.log(resp.rows);
let storesFiltered = [];
for (const s of resp.rows) {
                
const rawBuilder = strapi.db.connection.raw(
      "select * from jewls where id = "+s.jewl_id
    );
    const x = await rawBuilder.then();
	storesFiltered.push(x.rows);
    
	}
    return storesFiltered;
}

 const findJewlByModel= async(pObjeto)=>
{
const nombre=pObjeto.params.model;
const rawBuilder = await strapi.db.query('api::jewl.jewl').findMany({
  where: {
    model: nombre,    
  },
   populate: {
    measure_unit_weight: true,
    measure_unit_large: true,
    measure_unit_price: true,
    measure_unit_carats: true,
    users_permissions_client: true,
    users_permissions_vendor: true,
  },
});
	

    return rawBuilder;
}

    module.exports = {
    
findJewlByClient,
findJewlByModel,
    };