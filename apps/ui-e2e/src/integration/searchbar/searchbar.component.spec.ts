describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=searchbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('contextlabs-searchbar').should('exist');
    cy.get('input#search').type('Brendon')
  });
});