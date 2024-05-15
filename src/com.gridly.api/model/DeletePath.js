/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 4.33.0
 * Contact: support@gridly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeletePath model module.
 * @module com.gridly.api/model/DeletePath
 * @version 4.33.0
 */
class DeletePath {
    /**
     * Constructs a new <code>DeletePath</code>.
     * @alias module:com.gridly.api/model/DeletePath
     */
    constructor() { 
        
        DeletePath.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeletePath</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/DeletePath} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/DeletePath} The populated <code>DeletePath</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeletePath();

            if (data.hasOwnProperty('paths')) {
                obj['paths'] = ApiClient.convertToType(data['paths'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeletePath</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeletePath</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['paths'])) {
            throw new Error("Expected the field `paths` to be an array in the JSON data but got " + data['paths']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} paths
 */
DeletePath.prototype['paths'] = undefined;






export default DeletePath;

