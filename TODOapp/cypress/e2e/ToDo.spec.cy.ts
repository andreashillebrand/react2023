describe('template spec', () => {
    it('passes', () => {
      cy.visit("http://localhost:5173/");
      cy.get('.list__item').contains('No To Dos');
      cy.get(`[aria-label="add"]`).click();
      cy.get('.list__item').contains('Something to do');
      cy.get(`[aria-label="delete"]`).click();
      cy.get('.list__item').contains('No To Dos');

      
    })
  })



// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })