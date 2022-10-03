'use strict';

/**
 * A set of functions called "actions" for `posts-report`
 */

 const findJewlByClient= async(pObjeto)=>
{
const nombre=pObjeto.params.client;
console.log(nombre);

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

    module.exports = {
    
findJewlByClient
    };