import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async getHomepage() {
    const entity = await strapi.db.query('api::homepage.homepage').findOne();
    return entity;
  },

  async updateHomepage(data: any) {
    const entity = await strapi.db.query('api::homepage.homepage').update({
      data,
    });
    return entity;
  },
});

