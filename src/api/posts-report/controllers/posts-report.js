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

const rawBuilder = strapi.db.connection.raw(
      "SELECT jewls.id as jewl_id, weight, model, price, description, carats, large,measure_units.name as measure_unit_weight  FROM public.jewls join jewls_measure_unit_weight_links on jewls.id=jewls_measure_unit_weight_links.jewl_id join measure_units "
  +" on jewls_measure_unit_weight_links.measure_unit_id=measure_units.id"+
    
   " WHERE public.jewls.model ='"+nombre+"'"
    );
	
    const resp = await rawBuilder.then();

    return resp.rows;
}

    module.exports = {
    
findJewlByClient,
findJewlByModel,
    };