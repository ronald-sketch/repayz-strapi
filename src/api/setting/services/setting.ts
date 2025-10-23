import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async getSettings() {
    const entity = await strapi.db.query('api::setting.setting').findOne();
    return entity;
  },

  async updateSettings(data: any) {
    const entity = await strapi.db.query('api::setting.setting').update({
      data,
    });
    return entity;
  },
});

