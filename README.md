# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@trickstyle89/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

const head = a simple function that returns the first element of an array.
const tail = a function that slices first element off an array and returns the rest.
const middle = a function that returns the middle elements of an array.
const assertEqual = simple primative assertion tester.
const assertArraysEqual = array assertion tester.
const eqArrays = simple array assertion tester.