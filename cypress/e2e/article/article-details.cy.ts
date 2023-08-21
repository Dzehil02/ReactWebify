let currentArticleId = '';

describe('Пользователь открывает статью', () => {
    // Создать статью - протестировать - удалить статью
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            // cy.log(JSON.stringify(article));
            cy.visit(`articles/${article.id}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('и проверяет загрузку статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('и получает список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('и отправляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text text text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('и оценивает статью', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRating(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });

    it('и оценивает статью (пример со стабом на фикстурах)', () => {
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-details.json',
        });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRating(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
