describe('Home spec', () => {
  it('opens the page and click menu', () => {
    cy.visit('/')

    cy.get('[data-testid="hamburger-menu"]').should('exist')
    cy.get('[data-testid="hamburger-menu"]').click()
  })
})