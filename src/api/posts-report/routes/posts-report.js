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
          path: "/jwel/findByCode/:code",
          handler: "posts-report.findJwelByCode",
          config: {
            policies: [],
            middlewares: [],
          },
        },
        {
          method: "GET",
          path: "/jwel/findByModel/:model",
          handler: "posts-report.findJwelByModel",
          config: {
            policies: [],
            middlewares: [],
          },
          
        },
        {
          method: "GET",
          path: "/jwel/findAll",
          handler: "posts-report.findAllJewl",
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
          path: "/jewlCatalogue/findAll",
          handler: "posts-report.findAllJewlCatalogue",
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
      ],
    };
