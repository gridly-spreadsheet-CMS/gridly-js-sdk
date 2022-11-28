# GridlyClient.ProjectApi

All URIs are relative to *https://api.gridly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](ProjectApi.md#callDelete) | **DELETE** /v1/projects/{projectId} | delete
[**create**](ProjectApi.md#create) | **POST** /v1/projects | create
[**findOne**](ProjectApi.md#findOne) | **GET** /v1/projects/{projectId} | findOne
[**list**](ProjectApi.md#list) | **GET** /v1/projects | list
[**update**](ProjectApi.md#update) | **PUT** /v1/projects/{projectId} | update



## callDelete

> callDelete(projectId)

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

let apiInstance = new GridlyClient.ProjectApi();
let projectId = 789; // Number | projectId
apiInstance.callDelete(projectId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **Number**| projectId | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## create

> Project create(createProject)

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

let apiInstance = new GridlyClient.ProjectApi();
let createProject = new GridlyClient.CreateProject(); // CreateProject | 
apiInstance.create(createProject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProject** | [**CreateProject**](CreateProject.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## findOne

> ProjectDetail findOne(projectId)

findOne

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ProjectApi();
let projectId = 789; // Number | projectId
apiInstance.findOne(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **Number**| projectId | 

### Return type

[**ProjectDetail**](ProjectDetail.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list

> [Project] list()

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

let apiInstance = new GridlyClient.ProjectApi();
apiInstance.list().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Project]**](Project.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update

> Project update(projectId, updateProject)

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

let apiInstance = new GridlyClient.ProjectApi();
let projectId = 789; // Number | projectId
let updateProject = new GridlyClient.UpdateProject(); // UpdateProject | 
apiInstance.update(projectId, updateProject).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **Number**| projectId | 
 **updateProject** | [**UpdateProject**](UpdateProject.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

