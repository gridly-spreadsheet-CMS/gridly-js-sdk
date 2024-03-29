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
 * The PathSingle model module.
 * @module com.gridly.api/model/PathSingle
 * @version 4.21.5
 */
class PathSingle {
    /**
     * Constructs a new <code>PathSingle</code>.
     * @alias module:com.gridly.api/model/PathSingle
     */
    constructor() { 
        
        PathSingle.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PathSingle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/PathSingle} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/PathSingle} The populated <code>PathSingle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PathSingle();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} path
 */
PathSingle.prototype['path'] = undefined;






export default PathSingle;

