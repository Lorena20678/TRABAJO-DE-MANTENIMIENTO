describe('Pruebas E2E completas de la Calculadora', () => {
  beforeEach(() => {
    // Abre la página de la calculadora antes de cada prueba
    cy.visit('Calculadora.html');
  });

  // --- de la mis ---
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

  // --- tarea---
  it('Debe realizar una resta correctamente (9 - 8 = 1)', () => {
    cy.contains('button', '9').click();
    cy.contains('button', '-').click();
    cy.contains('button', '8').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '1');
  });

  it('Debe realizar una multiplicación correctamente (7 × 8 = 56)', () => {
    cy.contains('button', '7').click();
    cy.contains('button', '×').click();
    cy.contains('button', '8').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '56');
  });

  it('Debe realizar una división correctamente (8 ÷ 2 = 4)', () => {
    cy.contains('button', '8').click();
    cy.contains('button', '÷').click();
    cy.contains('button', '2').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '4');
  });

  it('Debe borrar un dígito correctamente con el botón DEL', () => {
    cy.contains('button', '5').click();
    cy.contains('button', '9').click(); 
    cy.contains('button', 'DEL').click(); 
    cy.get('#current-operand').should('have.text', '5');

  });

  // esta de aqui es la nueva actividad de la semana 10 donde estoy agregando la tabla del 5
  it('Debe realizar la multiplicación de dos dígitos correctamente (5 × 5 = 25)', () => {
    cy.contains('button', '5').click();
    cy.contains('button', '×').click();
    cy.contains('button', '5').click();
    cy.contains('button', '=').click();
    cy.get('#current-operand').should('have.text', '25');
  });

});
