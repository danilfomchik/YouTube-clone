/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
    describe('Firebase Authentication', () => {
        it('should sign up a user', () => {
            cy.visit('/?auth=sign-up');

            cy.get('input[name=firstname]').eq(1).type('test');
            cy.get('input[name=lastname]').eq(1).type('test');
            cy.get('input[name=email]').eq(1).type('test@example.com');
            cy.get('input[name=password]').eq(1).type('11111q');
            cy.get('input[name=confirmPassword]').eq(1).type('11111q');

            cy.get('form[data-testid="Sign up form"]').eq(1).submit();
        });
    });
});
