describe('Combined Test', () => {
    it('Performs Appointment, Login, and Validates Sidebar Activation', () => {
        // Open the website
        cy.visit('https://katalon-demo-cura.herokuapp.com');

        // Click on the button to make an appointment
        cy.get('a#btn-make-appointment').click();

        cy.get('input#txt-username').type("John Doe");

        cy.get('input#txt-password').type("ThisIsNotAPassword");

        cy.get('button#btn-login').click();

        // Open the sidebar menu
        cy.get('i.fa.fa-bars').click();

        // Check if the sidebar is shown
        cy.get('nav#sidebar-wrapper').should('have.class', 'active');

        // Navigate to the History page
        cy.contains('a[href="history.php#history"]', 'History').click();

        // Check if the History page says "No appointment."
        cy.get('.col-sm-12.text-center').contains('No appointment.').should('be.visible');
    });
});
