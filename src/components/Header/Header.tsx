import React from 'react';

import "./Header.scss";
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {ReactComponent as ArrowRight} from '../../assets/images/arrow-right.svg';
import {ReactComponent as Dots} from '../../assets/images/dots.svg';


export const Header = () => {
    return (
        <header className="header">
            <div className="container container--fluid header__container">
                <a href="#" className="header__logo-link" aria-label="На главную">
                    <Logo className="header__logo"/>
                </a>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-elem">
                            <a href="#" className="header__link">Проекты</a>
                        </li>
                        <li className="header__nav-elem">
                            <a href="#" className="header__link">О компании</a>
                        </li>
                        <li className="header__nav-elem">
                            <a href="#" className="header__link header__link--active">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div className="header__right-side">
                    <ul className="header__lang-list">
                        <li className="header__lang-elem">
                            <a href="#" className="header__link header__link--active">Ru</a>
                        </li>
                        <li className="header__lang-elem">
                            <a href="#" className="header__link">En</a>
                        </li>
                    </ul>
                    <a href="#" className="header__start-project">
                        Начать проект
                        <ArrowRight className="header__start-project-arrow"/>
                    </a>
                </div>
                <button className="header__menu-btn" role="button" aria-label="Menu">
                    <Dots className="header__menu-icon"/>
                </button>
            </div>
        </header>
    );
}