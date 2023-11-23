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
import ColumnReference from './ColumnReference';
import DateTimeFormat from './DateTimeFormat';
import Formula from './Formula';
import NumberFormat from './NumberFormat';

/**
 * The ViewColumn model module.
 * @module com.gridly.api/model/ViewColumn
 * @version 4.21.5
 */
class ViewColumn {
    /**
     * Constructs a new <code>ViewColumn</code>.
     * @alias module:com.gridly.api/model/ViewColumn
     */
    constructor() { 
        
        ViewColumn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ViewColumn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/ViewColumn} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/ViewColumn} The populated <code>ViewColumn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViewColumn();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('dateTimeFormat')) {
                obj['dateTimeFormat'] = DateTimeFormat.constructFromObject(data['dateTimeFormat']);
            }
            if (data.hasOwnProperty('dependsOn')) {
                obj['dependsOn'] = ApiClient.convertToType(data['dependsOn'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('editable')) {
                obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
            }
            if (data.hasOwnProperty('formula')) {
                obj['formula'] = Formula.constructFromObject(data['formula']);
            }
            if (data.hasOwnProperty('isSource')) {
                obj['isSource'] = ApiClient.convertToType(data['isSource'], 'Boolean');
            }
            if (data.hasOwnProperty('isTarget')) {
                obj['isTarget'] = ApiClient.convertToType(data['isTarget'], 'Boolean');
            }
            if (data.hasOwnProperty('languageCode')) {
                obj['languageCode'] = ApiClient.convertToType(data['languageCode'], 'String');
            }
            if (data.hasOwnProperty('localizationType')) {
                obj['localizationType'] = ApiClient.convertToType(data['localizationType'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('numberFormat')) {
                obj['numberFormat'] = NumberFormat.constructFromObject(data['numberFormat']);
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ColumnReference.constructFromObject(data['reference']);
            }
            if (data.hasOwnProperty('selectionOptions')) {
                obj['selectionOptions'] = ApiClient.convertToType(data['selectionOptions'], ['String']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ViewColumn.prototype['id'] = undefined;

/**
 * @member {module:com.gridly.api/model/DateTimeFormat} dateTimeFormat
 */
ViewColumn.prototype['dateTimeFormat'] = undefined;

/**
 * @member {String} dependsOn
 */
ViewColumn.prototype['dependsOn'] = undefined;

/**
 * @member {String} description
 */
ViewColumn.prototype['description'] = undefined;

/**
 * @member {Boolean} editable
 */
ViewColumn.prototype['editable'] = undefined;

/**
 * @member {module:com.gridly.api/model/Formula} formula
 */
ViewColumn.prototype['formula'] = undefined;

/**
 * @member {Boolean} isSource
 */
ViewColumn.prototype['isSource'] = undefined;

/**
 * @member {Boolean} isTarget
 */
ViewColumn.prototype['isTarget'] = undefined;

/**
 * @member {String} languageCode
 */
ViewColumn.prototype['languageCode'] = undefined;

/**
 * @member {module:com.gridly.api/model/ViewColumn.LocalizationTypeEnum} localizationType
 */
ViewColumn.prototype['localizationType'] = undefined;

/**
 * @member {String} name
 */
ViewColumn.prototype['name'] = undefined;

/**
 * @member {module:com.gridly.api/model/NumberFormat} numberFormat
 */
ViewColumn.prototype['numberFormat'] = undefined;

/**
 * @member {module:com.gridly.api/model/ColumnReference} reference
 */
ViewColumn.prototype['reference'] = undefined;

/**
 * @member {Array.<String>} selectionOptions
 */
ViewColumn.prototype['selectionOptions'] = undefined;

/**
 * @member {module:com.gridly.api/model/ViewColumn.TypeEnum} type
 */
ViewColumn.prototype['type'] = undefined;





/**
 * Allowed values for the <code>localizationType</code> property.
 * @enum {String}
 * @readonly
 */
ViewColumn['LocalizationTypeEnum'] = {

    /**
     * value: "sourceLanguage"
     * @const
     */
    "sourceLanguage": "sourceLanguage",

    /**
     * value: "targetLanguage"
     * @const
     */
    "targetLanguage": "targetLanguage"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ViewColumn['TypeEnum'] = {

    /**
     * value: "singleLine"
     * @const
     */
    "singleLine": "singleLine",

    /**
     * value: "multipleLines"
     * @const
     */
    "multipleLines": "multipleLines",

    /**
     * value: "richText"
     * @const
     */
    "richText": "richText",

    /**
     * value: "markdown"
     * @const
     */
    "markdown": "markdown",

    /**
     * value: "singleSelection"
     * @const
     */
    "singleSelection": "singleSelection",

    /**
     * value: "multipleSelections"
     * @const
     */
    "multipleSelections": "multipleSelections",

    /**
     * value: "boolean"
     * @const
     */
    "boolean": "boolean",

    /**
     * value: "number"
     * @const
     */
    "number": "number",

    /**
     * value: "datetime"
     * @const
     */
    "datetime": "datetime",

    /**
     * value: "files"
     * @const
     */
    "files": "files",

    /**
     * value: "reference"
     * @const
     */
    "reference": "reference",

    /**
     * value: "lookup"
     * @const
     */
    "lookup": "lookup",

    /**
     * value: "language"
     * @const
     */
    "language": "language",

    /**
     * value: "json"
     * @const
     */
    "json": "json",

    /**
     * value: "yaml"
     * @const
     */
    "yaml": "yaml",

    /**
     * value: "html"
     * @const
     */
    "html": "html",

    /**
     * value: "formula"
     * @const
     */
    "formula": "formula"
};



export default ViewColumn;

