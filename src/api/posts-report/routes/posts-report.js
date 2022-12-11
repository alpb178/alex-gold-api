module.exports = {
      routes: [
		{
          method: "GET",
          path: "/jwel/findByClient/:client",
          handler: "posts-report.findJwelByClient",
          config: {
            policies: [],
            middlewares: [],
          },
        },
        {
          method: "GET",
          path: "/jwel/findByVendedor/:vendedor",
          handler: "posts-report.findJwelByVendedor",
          config: {
            policies: [],
            middlewares: [],
          },
        },
        {
          method: "GET",
          path: "/jwel/findByUser/:id",
          handler: "posts-report.findJwelByUser",
          config: {
            policies: [],
            middlewares: [],
          },
        },
        {
          method: "GET",
          path: "/jwel/findByCode/:code/:disponibilidad",
          handler: "posts-report.findJwelByCode",
          config: {
            policies: [],
            middlewares: [],
          },
        },
        
        {
          method: "GET",
          path: "/jewlCatalogue/findByCode/:code",
          handler: "posts-report.findJewlCatalogueByCode",
          config: {
            policies: [],
            middlewares: [],
          },

        },
           {
          method: "GET",
          path: "/jewlCatalogue/findByModel/:model",
          handler: "posts-report.findJewlCatalogueByModel",
          config: {
            policies: [],
            middlewares: [],
          },
          
        },
        {
          method: "GET",
          path: "/jewlCatalogue/findByUser/:user_id",
          handler: "posts-report.findJewlCatalogueByUser",
          config: {
            policies: [],
            middlewares: [],
          },
          
        },
        
        {
          method: "GET",
          path: "/user/findByRol/:rol",
          handler: "posts-report.findUserByRol",
          config: {
            policies: [],
            middlewares: [],
          },
          
        },
        {
          method: "GET",
          path: "/user/findByPhone/:phone",
          handler: "posts-report.findUserByPhone",
          config: {
            policies: [],
            middlewares: [],
          },
          
        },      
{
          method: "GET",
          path: "/user/findVendedorByAgeBySexoByCantVentas/:age/:genre/:count_jewl",
          handler: "posts-report.findVendedorByAgeBySexoByCantVentas",
          config: {
            policies: [],
            middlewares: [],
        },          
        },
        /*{
          method: "GET",
          path: "/user/findBySexo/:genre",
          handler: "posts-report.findUserBySexo",
          config: {
            policies: [],
            middlewares: [],
        },          
        },
        {
          method: "GET",
          path: "/user/findByCantVentas/:count_jewl",
          handler: "posts-report.findUserByCantVentas",
          config: {
            policies: [],
            middlewares: [],
        },          
        },*/
        {
          method: "GET",
          path: "/user/findByUserName/:username",
          handler: "posts-report.findUserByUserName",
          config: {
            policies: [],
            middlewares: [],
        },          
        },
        {
          method: "GET",
          path: "/user/findIdByUserName/:username",
          handler: "posts-report.findIdUserByUsername",
          config: {
            policies: [],
            middlewares: [],
        },          
        },
        {
          method: "GET",
          path: "/user/vendedor/findByUserName/:username",
          handler: "posts-report.findUserVendedorByUserName",
          config: {
            policies: [],
            middlewares: [],
        },          
        },
        {
          method: "GET",
          path: "/user/updateUserBlocked/:id/:blocked",
          handler: "posts-report.updateUserBlocked",
          config: {
            policies: [],
            middlewares: [],
        },          
        },
         {
          method: "GET",
          path: "/user/update/password/id/:id/:password",
          handler: "posts-report.updatePasswordById",
          config: {
            policies: [],
            middlewares: [],
        },          
        },
        {
          method: "GET",
          path: "/user/update/password/username/:username/:password",
          handler: "posts-report.updatePasswordByUsername",
          config: {
            policies: [],
            middlewares: [],
        },          
        },
        {
          method: "GET",
          path: "/user/delete/:id/:phone",
          handler: "posts-report.deleteUserById",
          config: {
            policies: [],
            middlewares: [],
        },          
        },
        /*
        {
          method: "PUT",
          path: "/user/update/:id",
          handler: "posts-report.updateUser",
          config: {
            policies: [],
            middlewares: [],
        },          
        },*/
      ],
    };