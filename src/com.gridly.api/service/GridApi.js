/**
 * Gridly API
 * Gridly API documentation
 *
 * The version of the OpenAPI document: 4.15.1
 * Contact: support@gridly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateGrid from '../model/CreateGrid';
import Grid from '../model/Grid';
import UpdateGrid from '../model/UpdateGrid';

/**
* Grid service.
* @module com.gridly.api/service/GridApi
* @version 4.15.1
*/
export default class GridApi {

    /**
    * Constructs a new GridApi. 
    * @alias module:com.gridly.api/service/GridApi
    * @class
    * @param {module:com.gridly.api/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.gridly.api/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * delete
     * Delete a Grid
     * @param {String} gridId gridId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    callDeleteWithHttpInfo(gridId) {
      let postBody = null;
      // verify the required parameter 'gridId' is set
      if (gridId === undefined || gridId === null) {
        throw new Error("Missing the required parameter 'gridId' when calling callDelete");
      }

      let pathParams = {
        'gridId': gridId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/grids/{gridId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete
     * Delete a Grid
     * @param {String} gridId gridId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    callDelete(gridId) {
      return this.callDeleteWithHttpInfo(gridId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * create
     * Create a Grid
     * @param {String} dbId dbId
     * @param {module:com.gridly.api/model/CreateGrid} createGrid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/Grid} and HTTP response
     */
    createWithHttpInfo(dbId, createGrid) {
      let postBody = createGrid;
      // verify the required parameter 'dbId' is set
      if (dbId === undefined || dbId === null) {
        throw new Error("Missing the required parameter 'dbId' when calling create");
      }
      // verify the required parameter 'createGrid' is set
      if (createGrid === undefined || createGrid === null) {
        throw new Error("Missing the required parameter 'createGrid' when calling create");
      }

      let pathParams = {
      };
      let queryParams = {
        'dbId': dbId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Grid;
      return this.apiClient.callApi(
        '/v1/grids', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create
     * Create a Grid
     * @param {String} dbId dbId
     * @param {module:com.gridly.api/model/CreateGrid} createGrid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/Grid}
     */
    create(dbId, createGrid) {
      return this.createWithHttpInfo(dbId, createGrid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get
     * Get a Grid
     * @param {String} gridId gridId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/Grid} and HTTP response
     */
    getWithHttpInfo(gridId) {
      let postBody = null;
      // verify the required parameter 'gridId' is set
      if (gridId === undefined || gridId === null) {
        throw new Error("Missing the required parameter 'gridId' when calling get");
      }

      let pathParams = {
        'gridId': gridId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Grid;
      return this.apiClient.callApi(
        '/v1/grids/{gridId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get
     * Get a Grid
     * @param {String} gridId gridId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/Grid}
     */
    get(gridId) {
      return this.getWithHttpInfo(gridId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list
     * Get a Grid
     * @param {String} dbId dbId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:com.gridly.api/model/Grid>} and HTTP response
     */
    listWithHttpInfo(dbId) {
      let postBody = null;
      // verify the required parameter 'dbId' is set
      if (dbId === undefined || dbId === null) {
        throw new Error("Missing the required parameter 'dbId' when calling list");
      }

      let pathParams = {
      };
      let queryParams = {
        'dbId': dbId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Grid];
      return this.apiClient.callApi(
        '/v1/grids', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list
     * Get a Grid
     * @param {String} dbId dbId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:com.gridly.api/model/Grid>}
     */
    list(dbId) {
      return this.listWithHttpInfo(dbId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * listTemplateGrids
     * listTemplateGrids
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:com.gridly.api/model/Grid>} and HTTP response
     */
    listTemplateGridsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Grid];
      return this.apiClient.callApi(
        '/v1/template-grids', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * listTemplateGrids
     * listTemplateGrids
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:com.gridly.api/model/Grid>}
     */
    listTemplateGrids() {
      return this.listTemplateGridsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update
     * Update a Grid
     * @param {String} gridId gridId
     * @param {module:com.gridly.api/model/UpdateGrid} updateGrid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/Grid} and HTTP response
     */
    updateWithHttpInfo(gridId, updateGrid) {
      let postBody = updateGrid;
      // verify the required parameter 'gridId' is set
      if (gridId === undefined || gridId === null) {
        throw new Error("Missing the required parameter 'gridId' when calling update");
      }
      // verify the required parameter 'updateGrid' is set
      if (updateGrid === undefined || updateGrid === null) {
        throw new Error("Missing the required parameter 'updateGrid' when calling update");
      }

      let pathParams = {
        'gridId': gridId
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
      let returnType = Grid;
      return this.apiClient.callApi(
        '/v1/grids/{gridId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update
     * Update a Grid
     * @param {String} gridId gridId
     * @param {module:com.gridly.api/model/UpdateGrid} updateGrid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/Grid}
     */
    update(gridId, updateGrid) {
      return this.updateWithHttpInfo(gridId, updateGrid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
