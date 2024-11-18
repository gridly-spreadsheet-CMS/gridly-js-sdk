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


* `dependencyStatus` (value: `"_dependencyStatus"`)

* `sourceStatus` (value: `"_sourceStatus"`)

* `targetStatus` (value: `"_targetStatus"`)

* `flowStatus` (value: `"_flowStatus"`)

* `tm` (value: `"_tm"`)

* `mt` (value: `"_mt"`)

* `ticket` (value: `"_ticket"`)

* `color` (value: `"_color"`)

* `metadata` (value: `"_metadata"`)

* `cell_metadata` (value: `"_cell_metadata"`)

* `word_count` (value: `"_word_count"`)

* `previewSourceData` (value: `"_previewSourceData"`)

* `previewSourceDependencyStatus` (value: `"_previewSourceDependencyStatus"`)

* `previewStatus` (value: `"_previewStatus"`)

* `previewMergeOption` (value: `"_previewMergeOption"`)

* `relativeTime` (value: `"_relativeTime"`)

* `length_violated` (value: `"_length_violated"`)

* `lengthSetting` (value: `"_lengthSetting"`)

* `workflow` (value: `"_workflow"`)

* `workflowStepTransitioned` (value: `"_workflowStepTransitioned"`)

* `repetition` (value: `"_repetition"`)

* `qaCheckStatus` (value: `"_qaCheckStatus"`)

* `spellCheckStatus` (value: `"_spellCheckStatus"`)

* `hasTag` (value: `"_hasTag"`)




