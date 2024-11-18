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


import ApiClient from "../ApiClient";
import CreateDependency from '../model/CreateDependency';
import DeleteDependency from '../model/DeleteDependency';
import Dependency from '../model/Dependency';
import UpdateDependency from '../model/UpdateDependency';

/**
* ViewDependency service.
* @module com.gridly.api/service/ViewDependencyApi
* @version 5.9.0
*/
export default class ViewDependencyApi {

    /**
    * Constructs a new ViewDependencyApi. 
    * @alias module:com.gridly.api/service/ViewDependencyApi
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
     * @param {module:com.gridly.api/model/DeleteDependency} deleteDependency 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    callDeleteWithHttpInfo(viewId, deleteDependency) {
      let postBody = deleteDependency;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling callDelete");
      }
      // verify the required parameter 'deleteDependency' is set
      if (deleteDependency === undefined || deleteDependency === null) {
        throw new Error("Missing the required parameter 'deleteDependency' when calling callDelete");
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
        '/v1/views/{viewId}/dependencies', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete
     * delete
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/DeleteDependency} deleteDependency 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    callDelete(viewId, deleteDependency) {
      return this.callDeleteWithHttpInfo(viewId, deleteDependency)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * create
     * create
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/CreateDependency} createDependency 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/Dependency} and HTTP response
     */
    createWithHttpInfo(viewId, createDependency) {
      let postBody = createDependency;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling create");
      }
      // verify the required parameter 'createDependency' is set
      if (createDependency === undefined || createDependency === null) {
        throw new Error("Missing the required parameter 'createDependency' when calling create");
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
      let returnType = Dependency;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/dependencies', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create
     * create
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/CreateDependency} createDependency 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/Dependency}
     */
    create(viewId, createDependency) {
      return this.createWithHttpInfo(viewId, createDependency)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * deleteById
     * deleteById
     * @param {String} viewId viewId
     * @param {String} dependencyId dependencyId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteByIdWithHttpInfo(viewId, dependencyId) {
      let postBody = null;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling deleteById");
      }
      // verify the required parameter 'dependencyId' is set
      if (dependencyId === undefined || dependencyId === null) {
        throw new Error("Missing the required parameter 'dependencyId' when calling deleteById");
      }

      let pathParams = {
        'viewId': viewId,
        'dependencyId': dependencyId
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
        '/v1/views/{viewId}/dependencies/{dependencyId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * deleteById
     * deleteById
     * @param {String} viewId viewId
     * @param {String} dependencyId dependencyId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteById(viewId, dependencyId) {
      return this.deleteByIdWithHttpInfo(viewId, dependencyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get
     * get
     * @param {String} dependencyId dependencyId
     * @param {String} viewId viewId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/Dependency} and HTTP response
     */
    getWithHttpInfo(dependencyId, viewId) {
      let postBody = null;
      // verify the required parameter 'dependencyId' is set
      if (dependencyId === undefined || dependencyId === null) {
        throw new Error("Missing the required parameter 'dependencyId' when calling get");
      }
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling get");
      }

      let pathParams = {
        'dependencyId': dependencyId,
        'viewId': viewId
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
      let returnType = Dependency;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/dependencies/{dependencyId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get
     * get
     * @param {String} dependencyId dependencyId
     * @param {String} viewId viewId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/Dependency}
     */
    get(dependencyId, viewId) {
      return this.getWithHttpInfo(dependencyId, viewId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list
     * list
     * @param {String} viewId viewId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:com.gridly.api/model/Dependency>} and HTTP response
     */
    listWithHttpInfo(viewId) {
      let postBody = null;
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling list");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Dependency];
      return this.apiClient.callApi(
        '/v1/views/{viewId}/dependencies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list
     * list
     * @param {String} viewId viewId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:com.gridly.api/model/Dependency>}
     */
    list(viewId) {
      return this.listWithHttpInfo(viewId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update
     * update
     * @param {String} dependencyId dependencyId
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/UpdateDependency} updateDependency 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/Dependency} and HTTP response
     */
    updateWithHttpInfo(dependencyId, viewId, updateDependency) {
      let postBody = updateDependency;
      // verify the required parameter 'dependencyId' is set
      if (dependencyId === undefined || dependencyId === null) {
        throw new Error("Missing the required parameter 'dependencyId' when calling update");
      }
      // verify the required parameter 'viewId' is set
      if (viewId === undefined || viewId === null) {
        throw new Error("Missing the required parameter 'viewId' when calling update");
      }
      // verify the required parameter 'updateDependency' is set
      if (updateDependency === undefined || updateDependency === null) {
        throw new Error("Missing the required parameter 'updateDependency' when calling update");
      }

      let pathParams = {
        'dependencyId': dependencyId,
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
      let returnType = Dependency;
      return this.apiClient.callApi(
        '/v1/views/{viewId}/dependencies/{dependencyId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update
     * update
     * @param {String} dependencyId dependencyId
     * @param {String} viewId viewId
     * @param {module:com.gridly.api/model/UpdateDependency} updateDependency 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/Dependency}
     */
    update(dependencyId, viewId, updateDependency) {
      return this.updateWithHttpInfo(dependencyId, viewId, updateDependency)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
