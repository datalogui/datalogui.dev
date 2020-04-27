---
id: terminology
title: Terminology
sidebar_label: Terminology
---
## Glossary of terms used in Datalog UI

These terms have a a meaning outside of Datalog UI, but sometimes they have more then one meaning. This pages defines exactly what we mean by the words we use.

## Table

A data structure that stores rows of Datums. This is equivalent to a SQL table.

## Datum

A piece of data that lives as a row in a table. I.e. an object `{foo: 1, bar: 2}` in some Table with schema `{foo: NumberType, bar: NumberType}`.

## Materialized Table

A table that is created as the result of a Query. You can't assert/retract datums to it. This [Wikipedia](https://en.wikipedia.org/wiki/Materialized_view) entry applies.

## Table View
A Table View is one of the core abstractions in DatalogUI. It's how you read data from a Table or Materialized Table. It exposes the methods `recentData` which returns data that is new since the last time you called `recentData`, and `readAllData` which reads all the data in the backing Table. If you ignore the differential part of Datalog UI, you can think of a Table View as providing you access to all the results of a query or rows in a Table. If you want to take advantage of the differential part of Datalog UI you can use `recentData` to give you only the changes since the last time you asked for data.

## Query

A Query is the pure function that you pass into `datalog.query`. This function should be free of side effects. The function itself is run to understand the query declaration, but it is not run every time the query is run.


