# GridlyClient.FilterField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caseSensitive** | **Boolean** |  | [optional] 
**columnId** | **String** |  | [optional] 
**dynamicColumn** | **String** |  | [optional] [readonly] 
**operator** | **String** |  | 
**queryPathTagViaId** | **Boolean** |  | [optional] 
**subField** | **String** |  | [optional] 
**values** | **[Object]** |  | [optional] 



## Enum: OperatorEnum


* `isNull` (value: `"isNull"`)

* `isNotNull` (value: `"isNotNull"`)

* `isEmpty` (value: `"isEmpty"`)

* `isNotEmpty` (value: `"isNotEmpty"`)

* `contains` (value: `"contains"`)

* `notContains` (value: `"notContains"`)

* `startsWith` (value: `"startsWith"`)

* `notStartsWith` (value: `"notStartsWith"`)

* `endsWith` (value: `"endsWith"`)

* `notEndsWith` (value: `"notEndsWith"`)

* `regexp` (value: `"regexp"`)

* `notRegexp` (value: `"notRegexp"`)

* `EQUAL` (value: `"="`)

* `NOT_EQUAL` (value: `"!="`)

* `LESS_THAN` (value: `"<"`)

* `LESS_THAN_OR_EQUAL_TO` (value: `"<="`)

* `GREATER_THAN` (value: `">"`)

* `GREATER_THAN_OR_EQUAL_TO` (value: `">="`)

* `in` (value: `"in"`)

* `notIn` (value: `"notIn"`)

* `modifiedBy` (value: `"modifiedBy"`)

* `notModifiedBy` (value: `"notModifiedBy"`)

* `between` (value: `"between"`)

* `notBetween` (value: `"notBetween"`)

* `hasQaError` (value: `"hasQaError"`)

* `isLengthViolated` (value: `"isLengthViolated"`)

* `hasTag` (value: `"hasTag"`)

* `spellCheck` (value: `"spellCheck"`)

* `qaCheck` (value: `"qaCheck"`)

* `isMt` (value: `"isMt"`)





## Enum: SubFieldEnum


* `DEPENDENCY_STATUS` (value: `"DEPENDENCY_STATUS"`)

* `SOURCE_STATUS` (value: `"SOURCE_STATUS"`)

* `TARGET_STATUS` (value: `"TARGET_STATUS"`)

* `FLOW_STATUS` (value: `"FLOW_STATUS"`)

* `TM` (value: `"TM"`)

* `MT` (value: `"MT"`)

* `TICKET` (value: `"TICKET"`)

* `COLOR` (value: `"COLOR"`)

* `METADATA` (value: `"METADATA"`)

* `CELL_METADATA` (value: `"CELL_METADATA"`)

* `WORD_COUNT` (value: `"WORD_COUNT"`)

* `PREVIEW_SOURCE_DATA` (value: `"PREVIEW_SOURCE_DATA"`)

* `PREVIEW_SOURCE_DEPENDENCY_STATUS` (value: `"PREVIEW_SOURCE_DEPENDENCY_STATUS"`)

* `PREVIEW_STATUS` (value: `"PREVIEW_STATUS"`)

* `PREVIEW_MERGE_OPTION` (value: `"PREVIEW_MERGE_OPTION"`)

* `RELATIVE_TIME` (value: `"RELATIVE_TIME"`)

* `LENGTH_VIOLATED` (value: `"LENGTH_VIOLATED"`)

* `LENGTH_SETTING` (value: `"LENGTH_SETTING"`)

* `WORKFLOW_STATUS` (value: `"WORKFLOW_STATUS"`)

* `REPETITION` (value: `"REPETITION"`)

* `QA_CHECK_STATUS` (value: `"QA_CHECK_STATUS"`)




