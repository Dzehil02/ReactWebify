const dafaultText = 'Dfault Text'

export const addComment = (text?: string) => {
    cy.getByTestId('AddCommentForm.Input').type(text ?? dafaultText);
    cy.getByTestId('AddCommentForm.Button').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text?: string): Chainable<void>;
            
        }
    }
}