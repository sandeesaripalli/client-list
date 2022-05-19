
describe('client-lists', () => {
  const SEARCH_TERM = 'Brendon';
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary&args=data;'));
  it('should render the component', () => {
    cy.get('contextlabs-root').should('exist');
    cy.get('contextlabs-searchbar').type(SEARCH_TERM);
    cy.get('contextlabs-card').should('be.visible');
    cy.get('contextlabs-card').click();   
    cy.get('contextlabs-searchbar >div>input').clear();
    cy.get('contextlabs-card').should('be.visible');
    cy.get('contextlabs-searchbar').type('India');
    cy.get('contextlabs-card').click();  
    
  });
});