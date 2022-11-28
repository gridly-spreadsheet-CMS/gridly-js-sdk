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
 * The Cell model module.
 * @module com.gridly.api/model/Cell
 * @version 3.39.2
 */
class Cell {
    /**
     * Constructs a new <code>Cell</code>.
     * @alias module:com.gridly.api/model/Cell
     */
    constructor() { 
        
        Cell.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Cell</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/Cell} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/Cell} The populated <code>Cell</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Cell();

            if (data.hasOwnProperty('columnId')) {
                obj['columnId'] = ApiClient.convertToType(data['columnId'], 'String');
            }
            if (data.hasOwnProperty('dependencyStatus')) {
                obj['dependencyStatus'] = ApiClient.convertToType(data['dependencyStatus'], 'String');
            }
            if (data.hasOwnProperty('referencedIds')) {
                obj['referencedIds'] = ApiClient.convertToType(data['referencedIds'], ['String']);
            }
            if (data.hasOwnProperty('sourceStatus')) {
                obj['sourceStatus'] = ApiClient.convertToType(data['sourceStatus'], 'String');
            }
            if (data.hasOwnProperty('tm')) {
                obj['tm'] = ApiClient.convertToType(data['tm'], 'Boolean');
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
Cell.prototype['columnId'] = undefined;

/**
 * @member {module:com.gridly.api/model/Cell.DependencyStatusEnum} dependencyStatus
 */
Cell.prototype['dependencyStatus'] = undefined;

/**
 * @member {Array.<String>} referencedIds
 */
Cell.prototype['referencedIds'] = undefined;

/**
 * @member {module:com.gridly.api/model/Cell.SourceStatusEnum} sourceStatus
 */
Cell.prototype['sourceStatus'] = undefined;

/**
 * @member {Boolean} tm
 */
Cell.prototype['tm'] = undefined;

/**
 * @member {Object} value
 */
Cell.prototype['value'] = undefined;





/**
 * Allowed values for the <code>dependencyStatus</code> property.
 * @enum {String}
 * @readonly
 */
Cell['DependencyStatusEnum'] = {

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
Cell['SourceStatusEnum'] = {

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
    "locked": "locked"
};



export default Cell;
