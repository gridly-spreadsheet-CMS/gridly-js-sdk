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
 * The CreateFileCategory model module.
 * @module com.gridly.api/model/CreateFileCategory
 * @version 5.9.0
 */
class CreateFileCategory {
    /**
     * Constructs a new <code>CreateFileCategory</code>.
     * @alias module:com.gridly.api/model/CreateFileCategory
     * @param name {String} 
     */
    constructor(name) { 
        
        CreateFileCategory.initialize(this, name);
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
     * Constructs a <code>CreateFileCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/CreateFileCategory} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/CreateFileCategory} The populated <code>CreateFileCategory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFileCategory();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateFileCategory</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateFileCategory</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateFileCategory.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

CreateFileCategory.RequiredProperties = ["name"];

/**
 * @member {String} name
 */
CreateFileCategory.prototype['name'] = undefined;






export default CreateFileCategory;

