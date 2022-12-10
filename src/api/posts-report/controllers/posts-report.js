'use strict';
const axios = require('axios');


/**
 * A set of functions called "actions" for `posts-report`
 */

 const findJwelByClient= async(pObjeto)=>
{
const nombre=pObjeto.params.client;

const rawBuilder = strapi.db.connection.raw(
      "select * from jewls_users_permissions_client_links where user_id = "+nombre
    );
	
    const resp = await rawBuilder.then();
	// console.log(resp.rows);
let storesFiltered = [];
for (const s of resp.rows) {
 
 const rawBuilder = await strapi.db.query('api::jewl.jewl').findMany({
  where: {
            id: s.jewl_id,  
            count: {
                $gte: 1,
            },      
  },
   populate: {
    users_permissions_client: true,
    users_permissions_vendor: true,
    jewl_catalogue:
    { 
        populate:['measure_unit_weight','measure_unit_large','measure_unit_price','measure_unit_carats','owner'],
    },
  },
});               

	storesFiltered.push(rawBuilder);
    
	}
    return storesFiltered;
}


const findJwelByUser= async(pObjeto)=>
{
    const nombre=pObjeto.params.id;
    const rawBuilder = strapi.db.connection.raw(
      "select * from jewls_users_permissions_vendor_links where user_id = "+nombre
    );
    
    const resp = await rawBuilder.then();
    let storesFiltered = [];
    if (Object.entries(resp.rows).length!=0)
    {
        
        for (const s of resp.rows) {
 
            const rawBuilder = await strapi.db.query('api::jewl.jewl').findMany({
                where: {
                        id: s.jewl_id,  
                        count: {
                                $gte: 1,
                        },      
                    },
   
                populate:
                 {
                    jewl_catalogue:
                        { 
                            populate:['measure_unit_weight','measure_unit_large','measure_unit_price','measure_unit_carats','owner'],
                        },
                    users_permissions_client: true,
                    users_permissions_vendor: true,
                },
             });               
            if (Object.entries(rawBuilder).length!=0)
            {
                storesFiltered.push(rawBuilder); 
            }
        }
        return storesFiltered;  
    }
    else
        {
            const rawBuilder = strapi.db.connection.raw(
            "select * from jewls_users_permissions_client_links where user_id = "+nombre
            );
            const resp = await rawBuilder.then();
            if (Object.entries(resp.rows).length!=0)
            {
                for (const s of resp.rows)
                {
                    const rawBuilder = await strapi.db.query('api::jewl.jewl').findMany({
                        where: {
                                id: s.jewl_id,  
                                count: {
                                        $gte: 1,
                                },      
                        },  
                        populate: {
                                    users_permissions_client: true,
                                    users_permissions_vendor: true,
                                    jewl_catalogue:
                                    { 
                                        populate:['measure_unit_weight','measure_unit_large','measure_unit_price','measure_unit_carats','owner'],
                                    },
                        },
                    });           
                    if (Object.entries(rawBuilder).length!=0)
                    {
                    storesFiltered.push(rawBuilder);  
                    }    
                }
                return storesFiltered
            }
            else
            {
                return storesFiltered
            }
        }
}

 const findJwelByVendedor= async(pObjeto)=>
{
const nombre=pObjeto.params.vendedor;

const rawBuilder = strapi.db.connection.raw(
      "select * from jewls_users_permissions_vendor_links where user_id = "+nombre
    );
    
    const resp = await rawBuilder.then();
    let storesFiltered = [];
    if (Object.entries(resp.rows).length!=0)
    {
        
        for (const s of resp.rows) {
 
            const rawBuilder = await strapi.db.query('api::jewl.jewl').findMany({
                where: {
                        id: s.jewl_id,  
                        count: {
                                $gte: 1,
                        },      
                    },
   
                populate: {
                    jewl_catalogue:
                        { 
                            populate:['measure_unit_weight','measure_unit_large','measure_unit_price','measure_unit_carats','owner'],
                        },
                users_permissions_client: true,
                users_permissions_vendor: true,
                },
             });               
            if (Object.entries(rawBuilder).length!=0)
            {
                storesFiltered.push(rawBuilder); 
            }
        }
        return storesFiltered;  
    }
    else
    {
        return storesFiltered
    }

}

const findJwelByCode= async(pObjeto)=>
{
const code=pObjeto.params.code;
const disponibilidad=pObjeto.params.disponibilidad;
if(disponibilidad==1)
{

const rawBuilder = await strapi.db.query('api::jewl.jewl').findMany({
  where: {
            count: {
                $gte: 1,
            },
            code: code,      
  },
   populate: {
        jewl_catalogue:
    { 
        populate:['measure_unit_weight','measure_unit_large','measure_unit_price','measure_unit_carats','owner'],
    },
    users_permissions_client: true,
    users_permissions_vendor: true,
  },
});

    return rawBuilder;    
}
else{
    const rawBuilder = await strapi.db.query('api::jewl.jewl').findMany({
  where: {
            
            code: code,      
  },
   populate: {
        jewl_catalogue:
    { 
        populate:['measure_unit_weight','measure_unit_large','measure_unit_price','measure_unit_carats','owner'],
    },
    users_permissions_client: true,
    users_permissions_vendor: true,
  },
});

    return rawBuilder;
}

}

const findJewlCatalogueByModel= async(pObjeto)=>
{  
const nombre=pObjeto.params.model;
if (nombre=='all')
 {
    const rawBuilder = await strapi.db.query('api::jewl-catalogue.jewl-catalogue').findMany({
  where: {
        availability: {
            $gte: 1,
        },
        isDelete:false,
  },
   populate: {
    measure_unit_weight: true,
    measure_unit_large: true,
    measure_unit_price: true,
    measure_unit_carats: true,
    owner:true,
  },
});
 let storesFiltered = [];
 for (const s of rawBuilder)
 {
  
const { data } = await axios.get('http://localhost:1337/api/jewl-catalogues/'+s.id+'/?populate=*');
      s.image=data.data.attributes.image.data[0].id;
      storesFiltered.push(s);
    
 } 
    return storesFiltered;

 }
 else
 {
   const rawBuilder = await strapi.db.query('api::jewl-catalogue.jewl-catalogue').findMany({
  where: {
            model: nombre,  
            availability: {

                $gte: 1,
            },
            isDelete:false,      
  },
   populate: {
    measure_unit_weight: true,
    measure_unit_large: true,
    measure_unit_price: true,
    measure_unit_carats: true,
    owner:true,
  },
});
 let storesFiltered = [];
 for (const s of rawBuilder)
 {
  
const { data } = await axios.get('http://localhost:1337/api/jewl-catalogues/'+s.id+'/?populate=*');
      s.image=data.data.attributes.image.data[0].id;
      storesFiltered.push(s);
    
 } 
    return storesFiltered;
 }

}
const findJewlCatalogueByCode= async(pObjeto)=>
{
const code=pObjeto.params.code;
if (code=='all')
 {
    const rawBuilder = await strapi.db.query('api::jewl-catalogue.jewl-catalogue').findMany({
  where: {
            availability: {
                $gte: 1,
            },
           isDelete:false,

  },
   populate: {
    measure_unit_weight: true,
    measure_unit_large: true,
    measure_unit_price: true,
    measure_unit_carats: true,
    owner:true,
  },
});

 let storesFiltered = [];      
 for (const s of rawBuilder)
 {
  
const { data } = await axios.get('http://localhost:1337/api/jewl-catalogues/'+s.id+'/?populate=*');
      s.image=data.data.attributes.image.data[0].id;
      storesFiltered.push(s);
    
 } 
    return storesFiltered;
 }
 else
 {
    const rawBuilder = await strapi.db.query('api::jewl-catalogue.jewl-catalogue').findMany({
  where: {
            availability: {
                $gte: 1,
            },
            code: code,
            isDelete:false,

  },
   populate: {
    measure_unit_weight: true,
    measure_unit_large: true,
    measure_unit_price: true,
    measure_unit_carats: true,
    owner:true,
  },
});
 let storesFiltered = [];
 for (const s of rawBuilder)
 {
  
const { data } = await axios.get('http://localhost:1337/api/jewl-catalogues/'+s.id+'/?populate=*');
      s.image=data.data.attributes.image.data[0].id;
      storesFiltered.push(s);
    
 } 
    return storesFiltered;

 }
}
const findJewlCatalogueByUser= async(pObjeto)=>
{
const user_id=pObjeto.params.user_id;
    const rawBuilder = await strapi.db.query('api::jewl-catalogue.jewl-catalogue').findMany({
  where: {
            owner: user_id,
            isDelete:false,
      
  },
   populate: {
    measure_unit_weight: true,
    measure_unit_large: true,
    measure_unit_price: true,
    measure_unit_carats: true,
    owner: true,
  },
});
let storesFiltered = [];      
 for (const s of rawBuilder)
 {
  
    const { data } = await axios.get('http://localhost:1337/api/jewl-catalogues/'+s.id+'/?populate=*');
      s.image=data.data.attributes.image.data[0].id;
      storesFiltered.push(s);
    
 } 
    return storesFiltered;
 }

const findUserByRol= async(pObjeto)=>
{
const rol=pObjeto.params.rol;
if (rol=="all")
 {
    const rawBuilder = strapi.db.connection.raw(
      "select * from up_users"
    );
    const resp = await rawBuilder.then();

    return resp.rows;

 }
 else
 {
    const rawBuilder = strapi.db.connection.raw(
      "select * from up_users where rol = '"+rol+"'"
    );
    const resp = await rawBuilder.then();

    return resp.rows;

 }
}
const findVendedorByAgeBySexoByCantVentas= async(pObjeto)=>
{
const age=pObjeto.params.age;
const genre=pObjeto.params.genre;
const count_jewl=pObjeto.params.count_jewl;
if (age==0 && genre=="all" && count_jewl=='false')
{
 const rawBuilder = strapi.db.connection.raw(
      "select * from up_users where rol = 'vendedor' ORDER BY count_jewl ASC "
    );
    const resp = await rawBuilder.then();

    return resp.rows;  
}
else if(age>0 && genre=="all" && count_jewl=='false' )
{
const rawBuilder = strapi.db.connection.raw(
      "select * from up_users where age = '"+age+"' and rol = 'vendedor' ORDER BY count_jewl ASC"
    );
    const resp = await rawBuilder.then();  

    return resp.rows;
}
else if(age>0 && genre!="all" && count_jewl=='false' )
{
 const rawBuilder = strapi.db.connection.raw(
      "select * from up_users where age = '"+age+"' and rol = 'vendedor' and genre='"+genre+"' ORDER BY count_jewl ASC"
    );
    const resp = await rawBuilder.then();  

    return resp.rows;
}
else if(age>0 && genre!="all" && count_jewl=='true' )
{
    const rawBuilder = strapi.db.connection.raw(
      "select * from up_users where  age = '"+age+"' and rol = 'vendedor' and genre='"+genre+"' ORDER BY count_jewl DESC"
    );
    const resp = await rawBuilder.then();  

    return resp.rows;
}
else if(age>0 && genre=="all" && count_jewl=='true' )
{
    const rawBuilder = strapi.db.connection.raw(
      "select * from up_users where  age = '"+age+"' and rol = 'vendedor' ORDER BY count_jewl DESC"
    );
    const resp = await rawBuilder.then();

    return resp.rows;
}
else if(age==0 && genre!="all" && count_jewl=='true' )
{
  const rawBuilder = strapi.db.connection.raw(
      "select * from up_users where genre='"+genre+"' and rol = 'vendedor' ORDER BY count_jewl DESC "
    );
    const resp = await rawBuilder.then();  

    return resp.rows;   
}
else if(age==0 && genre=="all" && count_jewl=='true' )
{
    const rawBuilder = strapi.db.connection.raw(
      "select * from up_users where rol = 'vendedor' ORDER BY count_jewl DESC "
    );
    const resp = await rawBuilder.then();

    return resp.rows;
}
else (age==0 && genre!="all" && count_jewl=='false' )
{
    const rawBuilder = strapi.db.connection.raw(
      "select * from up_users where rol = 'vendedor' and genre = '"+genre+"' ORDER BY count_jewl ASC"
    );
    const resp = await rawBuilder.then();

    return resp.rows;   
}

}
const findUserByPhone= async(pObjeto)=>
{
const phone=pObjeto.params.phone;
const rawBuilder = strapi.db.connection.raw(
      "select * from up_users where phone = '"+phone+"'"
    );
    const resp = await rawBuilder.then();

    return resp.rows;
}
const findUserByUserName= async(pObjeto)=>
{
const username=pObjeto.params.username;
if (username=='all')
 {

const rawBuilder = strapi.db.connection.raw(
      "select * from up_users"
    );
    const resp = await rawBuilder.then();

    return resp.rows;
 }
 else
 {

const rawBuilder = strapi.db.connection.raw(
      "select * from up_users where username = '"+username+"'"
    );
    const resp = await rawBuilder.then();

    return resp.rows;  
 }
}
const findUserVendedorByUserName= async(pObjeto)=>
{
const username=pObjeto.params.username;
if (username=='all')
 {

const rawBuilder = strapi.db.connection.raw(
      "select * from up_users where rol = 'vendedor' "
    );
    const resp = await rawBuilder.then();

    return resp.rows;
 }
 else
 {

const rawBuilder = strapi.db.connection.raw(
      "select * from up_users where rol = 'vendedor' and username = '"+username+"'"
    );
    const resp = await rawBuilder.then();

    return resp.rows;  
 }
}

const updateUserBlocked= async(pObjeto)=>{
const blocked=pObjeto.params.blocked;
const id=pObjeto.params.id;

const rawBuilder = strapi.db.connection.raw(
      "update up_users set  blocked = '"+blocked+"' where id="+id
    );
    const resp = await rawBuilder.then();

    return resp.rows;
}
const updatePasswordById= async(pObjeto)=>
{
    const password=pObjeto.params.password;
    const id=pObjeto.params.id;

    const rawBuilder = strapi.db.connection.raw(
          "update up_users set  password = '"+password+"' where id="+id
        );
     // console.log(rawBuilder.then);

    const resp = await rawBuilder.then();

    return resp.rows;
}

const updatePasswordByUsername= async(pObjeto)=>
{
    const password=pObjeto.params.password;
    const username=pObjeto.params.username;

    const rawBuilder = strapi.db.connection.raw(
          "update up_users set  password = '"+password+"' where username="+"'"+username+"'"
        );

    const resp = await rawBuilder.then();

    return resp.rows;
}

/*const updateUser=async(ctx)=>{
      console.log(ctx.request.body);

  // some logic here
  const response = await strapi.query('up_users').update(ctx);
  // some more logic

  return response;
}*/

module.exports = {    
findJwelByClient,
findJwelByVendedor,
findJwelByUser,
findJwelByCode,
findJewlCatalogueByModel,
findJewlCatalogueByCode,
findJewlCatalogueByUser,
findUserByRol,
findUserByPhone,
findVendedorByAgeBySexoByCantVentas,
findUserByUserName,
findUserVendedorByUserName,
updateUserBlocked,
//updateUser,
updatePasswordById,
updatePasswordByUsername,
/*findUserByAge,
findUserBySexo,
//findUserByCantVentas,
//findUserByName,
*/
};