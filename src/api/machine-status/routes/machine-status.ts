export default {
  routes: [
    {
      method: 'GET',
      path: '/machine-statuses',
      handler: 'machine-status.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/machine-statuses/:id',
      handler: 'machine-status.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/machine-statuses',
      handler: 'machine-status.create',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/machine-statuses/:id',
      handler: 'machine-status.update',
      config: {
        auth: false,
      },
    },
    {
      method: 'DELETE',
      path: '/machine-statuses/:id',
      handler: 'machine-status.delete',
      config: {
        auth: false,
      },
    },
  ],
};

