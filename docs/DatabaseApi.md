# GridlyClient.DatabaseApi

All URIs are relative to *https://api.gridly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](DatabaseApi.md#callDelete) | **DELETE** /v1/databases/{dbId} | delete
[**create**](DatabaseApi.md#create) | **POST** /v1/databases | create
[**duplicate**](DatabaseApi.md#duplicate) | **POST** /v1/databases/{dbId}/duplicate | duplicate
[**get**](DatabaseApi.md#get) | **GET** /v1/databases/{dbId} | get
[**list**](DatabaseApi.md#list) | **GET** /v1/databases | list
[**update**](DatabaseApi.md#update) | **PUT** /v1/databases/{dbId} | update



## callDelete

> callDelete(dbId)

delete

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.DatabaseApi();
let dbId = "dbId_example"; // String | dbId
apiInstance.callDelete(dbId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dbId** | **String**| dbId | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## create

> Database create(projectId, body)

create

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.DatabaseApi();
let projectId = 789; // Number | projectId
let body = new GridlyClient.CreateDatabase(); // CreateDatabase | body
apiInstance.create(projectId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **Number**| projectId | 
 **body** | [**CreateDatabase**](CreateDatabase.md)| body | 

### Return type

[**Database**](Database.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## duplicate

> Database duplicate(dbId, projectId, body)

duplicate

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.DatabaseApi();
let dbId = "dbId_example"; // String | dbId
let projectId = 789; // Number | projectId
let body = new GridlyClient.CreateDatabase(); // CreateDatabase | body
apiInstance.duplicate(dbId, projectId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dbId** | **String**| dbId | 
 **projectId** | **Number**| projectId | 
 **body** | [**CreateDatabase**](CreateDatabase.md)| body | 

### Return type

[**Database**](Database.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## get

> Database get(dbId)

get

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.DatabaseApi();
let dbId = "dbId_example"; // String | dbId
apiInstance.get(dbId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dbId** | **String**| dbId | 

### Return type

[**Database**](Database.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list

> [Database] list(opts)

list

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.DatabaseApi();
let opts = {
  'expand': ["null"], // [String] | expand
  'page': "''", // String | page
  'projectId': 789, // Number | projectId
  'search': "search_example", // String | search
  'sort': "''" // String | sort
};
apiInstance.list(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expand** | [**[String]**](String.md)| expand | [optional] 
 **page** | **String**| page | [optional] [default to &#39;&#39;]
 **projectId** | **Number**| projectId | [optional] 
 **search** | **String**| search | [optional] 
 **sort** | **String**| sort | [optional] [default to &#39;&#39;]

### Return type

[**[Database]**](Database.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update

> Database update(dbId, body)

update

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.DatabaseApi();
let dbId = "dbId_example"; // String | dbId
let body = new GridlyClient.UpdateDatabase(); // UpdateDatabase | body
apiInstance.update(dbId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dbId** | **String**| dbId | 
 **body** | [**UpdateDatabase**](UpdateDatabase.md)| body | 

### Return type

[**Database**](Database.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

