describe('Verify Phone Number Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('shows an example intercept issue', () => {
    cy.intercept(
      {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
      },
      {
        statusCode: 400,
        body: {
          message: 'Network Error',
          result: [''],
        },
      }
    )
    cy.get('#status').should('have.text', '400')
  })
})
