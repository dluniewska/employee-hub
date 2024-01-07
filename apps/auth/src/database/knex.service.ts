// src/knex/knex.service.ts
import { Injectable } from '@nestjs/common';
import * as Knex from 'knex';
import KnexConfig from '../../knexfile';

@Injectable()
export class KnexService {
  public knex: Knex.Knex;

  constructor() {
    this.knex = Knex(KnexConfig[process.env.NODE_ENV || 'development']);
  }
}
