export default {
  routes: [
    {
      method: 'GET',
      path: '/leaderboard-entries',
      handler: 'leaderboard-entry.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/leaderboard-entries/:id',
      handler: 'leaderboard-entry.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/leaderboard-entries',
      handler: 'leaderboard-entry.create',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/leaderboard-entries/:id',
      handler: 'leaderboard-entry.update',
      config: {
        auth: false,
      },
    },
    {
      method: 'DELETE',
      path: '/leaderboard-entries/:id',
      handler: 'leaderboard-entry.delete',
      config: {
        auth: false,
      },
    },
  ],
};

