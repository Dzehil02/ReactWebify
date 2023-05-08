import { Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import './styles/index.scss'
import { Link } from 'react-router-dom';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            Text Text Text
            <Counter/>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy/>} />
                    <Route path={'/about'} element={<AboutPageLazy/>} />
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;