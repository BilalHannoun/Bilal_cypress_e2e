describe('Test Case 01 - Validate the login form', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-2');
    });

    it('Validates the username input box', () => {
        cy.get('input[name="username"]').should('be.visible').and('not.have.attr', 'required');
        cy.contains('label', 'Please enter your username');
    });

    it('Validates the password input box', () => {
        cy.get('input[name="password"]').should('be.visible').and('not.have.attr', 'required');
        cy.contains('label', 'Please enter your password');
    });

    it('Validates the LOGIN button', () => {
        cy.get('button').contains('LOGIN').should('be.visible').and('be.enabled');
    });

    it('Validates the Forgot Password? link', () => {
        cy.get('a').contains('Forgot Password?').should('be.visible').and('have.attr', 'href');
    });
});




describe('Test Case 02 - Validate the valid login', () => {
    it('Logs in with valid credentials', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2');
        cy.get('input[name="username"]').type('TechGlobal');
        cy.get('input[name="password"]').type('Test1234');
        cy.get('button').contains('LOGIN').click();
        cy.contains('You are logged in').should('be.visible');
        cy.get('button').contains('LOGOUT').should('be.visible');
    });
});




describe('Test Case 03 - Validate the logout', () => {
    it('Logs out after logging in', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2');
        cy.get('input[name="username"]').type('TechGlobal');
        cy.get('input[name="password"]').type('Test1234');
        cy.get('button').contains('LOGIN').click();
        cy.get('button').contains('LOGOUT').click();
        cy.get('input[name="username"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
    });
});




describe('Test Case 04 - Validate the Forgot Password? link and Reset Password modal', () => {
    it('Validates the Reset Password modal', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2');
        cy.get('a').contains('Forgot Password?').click();
        cy.contains('Reset Password').should('be.visible');
        cy.get('button.close').should('be.visible');
        cy.get('input[type="email"]').should('be.visible');
        cy.contains('Enter your email address and we\'ll send you a link to reset your password.');
        cy.get('button').contains('SUBMIT').should('be.visible').and('be.enabled');
    });
});




describe('Test Case 05 - Validate the Reset Password modal close button', () => {
    it('Closes the Reset Password modal', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2');
        cy.get('a').contains('Forgot Password?').click();
        cy.contains('Reset Password').should('be.visible');
        cy.get('button.close').click();
        cy.contains('Reset Password').should('not.exist');
    });
});




describe('Test Case 06 - Validate the Reset Password form submission', () => {
    it('Submits the Reset Password form', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2');
        cy.get('a').contains('Forgot Password?').click();
        cy.get('input[type="email"]').type('example@example.com');
        cy.get('button').contains('SUBMIT').click();
        cy.contains('A link to reset your password has been sent to your email address.').should('be.visible');
    });
});




describe('Test Case 07 - Validate the invalid login with empty credentials', () => {
    it('Displays an error message for empty login', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2');
        cy.get('button').contains('LOGIN').click();
        cy.contains('Invalid Username entered!').should('be.visible');
    });
});




describe('Test Case 08 - Validate the invalid login with wrong username', () => {
    it('Displays an error for an incorrect username', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2');
        cy.get('input[name="username"]').type('John');
        cy.get('input[name="password"]').type('Test1234');
        cy.get('button').contains('LOGIN').click();
        cy.contains('Invalid Username entered!').should('be.visible');
    });
});




describe('Test Case 09 - Validate the invalid login with wrong password', () => {
    it('Displays an error for an incorrect password', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2');
        cy.get('input[name="username"]').type('TechGlobal');
        cy.get('input[name="password"]').type('1234');
        cy.get('button').contains('LOGIN').click();
        cy.contains('Invalid Password entered!').should('be.visible');
    });
});




describe('Test Case 10 - Validate the invalid login with wrong username and password', () => {
    it('Displays an error for incorrect username and password', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2');
        cy.get('input[name="username"]').type('John');
        cy.get('input[name="password"]').type('1234');
        cy.get('button').contains('LOGIN').click();
        cy.contains('Invalid Username entered!').should('be.visible');
    });
});