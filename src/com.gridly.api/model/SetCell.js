/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 4.29.1
 * Contact: support@gridly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SetCell model module.
 * @module com.gridly.api/model/SetCell
 * @version 4.29.1
 */
class SetCell {
    /**
     * Constructs a new <code>SetCell</code>.
     * @alias module:com.gridly.api/model/SetCell
     */
    constructor() { 
        
        SetCell.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetCell</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/SetCell} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/SetCell} The populated <code>SetCell</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetCell();

            if (data.hasOwnProperty('columnId')) {
                obj['columnId'] = ApiClient.convertToType(data['columnId'], 'String');
            }
            if (data.hasOwnProperty('dependencyStatus')) {
                obj['dependencyStatus'] = ApiClient.convertToType(data['dependencyStatus'], 'String');
            }
            if (data.hasOwnProperty('lengthLimit')) {
                obj['lengthLimit'] = ApiClient.convertToType(data['lengthLimit'], 'Number');
            }
            if (data.hasOwnProperty('referencedIds')) {
                obj['referencedIds'] = ApiClient.convertToType(data['referencedIds'], ['String']);
            }
            if (data.hasOwnProperty('sourceStatus')) {
                obj['sourceStatus'] = ApiClient.convertToType(data['sourceStatus'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} columnId
 */
SetCell.prototype['columnId'] = undefined;

/**
 * @member {module:com.gridly.api/model/SetCell.DependencyStatusEnum} dependencyStatus
 */
SetCell.prototype['dependencyStatus'] = undefined;

/**
 * @member {Number} lengthLimit
 */
SetCell.prototype['lengthLimit'] = undefined;

/**
 * @member {Array.<String>} referencedIds
 */
SetCell.prototype['referencedIds'] = undefined;

/**
 * @member {module:com.gridly.api/model/SetCell.SourceStatusEnum} sourceStatus
 */
SetCell.prototype['sourceStatus'] = undefined;

/**
 * @member {Object} value
 */
SetCell.prototype['value'] = undefined;





/**
 * Allowed values for the <code>dependencyStatus</code> property.
 * @enum {String}
 * @readonly
 */
SetCell['DependencyStatusEnum'] = {

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
SetCell['SourceStatusEnum'] = {

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



export default SetCell;

