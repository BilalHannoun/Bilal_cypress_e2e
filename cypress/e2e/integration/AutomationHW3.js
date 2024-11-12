describe('TechGlobal - Project 3 Flight Booking Form Validation', () => {

    it('Test Case 01 - Validate the default state of the Book your trip form', () => {
      cy.visit('https://techglobal-training.com/frontend/project-3');

      cy.get('#oneWayRadioButton').should('be.visible').and('be.enabled').and('be.checked');

      cy.get('#roundTripRadioButton').should('be.visible').and('be.enabled').and('not.be.checked');

      cy.get('#cabinClassLabel').should('be.visible');
      cy.get('#cabinClassDropdown').should('be.visible');

      cy.get('#fromLabel').should('be.visible');
      cy.get('#fromDropdown').should('be.visible');
      cy.get('#toLabel').should('be.visible');
      cy.get('#toDropdown').should('be.visible');

      cy.get('#departLabel').should('be.visible');
      cy.get('#departDatePicker').should('be.visible');
      cy.get('#returnLabel').should('be.visible');
      cy.get('#returnDatePicker').should('be.visible').and('be.disabled');

      cy.get('#numberOfPassengersLabel').should('be.visible');
      cy.get('#numberOfPassengersDropdown').should('have.value', '1');

      cy.get('#passenger1Label').should('be.visible');
      cy.get('#passenger1Dropdown').should('have.value', 'Adult (16-64)');

      cy.get('#bookButton').should('be.visible').and('be.enabled');
    });

    it('Test Case 02 - Validate Round Trip selection', () => {
      cy.visit('https://techglobal-training.com/frontend/project-3');

      cy.get('#roundTripRadioButton').click().should('be.checked');
      cy.get('#oneWayRadioButton').should('not.be.checked');

      cy.get('#cabinClassDropdown').should('be.visible');
      cy.get('#fromDropdown').should('be.visible');
      cy.get('#toDropdown').should('be.visible');
      cy.get('#departDatePicker').should('be.visible');
      cy.get('#returnDatePicker').should('be.visible');
      cy.get('#numberOfPassengersDropdown').should('have.value', '1');
      cy.get('#passenger1Dropdown').should('have.value', 'Adult (16-64)');
      cy.get('#bookButton').should('be.visible').and('be.enabled');
    });

    it('Test Case 03 - Book one way for 1 passenger', () => {
      cy.visit('https://techglobal-training.com/frontend/project-3');
  
      cy.get('#oneWayRadioButton').click();
      cy.get('#cabinClassDropdown').select('Business');
      cy.get('#fromDropdown').select('Illinois');
      cy.get('#toDropdown').select('Florida');
      cy.get('#departDatePicker').click().type('{nextWeekDate}');
      cy.get('#numberOfPassengersDropdown').select('1');
      cy.get('#passenger1Dropdown').select('Senior (65+)');
      cy.get('#bookButton').click();

      cy.get('#bookingSummary').within(() => {
        cy.contains('DEPART');
        cy.contains('IL to FL');
        cy.contains('Number of passengers: 1');
        cy.contains('Passenger 1: Senior (65+)');
        cy.contains('Cabin Class: Business');
      });
    });
  
    it('Test Case 04 - Book round trip for 1 passenger', () => {
      cy.visit('https://techglobal-training.com/frontend/project-3');
  
      cy.get('#roundTripRadioButton').click();
      cy.get('#cabinClassDropdown').select('First');
      cy.get('#fromDropdown').select('California');
      cy.get('#toDropdown').select('Illinois');
      cy.get('#departDatePicker').click().type('{nextWeekDate}');
      cy.get('#returnDatePicker').click().type('{nextMonthDate}');
      cy.get('#numberOfPassengersDropdown').select('1');
      cy.get('#passenger1Dropdown').select('Adult (16-64)');
      cy.get('#bookButton').click();
  
      cy.get('#bookingSummary').within(() => {
        cy.contains('DEPART');
        cy.contains('CA to IL');
        cy.contains('Number of passengers: 1');
        cy.contains('Passenger 1: Adult (16-64)');
        cy.contains('Cabin Class: First');
        cy.contains('RETURN');
        cy.contains('IL to CA');
      });
    });
  
    it('Test Case 05 - Book one way for 2 passengers', () => {
      cy.visit('https://techglobal-training.com/frontend/project-3');
  
      cy.get('#oneWayRadioButton').click();
      cy.get('#cabinClassDropdown').select('Premium Economy');
      cy.get('#fromDropdown').select('New York');
      cy.get('#toDropdown').select('Texas');
      cy.get('#departDatePicker').click().type('{nextDayDate}');
      cy.get('#numberOfPassengersDropdown').select('2');
      cy.get('#passenger1Dropdown').select('Adult (16-64)');
      cy.get('#passenger2Dropdown').select('Child (2-11)');
      cy.get('#bookButton').click();
  
      cy.get('#bookingSummary').within(() => {
        cy.contains('DEPART');
        cy.contains('NY to TX');
        cy.contains('Number of passengers: 2');
        cy.contains('Passenger 1: Adult (16-64)');
        cy.contains('Passenger 2: Child (2-11)');
        cy.contains('Cabin Class: Premium Economy');
      });
    });
  });