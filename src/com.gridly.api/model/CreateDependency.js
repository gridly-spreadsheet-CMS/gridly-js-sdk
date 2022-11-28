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
 * The CreateDependency model module.
 * @module com.gridly.api/model/CreateDependency
 * @version 3.39.2
 */
class CreateDependency {
    /**
     * Constructs a new <code>CreateDependency</code>.
     * @alias module:com.gridly.api/model/CreateDependency
     * @param sourceColumnId {String} 
     * @param targetColumnId {String} 
     */
    constructor(sourceColumnId, targetColumnId) { 
        
        CreateDependency.initialize(this, sourceColumnId, targetColumnId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourceColumnId, targetColumnId) { 
        obj['sourceColumnId'] = sourceColumnId;
        obj['targetColumnId'] = targetColumnId;
    }

    /**
     * Constructs a <code>CreateDependency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/CreateDependency} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/CreateDependency} The populated <code>CreateDependency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDependency();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('sourceColumnId')) {
                obj['sourceColumnId'] = ApiClient.convertToType(data['sourceColumnId'], 'String');
            }
            if (data.hasOwnProperty('targetColumnId')) {
                obj['targetColumnId'] = ApiClient.convertToType(data['targetColumnId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
CreateDependency.prototype['id'] = undefined;

/**
 * @member {String} sourceColumnId
 */
CreateDependency.prototype['sourceColumnId'] = undefined;

/**
 * @member {String} targetColumnId
 */
CreateDependency.prototype['targetColumnId'] = undefined;






export default CreateDependency;

