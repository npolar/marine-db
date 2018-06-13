import {JsonSchema} from '../json-schema/JsonSchema.mjs';
import path from 'path';
import fs from 'fs';
import {GearVocab} from './GearVocab.mjs';

const sampleSchemaPath = path.resolve('web/schema/sample-schema.json');
const sampleSchema = JSON.parse(fs.readFileSync(sampleSchemaPath));
const gearEnum = new GearVocab().schema.enum;
sampleSchema.properties.gear.enum = gearEnum;

export class SampleSchema extends JsonSchema {
  constructor(schema=sampleSchema) {
    super({schema});
  }
}
