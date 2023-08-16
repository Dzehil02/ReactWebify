import type { Meta, StoryObj } from '@storybook/react';

import { ArticleList } from './ArticleList';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Article } from '../../model/types/article';
import { ArticleView } from "../../model/consts/consts";

const meta: Meta<typeof ArticleList> = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    tags: ['autodocs'],
    argTypes: {
        
    },

};

export default meta;
type Story = StoryObj<typeof ArticleList>;

const articleArr = {
    "id": "1",
    "title": "Javascript news",
    "subtitle": "Что нового в JS за 2022 год?",
    "img": "https://1.bp.blogspot.com/-TGQt5uRcAkg/XuMIJoAhwnI/AAAAAAAAA38/FaJQpUUDsGEYR1zBK1wqLWUA9DTYp5CiQCPcBGAYYCw/s587/js.png",
    "views": 1022,
    "createdAt": "26.02.2022",
    "user": {
        id: "1",
        username: "Entoni",
        avatar: "https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg"
    },
    "type": [
        "IT",
        'SCIENCE',
        'POLITICS',
        'ECONOMICS',
    ],
    "blocks": [
        {
            "id": "1",
            "type": "TEXT",
            "title": "Заголовок этого блока",
            "paragraphs": [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        },
        {
            "id": "4",
            "type": "CODE",
            "code": "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
        },
        {
            "id": "5",
            "type": "TEXT",
            "title": "Заголовок этого блока",
            "paragraphs": [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        },
        {
            "id": "2",
            "type": "IMAGE",
            "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            "title": "Рисунок 1 - скриншот сайта"
        },
        {
            "id": "3",
            "type": "CODE",
            "code": "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
        },
        {
            "id": "7",
            "type": "TEXT",
            "title": "Заголовок этого блока",
            "paragraphs": [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        },
        {
            "id": "8",
            "type": "IMAGE",
            "src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            "title": "Рисунок 1 - скриншот сайта"
        },
        {
            "id": "9",
            "type": "TEXT",
            "title": "Заголовок этого блока",
            "paragraphs": [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
            ]
        }
    ]
} as Article;

export const LightBig: Story = {
    args: {
        articles: 
            new Array(3).fill(0).map((item, index) => ({
                ...articleArr,
                id: String(index)
            }))
        ,
        isLoading: false,
        view: ArticleView.BIG
    }
};

export const DarkBig: Story = {
    args: {
        articles: 
            new Array(3).fill(0).map((item, index) => ({
                ...articleArr,
                id: String(index)
            }))
        ,
        isLoading: false,
        view: ArticleView.BIG
    }
};
DarkBig.decorators = [ThemeDecorator(Theme.DARK)];

export const BlueBig: Story = {
    args: {
        articles: 
            new Array(3).fill(0).map((item, index) => ({
                ...articleArr,
                id: String(index)
            }))
        ,
        isLoading: false,
        view: ArticleView.BIG
    }
};
BlueBig.decorators = [ThemeDecorator(Theme.BLUE)];

export const LightSmall: Story = {
    args: {
        articles: 
            new Array(9).fill(0).map((item, index) => ({
                ...articleArr,
                id: String(index)
            }))
        ,
        isLoading: false,
        view: ArticleView.SMALL
    }
};

export const DarkSmall: Story = {
    args: {
        articles: 
            new Array(9).fill(0).map((item, index) => ({
                ...articleArr,
                id: String(index)
            }))
        ,
        isLoading: false,
        view: ArticleView.SMALL
    }
};
DarkSmall.decorators = [ThemeDecorator(Theme.DARK)];

export const BlueSmall: Story = {
    args: {
        articles: 
            new Array(9).fill(0).map((item, index) => ({
                ...articleArr,
                id: String(index)
            }))
        ,
        isLoading: false,
        view: ArticleView.SMALL
    }
};
BlueSmall.decorators = [ThemeDecorator(Theme.BLUE)];

export const IsLoadingLightBig: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.BIG
    }
};

export const IsLoadingLightSmall: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.SMALL
    }
};

export const IsLoadingDarkBig: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.BIG
    }
};
IsLoadingDarkBig.decorators = [ThemeDecorator(Theme.DARK)];

export const IsLoadingDarkSmall: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.SMALL
    }
};
IsLoadingDarkSmall.decorators = [ThemeDecorator(Theme.DARK)];

export const IsLoadingBlueBig: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.BIG
    }
};
IsLoadingBlueBig.decorators = [ThemeDecorator(Theme.BLUE)];

export const IsLoadingBlueSmall: Story = {
    args: {
        isLoading: true,
        articles: [],
        view: ArticleView.SMALL
    }
};
IsLoadingBlueSmall.decorators = [ThemeDecorator(Theme.BLUE)];
