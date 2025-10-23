import type { Core } from '@strapi/strapi';

const machineStatus = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(ctx) {
    const entities = await strapi.db.query('api::machine-status.machine-status').findMany();
    const sanitizedEntities = await this.sanitizeOutput(entities, ctx);
    return { data: sanitizedEntities };
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query('api::machine-status.machine-status').findOne({
      where: { id },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return { data: sanitizedEntity };
  },

  async create(ctx) {
    const { data } = ctx.request.body;
    const entity = await strapi.db.query('api::machine-status.machine-status').create({
      data,
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return { data: sanitizedEntity };
  },

  async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;
    const entity = await strapi.db.query('api::machine-status.machine-status').update({
      where: { id },
      data,
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return { data: sanitizedEntity };
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query('api::machine-status.machine-status').delete({
      where: { id },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return { data: sanitizedEntity };
  },
});

export default machineStatus;

