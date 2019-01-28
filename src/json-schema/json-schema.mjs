import fs from "fs";
import path from "path";
import Ajv from "ajv";

const ajvOptions = { allErrors: true };
const ajvFactory = () => new Ajv(ajvOptions);
const jsonSchema7 = "http://json-schema.org/draft-07/schema#";

export class JsonSchema {
  constructor({ schema } = {}) {
    if (schema) {
      this.schema = schema;
    }
  }
  get schema() {
    return this._schema;
  }

  get errors() {
    return this._validate.errors;
  }

  get properties() {
    return this.schema.properties || {};
  }

  get requried() {
    return this.schema.required || [];
  }

  set schema(objOrPath) {
    let json;
    if (this.isSchema(objOrPath)) {
      json = objOrPath;
    } else {
      json = JSON.parse(fs.readFileSync(path.resolve(objOrPath)));
    }
    const ajv = ajvFactory();
    this._validate = ajv.compile(json);
    this._schema = json;
  }

  isSchema(json, $schema = jsonSchema7) {
    return json && json.$schema && json.$schema === $schema;
  }

  isValid(d) {
    return this._validate(d);
  }

  isValidEnum(prop, str) {
    if (!this.properties[prop] || !this.properties[prop].enum) {
      console.warn("No enum for", prop);
      return false;
    }
    return this.properties[prop].enum.includes(str);
  }

  get strings() {
    return this._propsByType("string", this.properties);
  }

  get numbers() {
    return this._propsByType("number", this.properties);
  }

  get terms() {
    return Object.keys(this.properties);
  }

  fixTypes(d, whichProperties = this.properties) {
    d = this.fixStrings(d, whichProperties);
    d = this.fixNumber(d, whichProperties);
    return d;
  }

  fixStrings(d, whichProperties) {
    this._propsByType("string", whichProperties).forEach(k => {
      if (d.hasOwnProperty(k)) {
        if (["undefined", "null", "", null, NaN, -NaN].includes(d[k])) {
          d[k] = null;
        }
        d[k] = String(d[k]);
      }
    });
    return d;
  }

  fixNumber(d, whichProperties) {
    this._propsByType("number", whichProperties).forEach(k => {
      if (d.hasOwnProperty(k)) {
        if (String(d[k]) === "" || "string" === typeof d[k]) {
          d[k] = null;
        } else if (d[k] == Number(d[k])) {
          d[k] = Number(d[k]);
        }
      }
    });
    return d;
  }

  _propsByType(type, whichProperties = this.properties) {
    type = String(type).toLowerCase();
    const props = [];
    Object.keys(whichProperties).forEach(k => {
      const p = whichProperties[k];
      if (p.type === type || p.type.includes(type)) {
        props.push(k);
      }
    });
    return props;
  }
}
