import { Knex } from "knex";
import { Roles } from "../../types/enums.roles";
import * as bcrypt from "bcrypt";

const genPassword = () => bcrypt.hash('zaq1@WSX', 10)

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("auth").del();

    // Inserts seed entries
    await knex('auth').insert([
        {
          id: 1,
          email: 'admin@eh.com',
          password: await genPassword(),
          role: Roles.ADMIN
        },
        {
          id: 2,
          email: 'jaskier@eh.com',
          password: await genPassword(),
          role: Roles.USER
        }
      ]);
};
