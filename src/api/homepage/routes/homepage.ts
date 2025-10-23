export default {
  routes: [
    {
      method: 'GET',
      path: '/homepage',
      handler: 'homepage.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/homepage',
      handler: 'homepage.update',
      config: {
        auth: false,
      },
    },
  ],
};

