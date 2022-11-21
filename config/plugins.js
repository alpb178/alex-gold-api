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
 
    // ...
  };