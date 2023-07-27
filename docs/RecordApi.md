# GridlyClient.RecordApi

All URIs are relative to *https://api.gridly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](RecordApi.md#callDelete) | **DELETE** /v1/views/{viewId}/records | delete
[**create**](RecordApi.md#create) | **POST** /v1/views/{viewId}/records | create
[**fetch**](RecordApi.md#fetch) | **GET** /v1/views/{viewId}/records | fetch
[**fetchHistories**](RecordApi.md#fetchHistories) | **GET** /v1/views/{viewId}/records/{recordId}/histories | fetchHistories
[**update**](RecordApi.md#update) | **PATCH** /v1/views/{viewId}/records | update
[**updateRecord**](RecordApi.md#updateRecord) | **PATCH** /v1/views/{viewId}/records/{id} | updateRecord



## callDelete

> callDelete(viewId, deleteRecord)

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

let apiInstance = new GridlyClient.RecordApi();
let viewId = "viewId_example"; // String | viewId
let deleteRecord = new GridlyClient.DeleteRecord(); // DeleteRecord | 
apiInstance.callDelete(viewId, deleteRecord).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **deleteRecord** | [**DeleteRecord**](DeleteRecord.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## create

> [Record] create(viewId, createRecords)

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

let apiInstance = new GridlyClient.RecordApi();
let viewId = "viewId_example"; // String | viewId
let createRecords = [new GridlyClient.SetRecord()]; // [SetRecord] | createRecords
apiInstance.create(viewId, createRecords).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **createRecords** | [**[SetRecord]**](SetRecord.md)| createRecords | 

### Return type

[**[Record]**](Record.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fetch

> [Record] fetch(viewId, opts)

fetch

fetch

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.RecordApi();
let viewId = "viewId_example"; // String | viewId
let opts = {
  'columnIds': ["null"], // [String] | columnIds
  'page': "'{}'", // String | page
  'query': "'{}'", // String | query
  'sort': "'{}'", // String | sort
  'fetchFileOption': new GridlyClient.FetchFileOption(), // FetchFileOption | fetchFileOption
  'afterRecordId': "afterRecordId_example", // String | afterRecordId
  'beforeRecordId': "beforeRecordId_example" // String | beforeRecordId
};
apiInstance.fetch(viewId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **columnIds** | [**[String]**](String.md)| columnIds | [optional] 
 **page** | **String**| page | [optional] [default to &#39;{}&#39;]
 **query** | **String**| query | [optional] [default to &#39;{}&#39;]
 **sort** | **String**| sort | [optional] [default to &#39;{}&#39;]
 **fetchFileOption** | [**FetchFileOption**](.md)| fetchFileOption | [optional] 
 **afterRecordId** | **String**| afterRecordId | [optional] 
 **beforeRecordId** | **String**| beforeRecordId | [optional] 

### Return type

[**[Record]**](Record.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchHistories

> [RecordHistory] fetchHistories(viewId, recordId, opts)

fetchHistories

fetchHistories

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.RecordApi();
let viewId = "viewId_example"; // String | viewId
let recordId = "recordId_example"; // String | recordId
let opts = {
  'page': "'{}'" // String | page
};
apiInstance.fetchHistories(viewId, recordId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **recordId** | **String**| recordId | 
 **page** | **String**| page | [optional] [default to &#39;{}&#39;]

### Return type

[**[RecordHistory]**](RecordHistory.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## update

> [Record] update(viewId, setRecord)

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

let apiInstance = new GridlyClient.RecordApi();
let viewId = "viewId_example"; // String | viewId
let setRecord = [new GridlyClient.SetRecord()]; // [SetRecord] | 
apiInstance.update(viewId, setRecord).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewId** | **String**| viewId | 
 **setRecord** | [**[SetRecord]**](SetRecord.md)|  | 

### Return type

[**[Record]**](Record.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRecord

> Record updateRecord(id, viewId, setRecord, opts)

updateRecord

updateRecord

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.RecordApi();
let id = "id_example"; // String | id
let viewId = "viewId_example"; // String | viewId
let setRecord = new GridlyClient.SetRecord(); // SetRecord | 
let opts = {
  'path': "path_example" // String | path
};
apiInstance.updateRecord(id, viewId, setRecord, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **viewId** | **String**| viewId | 
 **setRecord** | [**SetRecord**](SetRecord.md)|  | 
 **path** | **String**| path | [optional] 

### Return type

[**Record**](Record.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

