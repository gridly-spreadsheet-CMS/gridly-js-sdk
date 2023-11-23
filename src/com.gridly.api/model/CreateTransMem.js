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
 * The CreateTransMem model module.
 * @module com.gridly.api/model/CreateTransMem
 * @version 4.21.5
 */
class CreateTransMem {
    /**
     * Constructs a new <code>CreateTransMem</code>.
     * @alias module:com.gridly.api/model/CreateTransMem
     * @param name {String} 
     */
    constructor(name) { 
        
        CreateTransMem.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateTransMem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/CreateTransMem} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/CreateTransMem} The populated <code>CreateTransMem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTransMem();

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
            if (data.hasOwnProperty('contextLookup')) {
                obj['contextLookup'] = ApiClient.convertToType(data['contextLookup'], 'Boolean');
            }
            if (data.hasOwnProperty('populateTranslationStatus')) {
                obj['populateTranslationStatus'] = TranslationStatus.constructFromObject(data['populateTranslationStatus']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CreateTransMem.prototype['name'] = undefined;

/**
 * @member {String} description
 */
CreateTransMem.prototype['description'] = undefined;

/**
 * @member {Array.<Number>} projectIds
 */
CreateTransMem.prototype['projectIds'] = undefined;

/**
 * @member {Boolean} fuzzyMatch
 */
CreateTransMem.prototype['fuzzyMatch'] = undefined;

/**
 * @member {Boolean} isDisabled
 */
CreateTransMem.prototype['isDisabled'] = undefined;

/**
 * @member {Boolean} isPausedConsuming
 */
CreateTransMem.prototype['isPausedConsuming'] = undefined;

/**
 * @member {Boolean} contextLookup
 */
CreateTransMem.prototype['contextLookup'] = undefined;

/**
 * @member {module:com.gridly.api/model/TranslationStatus} populateTranslationStatus
 */
CreateTransMem.prototype['populateTranslationStatus'] = undefined;






export default CreateTransMem;

