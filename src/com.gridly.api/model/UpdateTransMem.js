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
import TranslationStatus from './TranslationStatus';

/**
 * The UpdateTransMem model module.
 * @module com.gridly.api/model/UpdateTransMem
 * @version 4.21.5
 */
class UpdateTransMem {
    /**
     * Constructs a new <code>UpdateTransMem</code>.
     * @alias module:com.gridly.api/model/UpdateTransMem
     */
    constructor() { 
        
        UpdateTransMem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateTransMem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/UpdateTransMem} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/UpdateTransMem} The populated <code>UpdateTransMem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTransMem();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('projectIds')) {
                obj['projectIds'] = ApiClient.convertToType(data['projectIds'], ['Number']);
            }
            if (data.hasOwnProperty('fuzzyMatch')) {
                obj['fuzzyMatch'] = ApiClient.convertToType(data['fuzzyMatch'], 'Boolean');
            }
            if (data.hasOwnProperty('isDisabled')) {
                obj['isDisabled'] = ApiClient.convertToType(data['isDisabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isPausedConsuming')) {
                obj['isPausedConsuming'] = ApiClient.convertToType(data['isPausedConsuming'], 'Boolean');
            }
            if (data.hasOwnProperty('populateTranslationStatus')) {
                obj['populateTranslationStatus'] = TranslationStatus.constructFromObject(data['populateTranslationStatus']);
            }
            if (data.hasOwnProperty('contextLookup')) {
                obj['contextLookup'] = ApiClient.convertToType(data['contextLookup'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
UpdateTransMem.prototype['name'] = undefined;

/**
 * @member {String} description
 */
UpdateTransMem.prototype['description'] = undefined;

/**
 * @member {Array.<Number>} projectIds
 */
UpdateTransMem.prototype['projectIds'] = undefined;

/**
 * @member {Boolean} fuzzyMatch
 */
UpdateTransMem.prototype['fuzzyMatch'] = undefined;

/**
 * @member {Boolean} isDisabled
 */
UpdateTransMem.prototype['isDisabled'] = undefined;

/**
 * @member {Boolean} isPausedConsuming
 */
UpdateTransMem.prototype['isPausedConsuming'] = undefined;

/**
 * @member {module:com.gridly.api/model/TranslationStatus} populateTranslationStatus
 */
UpdateTransMem.prototype['populateTranslationStatus'] = undefined;

/**
 * @member {Boolean} contextLookup
 */
UpdateTransMem.prototype['contextLookup'] = undefined;






export default UpdateTransMem;

