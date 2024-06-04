describe('login page', () => {
    it('passes', () => {
        cy.visit('https://ormodule.bigbear-ai.com')
        cy.title().should('equal', 'or_module_ui')
    })
})

describe('home page', () => {
    it('logs in successfully', () => {
        cy.visit('https://ormodule.bigbear-ai.com')
        cy.get('#username').type(Cypress.env('username'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('button').click()
        cy.get('app-home').should('exist')
        cy.get('app-home').contains(Cypress.env('username'))
    })
})