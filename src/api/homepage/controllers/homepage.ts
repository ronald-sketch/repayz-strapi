import type { Core } from '@strapi/strapi';

const homepage = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(ctx) {
    const entity = await strapi.db.query('api::homepage.homepage').findOne();
    return { data: entity };
  },

  async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;

    const entity = await strapi.db.query('api::homepage.homepage').update({
      where: { id },
      data,
    });

    return { data: entity };
  },
});

export default homepage;

