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
import ViewColumn from './ViewColumn';

/**
 * The Grid model module.
 * @module com.gridly.api/model/Grid
 * @version 5.9.0
 */
class Grid {
    /**
     * Constructs a new <code>Grid</code>.
     * @alias module:com.gridly.api/model/Grid
     */
    constructor() { 
        
        Grid.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Grid</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/Grid} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/Grid} The populated <code>Grid</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Grid();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('columns')) {
                obj['columns'] = ApiClient.convertToType(data['columns'], [ViewColumn]);
            }
            if (data.hasOwnProperty('defaultAccessViewId')) {
                obj['defaultAccessViewId'] = ApiClient.convertToType(data['defaultAccessViewId'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('recordIdentifierType')) {
                obj['recordIdentifierType'] = ApiClient.convertToType(data['recordIdentifierType'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Grid</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Grid</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        if (data['columns']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['columns'])) {
                throw new Error("Expected the field `columns` to be an array in the JSON data but got " + data['columns']);
            }
            // validate the optional field `columns` (array)
            for (const item of data['columns']) {
                ViewColumn.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['defaultAccessViewId'] && !(typeof data['defaultAccessViewId'] === 'string' || data['defaultAccessViewId'] instanceof String)) {
            throw new Error("Expected the field `defaultAccessViewId` to be a primitive type in the JSON string but got " + data['defaultAccessViewId']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['recordIdentifierType'] && !(typeof data['recordIdentifierType'] === 'string' || data['recordIdentifierType'] instanceof String)) {
            throw new Error("Expected the field `recordIdentifierType` to be a primitive type in the JSON string but got " + data['recordIdentifierType']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
Grid.prototype['id'] = undefined;

/**
 * @member {Array.<module:com.gridly.api/model/ViewColumn>} columns
 */
Grid.prototype['columns'] = undefined;

/**
 * @member {String} defaultAccessViewId
 */
Grid.prototype['defaultAccessViewId'] = undefined;

/**
 * @member {String} description
 */
Grid.prototype['description'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
Grid.prototype['metadata'] = undefined;

/**
 * @member {String} name
 */
Grid.prototype['name'] = undefined;

/**
 * @member {module:com.gridly.api/model/Grid.RecordIdentifierTypeEnum} recordIdentifierType
 */
Grid.prototype['recordIdentifierType'] = undefined;

/**
 * @member {module:com.gridly.api/model/Grid.StatusEnum} status
 */
Grid.prototype['status'] = undefined;





/**
 * Allowed values for the <code>recordIdentifierType</code> property.
 * @enum {String}
 * @readonly
 */
Grid['RecordIdentifierTypeEnum'] = {

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


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Grid['StatusEnum'] = {

    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted",

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive",

    /**
     * value: "restoring"
     * @const
     */
    "restoring": "restoring",

    /**
     * value: "backingUp"
     * @const
     */
    "backingUp": "backingUp",

    /**
     * value: "uploading"
     * @const
     */
    "uploading": "uploading",

    /**
     * value: "importing"
     * @const
     */
    "importing": "importing",

    /**
     * value: "branching"
     * @const
     */
    "branching": "branching",

    /**
     * value: "merging"
     * @const
     */
    "merging": "merging",

    /**
     * value: "duplicating"
     * @const
     */
    "duplicating": "duplicating",

    /**
     * value: "clearingRecords"
     * @const
     */
    "clearingRecords": "clearingRecords",

    /**
     * value: "copying"
     * @const
     */
    "copying": "copying",

    /**
     * value: "updatingWorkflow"
     * @const
     */
    "updatingWorkflow": "updatingWorkflow"
};



export default Grid;

