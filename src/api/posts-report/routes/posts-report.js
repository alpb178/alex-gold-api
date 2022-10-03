module.exports = {
      routes: [
		{
          method: "GET",
          path: "/posts-report/find/:client",
          handler: "posts-report.findJewlByClient",
          config: {
            policies: [],
            middlewares: [],
          },
        },
        {
          method: "GET",
          path: "/posts-report/findByModel/:model",
          handler: "posts-report.findJewlByModel",
          config: {
            policies: [],
            middlewares: [],
          },
        },
      ],
    };
