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
 * The CreateBranch model module.
 * @module com.gridly.api/model/CreateBranch
 * @version 4.33.0
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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('customProperties')) {
                obj['customProperties'] = ApiClient.convertToType(data['customProperties'], {'String': Object});
            }
            if (data.hasOwnProperty('inheritGroupAccess')) {
                obj['inheritGroupAccess'] = ApiClient.convertToType(data['inheritGroupAccess'], 'Boolean');
            }
            if (data.hasOwnProperty('inheritAutomation')) {
                obj['inheritAutomation'] = ApiClient.convertToType(data['inheritAutomation'], 'Boolean');
            }
            if (data.hasOwnProperty('viewId')) {
                obj['viewId'] = ApiClient.convertToType(data['viewId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateBranch</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateBranch</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateBranch.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['viewId'] && !(typeof data['viewId'] === 'string' || data['viewId'] instanceof String)) {
            throw new Error("Expected the field `viewId` to be a primitive type in the JSON string but got " + data['viewId']);
        }

        return true;
    }


}

CreateBranch.RequiredProperties = ["name"];

/**
 * @member {String} name
 */
CreateBranch.prototype['name'] = undefined;

/**
 * @member {String} description
 */
CreateBranch.prototype['description'] = undefined;

/**
 * @member {Object.<String, Object>} customProperties
 */
CreateBranch.prototype['customProperties'] = undefined;

/**
 * @member {Boolean} inheritGroupAccess
 */
CreateBranch.prototype['inheritGroupAccess'] = undefined;

/**
 * @member {Boolean} inheritAutomation
 */
CreateBranch.prototype['inheritAutomation'] = undefined;

/**
 * @member {String} viewId
 */
CreateBranch.prototype['viewId'] = undefined;






export default CreateBranch;

