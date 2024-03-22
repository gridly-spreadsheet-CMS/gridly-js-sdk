/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 4.29.1
 * Contact: support@gridly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NumberFormat model module.
 * @module com.gridly.api/model/NumberFormat
 * @version 4.29.1
 */
class NumberFormat {
    /**
     * Constructs a new <code>NumberFormat</code>.
     * @alias module:com.gridly.api/model/NumberFormat
     */
    constructor() { 
        
        NumberFormat.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NumberFormat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/NumberFormat} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/NumberFormat} The populated <code>NumberFormat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NumberFormat();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('decimalPlaces')) {
                obj['decimalPlaces'] = ApiClient.convertToType(data['decimalPlaces'], 'Number');
            }
            if (data.hasOwnProperty('currencySymbol')) {
                obj['currencySymbol'] = ApiClient.convertToType(data['currencySymbol'], 'String');
            }
            if (data.hasOwnProperty('use1000Separator')) {
                obj['use1000Separator'] = ApiClient.convertToType(data['use1000Separator'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.gridly.api/model/NumberFormat.TypeEnum} type
 */
NumberFormat.prototype['type'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
NumberFormat.prototype['decimalPlaces'] = undefined;

/**
 * @member {String} currencySymbol
 */
NumberFormat.prototype['currencySymbol'] = undefined;

/**
 * @member {Boolean} use1000Separator
 */
NumberFormat.prototype['use1000Separator'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
NumberFormat['TypeEnum'] = {

    /**
     * value: "DECIMAL"
     * @const
     */
    "DECIMAL": "DECIMAL",

    /**
     * value: "INTEGER"
     * @const
     */
    "INTEGER": "INTEGER"
};



export default NumberFormat;

