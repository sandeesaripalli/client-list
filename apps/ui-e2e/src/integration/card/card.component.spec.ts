describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary&args=data;'));
  it('should render the component', () => {
    cy.get('contextlabs-card').should('exist');
    //cy.get('contextlabs-card').should('contain', 'data');
  });
});