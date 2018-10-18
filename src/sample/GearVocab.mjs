import {JsonSchema} from '../json-schema/JsonSchema.mjs';
import path from 'path';
import fs from 'fs';

export const gearSchemaPath = path.resolve('web/vocab/gear.json');

export class GearVocab extends JsonSchema {
  constructor(schema=gearSchemaPath) {
    super({schema});
  }

  get enum() {
    return this.schema.enum;
  }

}
