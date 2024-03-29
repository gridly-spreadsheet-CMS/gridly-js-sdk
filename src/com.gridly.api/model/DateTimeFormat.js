/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 4.21.5
 * Contact: support@gridly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DateFormat from './DateFormat';

/**
 * The DateTimeFormat model module.
 * @module com.gridly.api/model/DateTimeFormat
 * @version 4.21.5
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
                obj['dateFormat'] = DateFormat.constructFromObject(data['dateFormat']);
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


}

/**
 * @member {module:com.gridly.api/model/DateFormat} dateFormat
 */
DateTimeFormat.prototype['dateFormat'] = undefined;

/**
 * @member {module:com.gridly.api/model/DateTimeFormat.TimeFormatEnum} timeFormat
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





/**
 * Allowed values for the <code>timeFormat</code> property.
 * @enum {String}
 * @readonly
 */
DateTimeFormat['TimeFormatEnum'] = {

    /**
     * value: "hour12"
     * @const
     */
    "hour12": "hour12",

    /**
     * value: "hour24"
     * @const
     */
    "hour24": "hour24"
};



export default DateTimeFormat;

