# GridlyClient.ViewDependencyApi

All URIs are relative to *https://api.gridly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](ViewDependencyApi.md#callDelete) | **DELETE** /v1/views/{viewId}/dependencies | delete
[**create**](ViewDependencyApi.md#create) | **POST** /v1/views/{viewId}/dependencies | create
[**deleteById**](ViewDependencyApi.md#deleteById) | **DELETE** /v1/views/{viewId}/dependencies/{dependencyId} | deleteById
[**get**](ViewDependencyApi.md#get) | **GET** /v1/views/{viewId}/dependencies/{dependencyId} | get
[**list**](ViewDependencyApi.md#list) | **GET** /v1/views/{viewId}/dependencies | list
[**update**](ViewDependencyApi.md#update) | **PUT** /v1/views/{viewId}/dependencies/{dependencyId} | update



## callDelete

> callDelete(viewId, deleteDependency)

delete

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

let apiInstance = new GridlyClient.ViewDependencyApi();
let viewId = "viewId_example"; // String | viewId
let deleteDependency = new GridlyClient.DeleteDependency(); // DeleteDependency | 
apiInstance.callDelete(viewId, deleteDependency).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **deleteDependency** | [**DeleteDependency**](DeleteDependency.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## create

> Dependency create(viewId, createDependency)

create

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

let apiInstance = new GridlyClient.ViewDependencyApi();
let viewId = "viewId_example"; // String | viewId
let createDependency = new GridlyClient.CreateDependency(); // CreateDependency | 
apiInstance.create(viewId, createDependency).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **createDependency** | [**CreateDependency**](CreateDependency.md)|  | 

### Return type

[**Dependency**](Dependency.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteById

> deleteById(viewId, dependencyId)

deleteById

deleteById

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.ViewDependencyApi();
let viewId = "viewId_example"; // String | viewId
let dependencyId = "dependencyId_example"; // String | dependencyId
apiInstance.deleteById(viewId, dependencyId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **dependencyId** | **String**| dependencyId | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## get

> Dependency get(dependencyId, viewId)

get

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

let apiInstance = new GridlyClient.ViewDependencyApi();
let dependencyId = "dependencyId_example"; // String | dependencyId
let viewId = "viewId_example"; // String | viewId
apiInstance.get(dependencyId, viewId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dependencyId** | **String**| dependencyId | 
 **viewId** | **String**| viewId | 

### Return type

[**Dependency**](Dependency.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list

> [Dependency] list(viewId)

list

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

let apiInstance = new GridlyClient.ViewDependencyApi();
let viewId = "viewId_example"; // String | viewId
apiInstance.list(viewId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 

### Return type

[**[Dependency]**](Dependency.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update

> Dependency update(dependencyId, viewId, updateDependency)

update

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

let apiInstance = new GridlyClient.ViewDependencyApi();
let dependencyId = "dependencyId_example"; // String | dependencyId
let viewId = "viewId_example"; // String | viewId
let updateDependency = new GridlyClient.UpdateDependency(); // UpdateDependency | 
apiInstance.update(dependencyId, viewId, updateDependency).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dependencyId** | **String**| dependencyId | 
 **viewId** | **String**| viewId | 
 **updateDependency** | [**UpdateDependency**](UpdateDependency.md)|  | 

### Return type

[**Dependency**](Dependency.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

