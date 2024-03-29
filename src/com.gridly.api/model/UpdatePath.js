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
 * The UpdatePath model module.
 * @module com.gridly.api/model/UpdatePath
 * @version 4.21.5
 */
class UpdatePath {
    /**
     * Constructs a new <code>UpdatePath</code>.
     * @alias module:com.gridly.api/model/UpdatePath
     * @param newName {String} 
     */
    constructor(newName) { 
        
        UpdatePath.initialize(this, newName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, newName) { 
        obj['newName'] = newName;
    }

    /**
     * Constructs a <code>UpdatePath</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/UpdatePath} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/UpdatePath} The populated <code>UpdatePath</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePath();

            if (data.hasOwnProperty('newName')) {
                obj['newName'] = ApiClient.convertToType(data['newName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} newName
 */
UpdatePath.prototype['newName'] = undefined;






export default UpdatePath;

