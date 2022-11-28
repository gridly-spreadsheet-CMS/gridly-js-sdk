# GridlyClient.TaskApi

All URIs are relative to *https://api.gridly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get**](TaskApi.md#get) | **GET** /v1/tasks/{taskId} | get



## get

> Task get(taskId)

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

let apiInstance = new GridlyClient.TaskApi();
let taskId = "taskId_example"; // String | taskId
apiInstance.get(taskId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 

### Return type

[**Task**](Task.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

