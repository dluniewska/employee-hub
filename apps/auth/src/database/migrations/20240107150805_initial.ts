import type { Knex } from "knex";
import { Roles } from "../../types/enums.roles";

export async function up(knex: Knex): Promise<void> {
    await knex.schema
      .createTable('auth', (table) => {
          table.increments('id').primary()
          table.string('email').unique()
          table.string('password').notNullable()
          table.enum('role', [Roles.ADMIN.toString(), Roles.USER.toString()]).defaultTo(Roles.USER.toString())
          table.timestamps(true, true)
      })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema
      .dropTable('auth')
}

