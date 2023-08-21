import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Перейти на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Перейти на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Перейти на несущ страницу', () => {
            cy.visit('/gettingmoney');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Перейти на страницу профиля', () => {
            cy.visit('/profile/4');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Перейти на страницу со списком статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
