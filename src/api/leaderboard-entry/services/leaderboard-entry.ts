import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async getLeaderboardByWeek(week: number, year: number) {
    const entities = await strapi.db.query('api::leaderboard-entry.leaderboard-entry').findMany({
      where: { week, year },
      orderBy: { rank: 'asc' },
    });
    return entities;
  },

  async getCurrentWeekLeaderboard() {
    const now = new Date();
    const week = Math.ceil((now.getDate() - now.getDay() + 1) / 7);
    const year = now.getFullYear();
    return this.getLeaderboardByWeek(week, year);
  },

  async createLeaderboardEntry(data: any) {
    const entity = await strapi.db.query('api::leaderboard-entry.leaderboard-entry').create({
      data,
    });
    return entity;
  },
});

