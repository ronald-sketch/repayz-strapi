import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async getMachineStatus(machineId: string) {
    const entity = await strapi.db.query('api::machine-status.machine-status').findOne({
      where: { machineId },
    });
    return entity;
  },

  async getAllMachineStatuses() {
    const entities = await strapi.db.query('api::machine-status.machine-status').findMany();
    return entities;
  },

  async updateMachineStatus(machineId: string, data: any) {
    const entity = await strapi.db.query('api::machine-status.machine-status').update({
      where: { machineId },
      data,
    });
    return entity;
  },
});

