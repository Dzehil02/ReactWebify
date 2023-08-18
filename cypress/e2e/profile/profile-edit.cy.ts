let profileId = '';

describe('User visit profile page', () => {
    
    beforeEach(() => {
        cy.visit('')
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`)
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId)
    });

    it('Загрузка профиля', () => {
        cy.getByTestId('ProfileCard.Firstname').should('have.value', 'Tester');
    });
    
    it('Редактирование профиля', () => {
        const newFirstname = 'manual';
        const newLastname = 'tester';
        cy.updateProfile(newFirstname, newLastname);
        cy.getByTestId('ProfileCard.Firstname').should('have.value', newFirstname)
        cy.getByTestId('ProfileCard.Lastname').should('have.value', newLastname)
    });
})