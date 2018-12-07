# gql-tag

[![npm](https://img.shields.io/npm/v/gql-tag.svg)](https://www.npmjs.com/package/gql-tag) [![Build Status](https://travis-ci.org/forsigner/gql-tag.svg?branch=master)](https://travis-ci.org/forsigner/gql-tag) [![Coverage Status](https://coveralls.io/repos/github/forsigner/gql-tag/badge.svg?branch=master)](https://coveralls.io/github/forsigner/gql-tag?branch=master)
[![npm](https://img.shields.io/badge/TypeScript-%E2%9C%93-007ACC.svg)](https://www.typescriptlang.org/) [![GitHub license](https://img.shields.io/github/license/forsigner/gql-tag.svg)](https://github.com/forsigner/gql-tag/blob/master/LICENSE)

> An useful utilities, help to highlight、format、auto-compelete Graphql code in you Editor.

## Installation

```sh
yarn add gql-tag
```

## Usage

```js
import gql from 'gql-tag'


const QUERY_TODO = `
  query Todos($id: ID) {
    todo(id: 5) {
      id
      title
    }
  }
`

const GET_TODO_GQL = gql`
  query Todos($id: ID) {
    todo(id: 5) {
      id
      title
    }
  }
`

expect(QUERY_TODO).toBe(GET_TODO_GQL) // pass

````

## License

[MIT License](https://github.com/forsigner/gql-tag/blob/master/LICENSE)
