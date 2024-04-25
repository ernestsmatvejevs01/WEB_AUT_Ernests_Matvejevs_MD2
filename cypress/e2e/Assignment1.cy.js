describe('CURA Healthcare Service Appointment Booking', () => {
    it('should book an appointment correctly', () => {
        // Going to the homepage of CURA Healthcare
        cy.visit('https://katalon-demo-cura.herokuapp.com');

        // Clicking on the make appointment button on the homepage to go to the login page
        cy.get('a#btn-make-appointment').click();

        cy.get('input#txt-username').type("John Doe");

        cy.get('input#txt-password').type("ThisIsNotAPassword");

        cy.get('button#btn-login').click();

        // Checking if the URL has changed to the appointment page after login
        cy.url().should('include', '#appointment');

        // Selecting the facility from the dropdown
        cy.get('select[name="facility"]').select('Seoul CURA Healthcare Center');

        cy.get('input#chk_hospotal_readmission').check();

        cy.get('input#radio_program_medicaid').check();

        cy.get('input#txt_visit_date').click();
        
        cy.get('.datepicker').contains('30').click(); 

        // Typing a comment in the comment box
        cy.get('textarea#txt_comment').type('Test');

        // Clicking the book appointment button to submit all the information
        cy.get('button#btn-book-appointment').click();

        // Checking if the appointment confirmation text is visible to ensure the appointment was successfully made
        cy.contains('Appointment Confirmation').should('be.visible');
    });
});
