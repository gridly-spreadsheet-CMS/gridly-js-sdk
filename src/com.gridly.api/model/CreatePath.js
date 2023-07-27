/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 4.15.1
 * Contact: support@gridly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreatePath model module.
 * @module com.gridly.api/model/CreatePath
 * @version 4.15.1
 */
class CreatePath {
    /**
     * Constructs a new <code>CreatePath</code>.
     * @alias module:com.gridly.api/model/CreatePath
     */
    constructor() { 
        
        CreatePath.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatePath</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/CreatePath} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/CreatePath} The populated <code>CreatePath</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePath();

            if (data.hasOwnProperty('parentPath')) {
                obj['parentPath'] = ApiClient.convertToType(data['parentPath'], 'String');
            }
            if (data.hasOwnProperty('paths')) {
                obj['paths'] = ApiClient.convertToType(data['paths'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} parentPath
 */
CreatePath.prototype['parentPath'] = undefined;

/**
 * @member {Array.<String>} paths
 */
CreatePath.prototype['paths'] = undefined;






export default CreatePath;

