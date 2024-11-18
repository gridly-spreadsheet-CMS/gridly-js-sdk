# GridlyClient.CdnApi

All URIs are relative to *https://api.gridly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list**](CdnApi.md#list) | **GET** /v1/cdns | list
[**publish**](CdnApi.md#publish) | **PUT** /v1/cdns/{cdnId}/publish | publish
[**unPublish**](CdnApi.md#unPublish) | **PUT** /v1/cdns/{cdnId}/unpublish | unPublish



## list

> [CDN] list(gridId, opts)

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

let apiInstance = new GridlyClient.CdnApi();
let gridId = "gridId_example"; // String | gridId
let opts = {
  'offset': 0, // Number | offset
  'limit': 128, // Number | limit
  'ids': ["null"], // [String] | ids
  'published': true // Boolean | published
};
apiInstance.list(gridId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridId** | **String**| gridId | 
 **offset** | **Number**| offset | [optional] [default to 0]
 **limit** | **Number**| limit | [optional] [default to 128]
 **ids** | [**[String]**](String.md)| ids | [optional] 
 **published** | **Boolean**| published | [optional] 

### Return type

[**[CDN]**](CDN.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## publish

> CDN publish(cdnId)

publish

publish

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.CdnApi();
let cdnId = "cdnId_example"; // String | cdnId
apiInstance.publish(cdnId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cdnId** | **String**| cdnId | 

### Return type

[**CDN**](CDN.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unPublish

> CDN unPublish(cdnId)

unPublish

unPublish

### Example

```javascript
import GridlyClient from 'gridly-client';
let defaultClient = GridlyClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new GridlyClient.CdnApi();
let cdnId = "cdnId_example"; // String | cdnId
apiInstance.unPublish(cdnId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cdnId** | **String**| cdnId | 

### Return type

[**CDN**](CDN.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

