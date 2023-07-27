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
 * The CreateDatabase model module.
 * @module com.gridly.api/model/CreateDatabase
 * @version 4.15.1
 */
class CreateDatabase {
    /**
     * Constructs a new <code>CreateDatabase</code>.
     * body
     * @alias module:com.gridly.api/model/CreateDatabase
     * @param name {String} 
     */
    constructor(name) { 
        
        CreateDatabase.initialize(this, name);
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
     * Constructs a <code>CreateDatabase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/CreateDatabase} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/CreateDatabase} The populated <code>CreateDatabase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDatabase();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('enableGuidRecord')) {
                obj['enableGuidRecord'] = ApiClient.convertToType(data['enableGuidRecord'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CreateDatabase.prototype['name'] = undefined;

/**
 * @member {String} description
 */
CreateDatabase.prototype['description'] = undefined;

/**
 * @member {Boolean} enableGuidRecord
 */
CreateDatabase.prototype['enableGuidRecord'] = undefined;

/**
 * @member {String} id
 */
CreateDatabase.prototype['id'] = undefined;






export default CreateDatabase;

