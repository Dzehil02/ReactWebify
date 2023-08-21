import { Article } from '../../../src/entities/Article';

const dafaultArticle = {
    title: 'TESTING TESTING',
    subtitle: 'TESTING TESTING Node JS TESTING TESTING',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    views: 1414,
    createdAt: '04.04.2024',
    userId: '2',
    type: ['ECONOMICS'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: `http://localhost:8000/articles`,
            headers: { Authorization: 'auth' },
            body: article ?? dafaultArticle,
        })
        .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'auth' },
    });
};

export const findArticleByTitle = (title = 'Golang') => {
    cy.getByTestId('ArticlesPageFilters.Input').type(title);
    cy.getByTestId('ArticlesPageFilters.Input').should('have.value', title);
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
            findArticleByTitle(title?: string): Chainable<void>;
        }
    }
}
