import type { Knex } from 'knex';
import { Roles } from '../../types/enums.roles';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('auth', (table) => {
    table.bigIncrements('id').primary();
    table.string('email').unique();
    table.string('username').unique();
    table.string('password').notNullable();
    table
      .enum('role', [Roles.ADMIN.toString(), Roles.USER.toString()])
      .defaultTo(Roles.USER.toString());
    table.timestamps(false, true);
    table.boolean('deleted').defaultTo(false);
    table.timestamp('deletedAt');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('auth');
}
