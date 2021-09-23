/// <reference types="cypress" />

describe('Sample UI Test', () => {
  before(() => {
    cy.visit('https://weather-react-arcmorales.vercel.app/')
  })

  it('should display the dropdown result', () => {
    cy.get('input#free-solo-demo').type('Kyoto')
    cy.get('.MuiAutocomplete-popper').should('be.visible')
  })

  it('should allow the user to retrieve places', () => {
    cy.get('.MuiAutocomplete-popper ul > li').should('have.length.greaterThan', 0)
    cy.get('.MuiAutocomplete-popper ul > li').contains('Kyoto')
  })

  it('should be able to retrieve 3-day weather forecaset for the searched address', () => {
    cy.get('input#free-solo-demo').click().type(`{downarrow}{downarrow}{downarrow}{enter}`)
    cy.get('.MuiGrid-container .MuiCardContent-root').should('have.length', 3)
  })
})
