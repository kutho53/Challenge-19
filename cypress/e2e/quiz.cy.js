describe('Tech Quiz E2E', () => {
    it('should start the quiz and show questions', () => {
      cy.visit('/'); // Adjust the URL as necessary
      cy.get('button').contains('Start Quiz').click();
      cy.get('.question').should('exist'); // Ensure a question is displayed
    });
});
