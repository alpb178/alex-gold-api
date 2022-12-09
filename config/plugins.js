module.exports ={
    // ...
    /*'import-shineon': {
      enabled: true,
      resolve: './src/plugins/import-shineon'
    },
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },*/
     upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'dreytxkir',
        api_key: '647991477547826',
        api_secret: 'qGf_og4UECgLUDadQjeDZhuZLi4',
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
 /**/email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: '@gmail.com',
        port: 587,
        auth: {
          user: 'jramosg666',
          pass: 'boli+92080427868666',
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'hello@example.com',
        defaultReplyTo: 'hello@example.com',
      },
    },
  },
    // ...
  };