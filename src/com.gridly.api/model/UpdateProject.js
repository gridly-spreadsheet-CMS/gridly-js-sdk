/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 3.39.2
 * Contact: 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateProject model module.
 * @module com.gridly.api/model/UpdateProject
 * @version 3.39.2
 */
class UpdateProject {
    /**
     * Constructs a new <code>UpdateProject</code>.
     * @alias module:com.gridly.api/model/UpdateProject
     * @param name {String} 
     */
    constructor(name) { 
        
        UpdateProject.initialize(this, name);
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
     * Constructs a <code>UpdateProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/UpdateProject} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/UpdateProject} The populated <code>UpdateProject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateProject();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
UpdateProject.prototype['name'] = undefined;

/**
 * @member {String} description
 */
UpdateProject.prototype['description'] = undefined;






export default UpdateProject;

