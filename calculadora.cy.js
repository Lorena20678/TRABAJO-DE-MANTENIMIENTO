describe('Pruebas E2E de la Calculadora', () => {
  beforeEach(() => {
    cy.visit('Calculadora.html');
  });

  it('Debe realizar una suma correctamente (7 + 8 = 15)', () => {
    cy.contains('button', '7').click();
    cy.contains('button', '+').click();
    cy.contains('button', '8').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '15');
  });

  it('Debe limpiar la pantalla con el botón AC', () => {
    cy.contains('button', '9').click();
    cy.contains('button', 'AC').click();
    cy.get('#current-operand').should('have.text', '0');
  });
});