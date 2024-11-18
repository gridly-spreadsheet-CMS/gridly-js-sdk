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
 * The FilterField model module.
 * @module com.gridly.api/model/FilterField
 * @version 5.9.0
 */
class FilterField {
    /**
     * Constructs a new <code>FilterField</code>.
     * @alias module:com.gridly.api/model/FilterField
     * @param operator {module:com.gridly.api/model/FilterField.OperatorEnum} 
     */
    constructor(operator) { 
        
        FilterField.initialize(this, operator);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operator) { 
        obj['operator'] = operator;
    }

    /**
     * Constructs a <code>FilterField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/FilterField} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/FilterField} The populated <code>FilterField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilterField();

            if (data.hasOwnProperty('caseSensitive')) {
                obj['caseSensitive'] = ApiClient.convertToType(data['caseSensitive'], 'Boolean');
            }
            if (data.hasOwnProperty('columnId')) {
                obj['columnId'] = ApiClient.convertToType(data['columnId'], 'String');
            }
            if (data.hasOwnProperty('dynamicColumn')) {
                obj['dynamicColumn'] = ApiClient.convertToType(data['dynamicColumn'], 'String');
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('queryPathTagViaId')) {
                obj['queryPathTagViaId'] = ApiClient.convertToType(data['queryPathTagViaId'], 'Boolean');
            }
            if (data.hasOwnProperty('subField')) {
                obj['subField'] = ApiClient.convertToType(data['subField'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FilterField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FilterField</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FilterField.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['columnId'] && !(typeof data['columnId'] === 'string' || data['columnId'] instanceof String)) {
            throw new Error("Expected the field `columnId` to be a primitive type in the JSON string but got " + data['columnId']);
        }
        // ensure the json data is a string
        if (data['dynamicColumn'] && !(typeof data['dynamicColumn'] === 'string' || data['dynamicColumn'] instanceof String)) {
            throw new Error("Expected the field `dynamicColumn` to be a primitive type in the JSON string but got " + data['dynamicColumn']);
        }
        // ensure the json data is a string
        if (data['operator'] && !(typeof data['operator'] === 'string' || data['operator'] instanceof String)) {
            throw new Error("Expected the field `operator` to be a primitive type in the JSON string but got " + data['operator']);
        }
        // ensure the json data is a string
        if (data['subField'] && !(typeof data['subField'] === 'string' || data['subField'] instanceof String)) {
            throw new Error("Expected the field `subField` to be a primitive type in the JSON string but got " + data['subField']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['values'])) {
            throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
        }

        return true;
    }


}

FilterField.RequiredProperties = ["operator"];

/**
 * @member {Boolean} caseSensitive
 */
FilterField.prototype['caseSensitive'] = undefined;

/**
 * @member {String} columnId
 */
FilterField.prototype['columnId'] = undefined;

/**
 * @member {String} dynamicColumn
 */
FilterField.prototype['dynamicColumn'] = undefined;

/**
 * @member {module:com.gridly.api/model/FilterField.OperatorEnum} operator
 */
FilterField.prototype['operator'] = undefined;

/**
 * @member {Boolean} queryPathTagViaId
 */
FilterField.prototype['queryPathTagViaId'] = undefined;

/**
 * @member {module:com.gridly.api/model/FilterField.SubFieldEnum} subField
 */
FilterField.prototype['subField'] = undefined;

/**
 * @member {Array.<Object>} values
 */
FilterField.prototype['values'] = undefined;





/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */
FilterField['OperatorEnum'] = {

    /**
     * value: "isNull"
     * @const
     */
    "isNull": "isNull",

    /**
     * value: "isNotNull"
     * @const
     */
    "isNotNull": "isNotNull",

    /**
     * value: "isEmpty"
     * @const
     */
    "isEmpty": "isEmpty",

    /**
     * value: "isNotEmpty"
     * @const
     */
    "isNotEmpty": "isNotEmpty",

    /**
     * value: "contains"
     * @const
     */
    "contains": "contains",

    /**
     * value: "notContains"
     * @const
     */
    "notContains": "notContains",

    /**
     * value: "startsWith"
     * @const
     */
    "startsWith": "startsWith",

    /**
     * value: "notStartsWith"
     * @const
     */
    "notStartsWith": "notStartsWith",

    /**
     * value: "endsWith"
     * @const
     */
    "endsWith": "endsWith",

    /**
     * value: "notEndsWith"
     * @const
     */
    "notEndsWith": "notEndsWith",

    /**
     * value: "regexp"
     * @const
     */
    "regexp": "regexp",

    /**
     * value: "notRegexp"
     * @const
     */
    "notRegexp": "notRegexp",

    /**
     * value: "="
     * @const
     */
    "EQUAL": "=",

    /**
     * value: "!="
     * @const
     */
    "NOT_EQUAL": "!=",

    /**
     * value: "<"
     * @const
     */
    "LESS_THAN": "<",

    /**
     * value: "<="
     * @const
     */
    "LESS_THAN_OR_EQUAL_TO": "<=",

    /**
     * value: ">"
     * @const
     */
    "GREATER_THAN": ">",

    /**
     * value: ">="
     * @const
     */
    "GREATER_THAN_OR_EQUAL_TO": ">=",

    /**
     * value: "in"
     * @const
     */
    "in": "in",

    /**
     * value: "notIn"
     * @const
     */
    "notIn": "notIn",

    /**
     * value: "modifiedBy"
     * @const
     */
    "modifiedBy": "modifiedBy",

    /**
     * value: "notModifiedBy"
     * @const
     */
    "notModifiedBy": "notModifiedBy",

    /**
     * value: "between"
     * @const
     */
    "between": "between",

    /**
     * value: "notBetween"
     * @const
     */
    "notBetween": "notBetween",

    /**
     * value: "hasQaError"
     * @const
     */
    "hasQaError": "hasQaError",

    /**
     * value: "isLengthViolated"
     * @const
     */
    "isLengthViolated": "isLengthViolated",

    /**
     * value: "hasTag"
     * @const
     */
    "hasTag": "hasTag",

    /**
     * value: "spellCheck"
     * @const
     */
    "spellCheck": "spellCheck",

    /**
     * value: "qaCheck"
     * @const
     */
    "qaCheck": "qaCheck",

    /**
     * value: "isMt"
     * @const
     */
    "isMt": "isMt"
};


/**
 * Allowed values for the <code>subField</code> property.
 * @enum {String}
 * @readonly
 */
FilterField['SubFieldEnum'] = {

    /**
     * value: "_dependencyStatus"
     * @const
     */
    "dependencyStatus": "_dependencyStatus",

    /**
     * value: "_sourceStatus"
     * @const
     */
    "sourceStatus": "_sourceStatus",

    /**
     * value: "_targetStatus"
     * @const
     */
    "targetStatus": "_targetStatus",

    /**
     * value: "_flowStatus"
     * @const
     */
    "flowStatus": "_flowStatus",

    /**
     * value: "_tm"
     * @const
     */
    "tm": "_tm",

    /**
     * value: "_mt"
     * @const
     */
    "mt": "_mt",

    /**
     * value: "_ticket"
     * @const
     */
    "ticket": "_ticket",

    /**
     * value: "_color"
     * @const
     */
    "color": "_color",

    /**
     * value: "_metadata"
     * @const
     */
    "metadata": "_metadata",

    /**
     * value: "_cell_metadata"
     * @const
     */
    "cell_metadata": "_cell_metadata",

    /**
     * value: "_word_count"
     * @const
     */
    "word_count": "_word_count",

    /**
     * value: "_previewSourceData"
     * @const
     */
    "previewSourceData": "_previewSourceData",

    /**
     * value: "_previewSourceDependencyStatus"
     * @const
     */
    "previewSourceDependencyStatus": "_previewSourceDependencyStatus",

    /**
     * value: "_previewStatus"
     * @const
     */
    "previewStatus": "_previewStatus",

    /**
     * value: "_previewMergeOption"
     * @const
     */
    "previewMergeOption": "_previewMergeOption",

    /**
     * value: "_relativeTime"
     * @const
     */
    "relativeTime": "_relativeTime",

    /**
     * value: "_length_violated"
     * @const
     */
    "length_violated": "_length_violated",

    /**
     * value: "_lengthSetting"
     * @const
     */
    "lengthSetting": "_lengthSetting",

    /**
     * value: "_workflow"
     * @const
     */
    "workflow": "_workflow",

    /**
     * value: "_workflowStepTransitioned"
     * @const
     */
    "workflowStepTransitioned": "_workflowStepTransitioned",

    /**
     * value: "_repetition"
     * @const
     */
    "repetition": "_repetition",

    /**
     * value: "_qaCheckStatus"
     * @const
     */
    "qaCheckStatus": "_qaCheckStatus",

    /**
     * value: "_spellCheckStatus"
     * @const
     */
    "spellCheckStatus": "_spellCheckStatus",

    /**
     * value: "_hasTag"
     * @const
     */
    "hasTag": "_hasTag"
};



export default FilterField;

