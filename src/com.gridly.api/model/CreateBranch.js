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
 * The CreateBranch model module.
 * @module com.gridly.api/model/CreateBranch
 * @version 4.21.5
 */
class CreateBranch {
    /**
     * Constructs a new <code>CreateBranch</code>.
     * @alias module:com.gridly.api/model/CreateBranch
     * @param name {String} 
     */
    constructor(name) { 
        
        CreateBranch.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateBranch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/CreateBranch} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/CreateBranch} The populated <code>CreateBranch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateBranch();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CreateBranch.prototype['name'] = undefined;






export default CreateBranch;

