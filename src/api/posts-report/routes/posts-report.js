module.exports = {
      routes: [
		{
          method: "GET",
          path: "/jwel/findByClient/:client",
          handler: "posts-report.findByClient",
          config: {
            policies: [],
            middlewares: [],
          },
        },
        {
          method: "GET",
          path: "/jewlCatalogue/findByCode/:code",
          handler: "posts-report.findByCode",
          config: {
            policies: [],
            middlewares: [],
          },

        },
           {
          method: "GET",
          path: "/jewlCatalogue/findByModel/:model",
          handler: "posts-report.findByModel",
          config: {
            policies: [],
            middlewares: [],
          },
          
        },
        {
          method: "GET",
          path: "/jewlCatalogue/findAll",
          handler: "posts-report.findAll",
          config: {
            policies: [],
            middlewares: [],
          },
          
        },
      ],
    };
