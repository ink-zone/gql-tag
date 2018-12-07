import gql from '../src/index'

test('simple', () => {
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

test('has graphql variables', () => {
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

test('with outer variables', () => {
  const titleKey = 'title'

  const GET_TODO = `
    {
      id
      ${titleKey}
    }
  `

  const GET_TODO_GQL = gql`
    {
      id
      ${titleKey}
    }
  `

  expect(GET_TODO).toBe(GET_TODO_GQL)
})
