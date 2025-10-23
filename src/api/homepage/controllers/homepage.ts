import type { Core } from '@strapi/strapi';

const homepage = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(ctx) {
    const entity = await strapi.db.query('api::homepage.homepage').findOne();
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return { data: sanitizedEntity };
  },

  async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;

    const entity = await strapi.db.query('api::homepage.homepage').update({
      where: { id },
      data,
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return { data: sanitizedEntity };
  },
});

export default homepage;

