import gql from '../src/index'

test('no variables', () => {
  const GET_TODO = `
    {
      id
      title
    }
  `

  const GET_TODO_GQL = gql`
    {
      id
      title
    }
  `

  expect(GET_TODO).toBe(GET_TODO_GQL)
})

test('has variables', () => {
  const QUERY_TODO = `
    query Todos($id: ID) {
      user(id: 5) {
        id
        title
      }
    }
  `

  const GET_TODO_GQL = gql`
    query Todos($id: ID) {
      user(id: 5) {
        id
        title
      }
    }
  `

  expect(QUERY_TODO).toBe(GET_TODO_GQL)
})
