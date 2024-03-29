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
 * The MovePath model module.
 * @module com.gridly.api/model/MovePath
 * @version 4.21.5
 */
class MovePath {
    /**
     * Constructs a new <code>MovePath</code>.
     * @alias module:com.gridly.api/model/MovePath
     */
    constructor() { 
        
        MovePath.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MovePath</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/MovePath} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/MovePath} The populated <code>MovePath</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MovePath();

            if (data.hasOwnProperty('fromParentPath')) {
                obj['fromParentPath'] = ApiClient.convertToType(data['fromParentPath'], 'String');
            }
            if (data.hasOwnProperty('moveAfter')) {
                obj['moveAfter'] = ApiClient.convertToType(data['moveAfter'], 'String');
            }
            if (data.hasOwnProperty('moveBefore')) {
                obj['moveBefore'] = ApiClient.convertToType(data['moveBefore'], 'String');
            }
            if (data.hasOwnProperty('names')) {
                obj['names'] = ApiClient.convertToType(data['names'], ['String']);
            }
            if (data.hasOwnProperty('toParentPath')) {
                obj['toParentPath'] = ApiClient.convertToType(data['toParentPath'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} fromParentPath
 */
MovePath.prototype['fromParentPath'] = undefined;

/**
 * @member {String} moveAfter
 */
MovePath.prototype['moveAfter'] = undefined;

/**
 * @member {String} moveBefore
 */
MovePath.prototype['moveBefore'] = undefined;

/**
 * @member {Array.<String>} names
 */
MovePath.prototype['names'] = undefined;

/**
 * @member {String} toParentPath
 */
MovePath.prototype['toParentPath'] = undefined;






export default MovePath;

