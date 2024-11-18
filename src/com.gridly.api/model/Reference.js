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
 * The Reference model module.
 * @module com.gridly.api/model/Reference
 * @version 5.9.0
 */
class Reference {
    /**
     * Constructs a new <code>Reference</code>.
     * @alias module:com.gridly.api/model/Reference
     * @param gridId {String} 
     * @param columnId {String} 
     */
    constructor(gridId, columnId) { 
        
        Reference.initialize(this, gridId, columnId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gridId, columnId) { 
        obj['gridId'] = gridId;
        obj['columnId'] = columnId;
    }

    /**
     * Constructs a <code>Reference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/Reference} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/Reference} The populated <code>Reference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Reference();

            if (data.hasOwnProperty('gridId')) {
                obj['gridId'] = ApiClient.convertToType(data['gridId'], 'String');
            }
            if (data.hasOwnProperty('branchId')) {
                obj['branchId'] = ApiClient.convertToType(data['branchId'], 'String');
            }
            if (data.hasOwnProperty('columnId')) {
                obj['columnId'] = ApiClient.convertToType(data['columnId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('selectionType')) {
                obj['selectionType'] = ApiClient.convertToType(data['selectionType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Reference</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Reference</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Reference.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['gridId'] && !(typeof data['gridId'] === 'string' || data['gridId'] instanceof String)) {
            throw new Error("Expected the field `gridId` to be a primitive type in the JSON string but got " + data['gridId']);
        }
        // ensure the json data is a string
        if (data['branchId'] && !(typeof data['branchId'] === 'string' || data['branchId'] instanceof String)) {
            throw new Error("Expected the field `branchId` to be a primitive type in the JSON string but got " + data['branchId']);
        }
        // ensure the json data is a string
        if (data['columnId'] && !(typeof data['columnId'] === 'string' || data['columnId'] instanceof String)) {
            throw new Error("Expected the field `columnId` to be a primitive type in the JSON string but got " + data['columnId']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['selectionType'] && !(typeof data['selectionType'] === 'string' || data['selectionType'] instanceof String)) {
            throw new Error("Expected the field `selectionType` to be a primitive type in the JSON string but got " + data['selectionType']);
        }

        return true;
    }


}

Reference.RequiredProperties = ["gridId", "columnId"];

/**
 * @member {String} gridId
 */
Reference.prototype['gridId'] = undefined;

/**
 * @member {String} branchId
 */
Reference.prototype['branchId'] = undefined;

/**
 * @member {String} columnId
 */
Reference.prototype['columnId'] = undefined;

/**
 * @member {module:com.gridly.api/model/Reference.TypeEnum} type
 */
Reference.prototype['type'] = undefined;

/**
 * @member {module:com.gridly.api/model/Reference.SelectionTypeEnum} selectionType
 */
Reference.prototype['selectionType'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Reference['TypeEnum'] = {

    /**
     * value: "row"
     * @const
     */
    "row": "row",

    /**
     * value: "cell"
     * @const
     */
    "cell": "cell"
};


/**
 * Allowed values for the <code>selectionType</code> property.
 * @enum {String}
 * @readonly
 */
Reference['SelectionTypeEnum'] = {

    /**
     * value: "single"
     * @const
     */
    "single": "single",

    /**
     * value: "multiple"
     * @const
     */
    "multiple": "multiple"
};



export default Reference;

