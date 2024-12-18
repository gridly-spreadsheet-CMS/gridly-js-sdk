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
 * The DateTimeFormat model module.
 * @module com.gridly.api/model/DateTimeFormat
 * @version 5.9.0
 */
class DateTimeFormat {
    /**
     * Constructs a new <code>DateTimeFormat</code>.
     * @alias module:com.gridly.api/model/DateTimeFormat
     */
    constructor() { 
        
        DateTimeFormat.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DateTimeFormat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/DateTimeFormat} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/DateTimeFormat} The populated <code>DateTimeFormat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DateTimeFormat();

            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('timeFormat')) {
                obj['timeFormat'] = ApiClient.convertToType(data['timeFormat'], 'String');
            }
            if (data.hasOwnProperty('zoneOffset')) {
                obj['zoneOffset'] = ApiClient.convertToType(data['zoneOffset'], 'String');
            }
            if (data.hasOwnProperty('showTimeZone')) {
                obj['showTimeZone'] = ApiClient.convertToType(data['showTimeZone'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DateTimeFormat</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DateTimeFormat</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dateFormat'] && !(typeof data['dateFormat'] === 'string' || data['dateFormat'] instanceof String)) {
            throw new Error("Expected the field `dateFormat` to be a primitive type in the JSON string but got " + data['dateFormat']);
        }
        // ensure the json data is a string
        if (data['timeFormat'] && !(typeof data['timeFormat'] === 'string' || data['timeFormat'] instanceof String)) {
            throw new Error("Expected the field `timeFormat` to be a primitive type in the JSON string but got " + data['timeFormat']);
        }
        // ensure the json data is a string
        if (data['zoneOffset'] && !(typeof data['zoneOffset'] === 'string' || data['zoneOffset'] instanceof String)) {
            throw new Error("Expected the field `zoneOffset` to be a primitive type in the JSON string but got " + data['zoneOffset']);
        }

        return true;
    }


}



/**
 * @member {String} dateFormat
 */
DateTimeFormat.prototype['dateFormat'] = undefined;

/**
 * @member {String} timeFormat
 */
DateTimeFormat.prototype['timeFormat'] = undefined;

/**
 * @member {String} zoneOffset
 */
DateTimeFormat.prototype['zoneOffset'] = undefined;

/**
 * @member {Boolean} showTimeZone
 */
DateTimeFormat.prototype['showTimeZone'] = undefined;






export default DateTimeFormat;

