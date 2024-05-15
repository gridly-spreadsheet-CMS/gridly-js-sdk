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
 * The CellHistory model module.
 * @module com.gridly.api/model/CellHistory
 * @version 4.33.0
 */
class CellHistory {
    /**
     * Constructs a new <code>CellHistory</code>.
     * @alias module:com.gridly.api/model/CellHistory
     */
    constructor() { 
        
        CellHistory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CellHistory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/CellHistory} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/CellHistory} The populated <code>CellHistory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CellHistory();

            if (data.hasOwnProperty('dependencyStatus')) {
                obj['dependencyStatus'] = ApiClient.convertToType(data['dependencyStatus'], 'String');
            }
            if (data.hasOwnProperty('sourceStatus')) {
                obj['sourceStatus'] = ApiClient.convertToType(data['sourceStatus'], 'String');
            }
            if (data.hasOwnProperty('columnId')) {
                obj['columnId'] = ApiClient.convertToType(data['columnId'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CellHistory</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CellHistory</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dependencyStatus'] && !(typeof data['dependencyStatus'] === 'string' || data['dependencyStatus'] instanceof String)) {
            throw new Error("Expected the field `dependencyStatus` to be a primitive type in the JSON string but got " + data['dependencyStatus']);
        }
        // ensure the json data is a string
        if (data['sourceStatus'] && !(typeof data['sourceStatus'] === 'string' || data['sourceStatus'] instanceof String)) {
            throw new Error("Expected the field `sourceStatus` to be a primitive type in the JSON string but got " + data['sourceStatus']);
        }
        // ensure the json data is a string
        if (data['columnId'] && !(typeof data['columnId'] === 'string' || data['columnId'] instanceof String)) {
            throw new Error("Expected the field `columnId` to be a primitive type in the JSON string but got " + data['columnId']);
        }

        return true;
    }


}



/**
 * @member {module:com.gridly.api/model/CellHistory.DependencyStatusEnum} dependencyStatus
 */
CellHistory.prototype['dependencyStatus'] = undefined;

/**
 * @member {module:com.gridly.api/model/CellHistory.SourceStatusEnum} sourceStatus
 */
CellHistory.prototype['sourceStatus'] = undefined;

/**
 * @member {String} columnId
 */
CellHistory.prototype['columnId'] = undefined;

/**
 * @member {Object} value
 */
CellHistory.prototype['value'] = undefined;





/**
 * Allowed values for the <code>dependencyStatus</code> property.
 * @enum {String}
 * @readonly
 */
CellHistory['DependencyStatusEnum'] = {

    /**
     * value: "upToDate"
     * @const
     */
    "upToDate": "upToDate",

    /**
     * value: "outOfDate"
     * @const
     */
    "outOfDate": "outOfDate",

    /**
     * value: "unset"
     * @const
     */
    "unset": "unset"
};


/**
 * Allowed values for the <code>sourceStatus</code> property.
 * @enum {String}
 * @readonly
 */
CellHistory['SourceStatusEnum'] = {

    /**
     * value: "unset"
     * @const
     */
    "unset": "unset",

    /**
     * value: "doNotTranslate"
     * @const
     */
    "doNotTranslate": "doNotTranslate",

    /**
     * value: "notReadyForTranslation"
     * @const
     */
    "notReadyForTranslation": "notReadyForTranslation",

    /**
     * value: "readyForTranslation"
     * @const
     */
    "readyForTranslation": "readyForTranslation",

    /**
     * value: "locked"
     * @const
     */
    "locked": "locked",

    /**
     * value: "lockAllLanguages"
     * @const
     */
    "lockAllLanguages": "lockAllLanguages"
};



export default CellHistory;

