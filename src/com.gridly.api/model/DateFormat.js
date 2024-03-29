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

/**
 * The DateFormat model module.
 * @module com.gridly.api/model/DateFormat
 * @version 4.21.5
 */
class DateFormat {
    /**
     * Constructs a new <code>DateFormat</code>.
     * @alias module:com.gridly.api/model/DateFormat
     */
    constructor() { 
        
        DateFormat.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DateFormat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/DateFormat} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/DateFormat} The populated <code>DateFormat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DateFormat();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
DateFormat.prototype['name'] = undefined;

/**
 * @member {String} format
 */
DateFormat.prototype['format'] = undefined;






export default DateFormat;

