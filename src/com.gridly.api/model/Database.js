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
import Grid from './Grid';
import Group from './Group';
import Project from './Project';
import View from './View';

/**
 * The Database model module.
 * @module com.gridly.api/model/Database
 * @version 4.29.1
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

