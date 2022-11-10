import React from 'react';
import "./Breadcrumbs.scss";

export const Breadcrumbs = () => {
    return (
        <ul className="breadcrumbs container">
            <li className="breadcrumbs__elem">
                <a href="/" className="breadcrumbs__link">Главная</a>
            </li>
            <li className="breadcrumbs__elem">
                <span className="breadcrumbs__link">Контакты</span>
            </li>
        </ul>
    );
}