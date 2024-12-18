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
import CreateGlossary from '../model/CreateGlossary';
import Glossary from '../model/Glossary';
import GlossaryExportFormat from '../model/GlossaryExportFormat';
import ImportOption from '../model/ImportOption';
import UpdateGlossary from '../model/UpdateGlossary';

/**
* Glossary service.
* @module com.gridly.api/service/GlossaryApi
* @version 5.9.0
*/
export default class GlossaryApi {

    /**
    * Constructs a new GlossaryApi. 
    * @alias module:com.gridly.api/service/GlossaryApi
    * @class
    * @param {module:com.gridly.api/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.gridly.api/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a glossary
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    callDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling callDelete");
      }

      let pathParams = {
        'id': id
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
        '/v1/glossaries/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a glossary
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    callDelete(id) {
      return this.callDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new glossary
     * @param {Object} opts Optional parameters
     * @param {module:com.gridly.api/model/CreateGlossary} opts.createGlossary 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/Glossary} and HTTP response
     */
    createWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createGlossary'];

      let pathParams = {
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
      let returnType = Glossary;
      return this.apiClient.callApi(
        '/v1/glossaries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new glossary
     * @param {Object} opts Optional parameters
     * @param {module:com.gridly.api/model/CreateGlossary} opts.createGlossary 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/Glossary}
     */
    create(opts) {
      return this.createWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Export a glossary
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields 
     * @param {module:com.gridly.api/model/GlossaryExportFormat} opts.format 
     * @param {Array.<String>} opts.langs 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    exportFileWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling exportFile");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi'),
        'format': opts['format'],
        'langs': this.apiClient.buildCollectionParam(opts['langs'], 'multi')
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
        '/v1/glossaries/{id}/export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Export a glossary
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields 
     * @param {module:com.gridly.api/model/GlossaryExportFormat} opts.format 
     * @param {Array.<String>} opts.langs 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    exportFile(id, opts) {
      return this.exportFileWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * get glossary info
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.gridly.api/model/Glossary} and HTTP response
     */
    getWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling get");
      }

      let pathParams = {
        'id': id
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
      let returnType = Glossary;
      return this.apiClient.callApi(
        '/v1/glossaries/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * get glossary info
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.gridly.api/model/Glossary}
     */
    get(id) {
      return this.getWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all glossaries
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:com.gridly.api/model/Glossary>} and HTTP response
     */
    getAllWithHttpInfo() {
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
      let returnType = [Glossary];
      return this.apiClient.callApi(
        '/v1/glossaries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all glossaries
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:com.gridly.api/model/Glossary>}
     */
    getAll() {
      return this.getAllWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Import a glossary from file
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:com.gridly.api/model/ImportOption} opts.importOption 
     * @param {Object.<String, Object>} opts.file 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    importFileWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling importFile");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'importOption': opts['importOption']
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/glossaries/{id}/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Import a glossary from file
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:com.gridly.api/model/ImportOption} opts.importOption 
     * @param {Object.<String, Object>} opts.file 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    importFile(id, opts) {
      return this.importFileWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update glossary info
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:com.gridly.api/model/UpdateGlossary} opts.updateGlossary 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['updateGlossary'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling update");
      }

      let pathParams = {
        'id': id
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
        '/v1/glossaries/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update glossary info
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:com.gridly.api/model/UpdateGlossary} opts.updateGlossary 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    update(id, opts) {
      return this.updateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
