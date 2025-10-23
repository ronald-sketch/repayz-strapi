export default {
  routes: [
    {
      method: 'GET',
      path: '/settings',
      handler: 'setting.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/settings',
      handler: 'setting.update',
      config: {
        auth: false,
      },
    },
  ],
};

