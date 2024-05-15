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
 * The ReferencedColumn model module.
 * @module com.gridly.api/model/ReferencedColumn
 * @version 4.33.0
 */
class ReferencedColumn {
    /**
     * Constructs a new <code>ReferencedColumn</code>.
     * @alias module:com.gridly.api/model/ReferencedColumn
     */
    constructor() { 
        
        ReferencedColumn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReferencedColumn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/ReferencedColumn} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/ReferencedColumn} The populated <code>ReferencedColumn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReferencedColumn();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('selectionOptions')) {
                obj['selectionOptions'] = ApiClient.convertToType(data['selectionOptions'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReferencedColumn</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReferencedColumn</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['selectionOptions'])) {
            throw new Error("Expected the field `selectionOptions` to be an array in the JSON data but got " + data['selectionOptions']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ReferencedColumn.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ReferencedColumn.prototype['name'] = undefined;

/**
 * @member {Array.<String>} selectionOptions
 */
ReferencedColumn.prototype['selectionOptions'] = undefined;






export default ReferencedColumn;

