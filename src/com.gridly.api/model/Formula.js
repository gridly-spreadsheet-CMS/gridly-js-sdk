/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 5.9.0
 * Contact: support@gridly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Formula model module.
 * @module com.gridly.api/model/Formula
 * @version 5.9.0
 */
class Formula {
    /**
     * Constructs a new <code>Formula</code>.
     * @alias module:com.gridly.api/model/Formula
     * @param formulaText {String} 
     */
    constructor(formulaText) { 
        
        Formula.initialize(this, formulaText);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, formulaText) { 
        obj['formulaText'] = formulaText;
    }

    /**
     * Constructs a <code>Formula</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/Formula} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/Formula} The populated <code>Formula</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Formula();

            if (data.hasOwnProperty('formulaText')) {
                obj['formulaText'] = ApiClient.convertToType(data['formulaText'], 'String');
            }
            if (data.hasOwnProperty('alwaysFormatResultValueAsList')) {
                obj['alwaysFormatResultValueAsList'] = ApiClient.convertToType(data['alwaysFormatResultValueAsList'], 'Boolean');
            }
            if (data.hasOwnProperty('detectResultValueType')) {
                obj['detectResultValueType'] = ApiClient.convertToType(data['detectResultValueType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Formula</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Formula</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Formula.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['formulaText'] && !(typeof data['formulaText'] === 'string' || data['formulaText'] instanceof String)) {
            throw new Error("Expected the field `formulaText` to be a primitive type in the JSON string but got " + data['formulaText']);
        }
        // ensure the json data is a string
        if (data['detectResultValueType'] && !(typeof data['detectResultValueType'] === 'string' || data['detectResultValueType'] instanceof String)) {
            throw new Error("Expected the field `detectResultValueType` to be a primitive type in the JSON string but got " + data['detectResultValueType']);
        }

        return true;
    }


}

Formula.RequiredProperties = ["formulaText"];

/**
 * @member {String} formulaText
 */
Formula.prototype['formulaText'] = undefined;

/**
 * @member {Boolean} alwaysFormatResultValueAsList
 */
Formula.prototype['alwaysFormatResultValueAsList'] = undefined;

/**
 * @member {module:com.gridly.api/model/Formula.DetectResultValueTypeEnum} detectResultValueType
 */
Formula.prototype['detectResultValueType'] = undefined;





/**
 * Allowed values for the <code>detectResultValueType</code> property.
 * @enum {String}
 * @readonly
 */
Formula['DetectResultValueTypeEnum'] = {

    /**
     * value: "list"
     * @const
     */
    "list": "list",

    /**
     * value: "string"
     * @const
     */
    "string": "string",

    /**
     * value: "decimal"
     * @const
     */
    "decimal": "decimal",

    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean",

    /**
     * value: "datetime"
     * @const
     */
    "datetime": "datetime",

    /**
     * value: "na"
     * @const
     */
    "na": "na"
};



export default Formula;

