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
 * The ReferencedColumn model module.
 * @module com.gridly.api/model/ReferencedColumn
 * @version 4.21.5
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

