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
import Grid from './Grid';
import Group from './Group';
import Project from './Project';
import View from './View';

/**
 * The Database model module.
 * @module com.gridly.api/model/Database
 * @version 5.9.0
 */
class Database {
    /**
     * Constructs a new <code>Database</code>.
     * @alias module:com.gridly.api/model/Database
     */
    constructor() { 
        
        Database.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Database</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.gridly.api/model/Database} obj Optional instance to populate.
     * @return {module:com.gridly.api/model/Database} The populated <code>Database</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Database();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'Number');
            }
            if (data.hasOwnProperty('grids')) {
                obj['grids'] = ApiClient.convertToType(data['grids'], [Grid]);
            }
            if (data.hasOwnProperty('views')) {
                obj['views'] = ApiClient.convertToType(data['views'], [View]);
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = Project.constructFromObject(data['project']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [Group]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Database</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Database</code>.
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
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        if (data['grids']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['grids'])) {
                throw new Error("Expected the field `grids` to be an array in the JSON data but got " + data['grids']);
            }
            // validate the optional field `grids` (array)
            for (const item of data['grids']) {
                Grid.validateJsonObject(item);
            };
        }
        if (data['views']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['views'])) {
                throw new Error("Expected the field `views` to be an array in the JSON data but got " + data['views']);
            }
            // validate the optional field `views` (array)
            for (const item of data['views']) {
                View.validateJsonObject(item);
            };
        }
        // validate the optional field `project`
        if (data['project']) { // data not null
          Project.validateJSON(data['project']);
        }
        if (data['groups']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['groups'])) {
                throw new Error("Expected the field `groups` to be an array in the JSON data but got " + data['groups']);
            }
            // validate the optional field `groups` (array)
            for (const item of data['groups']) {
                Group.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
Database.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Database.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Database.prototype['description'] = undefined;

/**
 * @member {Number} projectId
 */
Database.prototype['projectId'] = undefined;

/**
 * @member {Array.<module:com.gridly.api/model/Grid>} grids
 */
Database.prototype['grids'] = undefined;

/**
 * @member {Array.<module:com.gridly.api/model/View>} views
 */
Database.prototype['views'] = undefined;

/**
 * @member {module:com.gridly.api/model/Project} project
 */
Database.prototype['project'] = undefined;

/**
 * @member {Array.<module:com.gridly.api/model/Group>} groups
 */
Database.prototype['groups'] = undefined;






export default Database;

