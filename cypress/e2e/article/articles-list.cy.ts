describe('User заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });

    it('статьи подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it('статьи подгружаются на стабах (фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
    });

    it('поиск статьи по заголовку', () => {
        cy.findArticleByTitle();
        cy.getByTestId('ArticleListItem').should('have.length.at.least', 1);
        cy.getByTestId('ArticlesPageFilters.Input').clear();
    });

    it('сортировка статей по просмотрам по убыванию', () => {
        cy.getByTestId('ArticleSortSelect').select('views');
        cy.getByTestId('ArticleOrderSelect').select('desc');
        cy.getByTestId('ArticleSortSelect')
            .select('views')
            .should('have.value', 'views');
        cy.getByTestId('ArticleOrderSelect')
            .select('desc')
            .should('have.value', 'desc');
    });

    it('сортировка статей по типу "наука"', () => {
        cy.getByTestId('Card.SCIENCE').click();
        cy.getByTestId('ArticleListItem').should('have.length.at.least', 2);
    });

    it.skip('Пропуск теста (пример)', () => {
        cy.getByTestId('NotSkipTestPlease').should('exist');
    });
});
