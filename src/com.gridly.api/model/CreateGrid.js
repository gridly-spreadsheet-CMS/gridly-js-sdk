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
 * The CreateGrid model module.
 * @module com.gridly.api/model/CreateGrid
 * @version 3.39.2
 */
class CreateGrid {
    /**
     * Constructs a new <code>CreateGrid</code>.
     * @alias module:com.gridly.api/model/CreateGrid
     * @param name {String} 
     */
    constructor(name) { 
        
        CreateGrid.initialize(this, name);
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
     * Constructs a <code>CreateGrid</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/CreateGrid} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/CreateGrid} The populated <code>CreateGrid</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateGrid();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('templateGridId')) {
                obj['templateGridId'] = ApiClient.convertToType(data['templateGridId'], 'String');
            }
            if (data.hasOwnProperty('recordIdentifierType')) {
                obj['recordIdentifierType'] = ApiClient.convertToType(data['recordIdentifierType'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CreateGrid.prototype['name'] = undefined;

/**
 * @member {String} templateGridId
 */
CreateGrid.prototype['templateGridId'] = undefined;

/**
 * @member {module:com.gridly.api/model/CreateGrid.RecordIdentifierTypeEnum} recordIdentifierType
 */
CreateGrid.prototype['recordIdentifierType'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
CreateGrid.prototype['metadata'] = undefined;





/**
 * Allowed values for the <code>recordIdentifierType</code> property.
 * @enum {String}
 * @readonly
 */
CreateGrid['RecordIdentifierTypeEnum'] = {

    /**
     * value: "recordId"
     * @const
     */
    "recordId": "recordId",

    /**
     * value: "pathTagRecordId"
     * @const
     */
    "pathTagRecordId": "pathTagRecordId"
};



export default CreateGrid;

