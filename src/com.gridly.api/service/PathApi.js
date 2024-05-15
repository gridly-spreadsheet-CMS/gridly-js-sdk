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


import ApiClient from "../ApiClient";
import CreatePath from '../model/CreatePath';
import DeletePath from '../model/DeletePath';
import MovePath from '../model/MovePath';
import PathList from '../model/PathList';
import PathNode from '../model/PathNode';
import PathSingle from '../model/PathSingle';
import UpdatePath from '../model/UpdatePath';

/**
* Path service.
* @module com.gridly.api/service/PathApi
* @version 4.33.0
*/
export default class PathApi {

    /**
    * Constructs a new PathApi. 
    * @alias module:com.gridly.api/service/PathApi
    * @class
    * @param {module:com.gridly.api/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.gridly.api/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * delete
     * delete
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/DeletePath} deletePath 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    callDeleteWithHttpInfo(viewId, deletePath) {
      let postBody = deletePath;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling callDelete");
      }
      // verify the required parameter 'deletePath' is set
      if (deletePath === undefined || deletePath === null) {
        throw new Error("Missing the required parameter 'deletePath' when calling callDelete");
      }

      let pathParams = {
        'viewId': viewId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/paths', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete
     * delete
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/DeletePath} deletePath 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    callDelete(viewId, deletePath) {
      return this.callDeleteWithHttpInfo(viewId, deletePath)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * create
     * create
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/CreatePath} createPath 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/PathList} and HTTP response
     */
    createWithHttpInfo(viewId, createPath) {
      let postBody = createPath;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling create");
      }
      // verify the required parameter 'createPath' is set
      if (createPath === undefined || createPath === null) {
        throw new Error("Missing the required parameter 'createPath' when calling create");
      }

      let pathParams = {
        'viewId': viewId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PathList;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/paths', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create
     * create
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/CreatePath} createPath 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/PathList}
     */
    create(viewId, createPath) {
      return this.createWithHttpInfo(viewId, createPath)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list
     * list
     * @param {String} viewId viewId
     * @param {Object} opts Optional parameters
     * @param {String} opts.rootPath rootPath
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:com.gridly.api/model/PathNode>} and HTTP response
     */
    listWithHttpInfo(viewId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling list");
      }

      let pathParams = {
        'viewId': viewId
      };
      let queryParams = {
        'rootPath': opts['rootPath']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PathNode];
      return this.apiClient.callApi(
        '/v1/views/{viewId}/paths/tree', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list
     * list
     * @param {String} viewId viewId
     * @param {Object} opts Optional parameters
     * @param {String} opts.rootPath rootPath
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:com.gridly.api/model/PathNode>}
     */
    list(viewId, opts) {
      return this.listWithHttpInfo(viewId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * move
     * move
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/MovePath} movePath 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/PathList} and HTTP response
     */
    moveWithHttpInfo(viewId, movePath) {
      let postBody = movePath;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling move");
      }
      // verify the required parameter 'movePath' is set
      if (movePath === undefined || movePath === null) {
        throw new Error("Missing the required parameter 'movePath' when calling move");
      }

      let pathParams = {
        'viewId': viewId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PathList;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/paths/move', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * move
     * move
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/MovePath} movePath 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/PathList}
     */
    move(viewId, movePath) {
      return this.moveWithHttpInfo(viewId, movePath)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update
     * update
     * @param {String} viewId viewId
     * @param {String} path path
     * @param {module:com.gridly.api/model/UpdatePath} updatePath 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/PathSingle} and HTTP response
     */
    updateWithHttpInfo(viewId, path, updatePath) {
      let postBody = updatePath;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling update");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling update");
      }
      // verify the required parameter 'updatePath' is set
      if (updatePath === undefined || updatePath === null) {
        throw new Error("Missing the required parameter 'updatePath' when calling update");
      }

      let pathParams = {
        'viewId': viewId,
        'path': path
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PathSingle;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/paths/{path}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update
     * update
     * @param {String} viewId viewId
     * @param {String} path path
     * @param {module:com.gridly.api/model/UpdatePath} updatePath 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/PathSingle}
     */
    update(viewId, path, updatePath) {
      return this.updateWithHttpInfo(viewId, path, updatePath)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
