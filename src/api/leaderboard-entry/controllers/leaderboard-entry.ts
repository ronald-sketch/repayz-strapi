import type { Core } from '@strapi/strapi';

const leaderboardEntry = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(ctx) {
    const entities = await strapi.db.query('api::leaderboard-entry.leaderboard-entry').findMany();
    const sanitizedEntities = await this.sanitizeOutput(entities, ctx);
    return { data: sanitizedEntities };
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query('api::leaderboard-entry.leaderboard-entry').findOne({
      where: { id },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return { data: sanitizedEntity };
  },

  async create(ctx) {
    const { data } = ctx.request.body;
    const entity = await strapi.db.query('api::leaderboard-entry.leaderboard-entry').create({
      data,
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return { data: sanitizedEntity };
  },

  async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;
    const entity = await strapi.db.query('api::leaderboard-entry.leaderboard-entry').update({
      where: { id },
      data,
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return { data: sanitizedEntity };
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query('api::leaderboard-entry.leaderboard-entry').delete({
      where: { id },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return { data: sanitizedEntity };
  },
});

export default leaderboardEntry;

