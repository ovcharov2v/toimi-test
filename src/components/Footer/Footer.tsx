import React from 'react';

import "./Footer.scss";
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {ReactComponent as LinkArrow} from '../../assets/images/link-arrow.svg';
import {ReactComponent as WhatsappLogo} from '../../assets/images/whatsapp-logo.svg';
import {ReactComponent as TelegramLogo} from '../../assets/images/telegram-logo.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid footer__grid--top">
                    {/* Col */}
                    <a href="/" className="footer__col footer__col--logo" aria-label="На главную">
                        <Logo/>
                    </a>
                    {/* Col */}
                    <div className="footer__col footer__col--nav">
                        <p className="footer__col-title">Услуги</p>
                        <ul className="footer__nav">
                            <li className="footer__nav-elem">
                                <a href="#" className="footer__nav-link">Support and development</a>
                            </li>
                            <li className="footer__nav-elem">
                                <a href="#" className="footer__nav-link">UI/UX and product design</a>
                            </li>
                            <li className="footer__nav-elem">
                                <a href="#" className="footer__nav-link">
                                    Progressive Web
                                    <br/>
                                    Applications (PWA)
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Col */}
                    <div className="footer__col footer__col--nav">
                        <p className="footer__col-title">Компания</p>
                        <ul className="footer__nav">
                            <li className="footer__nav-elem">
                                <a href="#" className="footer__nav-link">О компании</a>
                            </li>
                            <li className="footer__nav-elem">
                                <a href="#" className="footer__nav-link">Проекты</a>
                            </li>
                            <li className="footer__nav-elem">
                                <a href="#" className="footer__nav-link">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    {/* Col */}
                    <div className="footer__col footer__col--nav footer__col--with-messengers">
                        <p className="footer__col-title">Контакты</p>
                        <ul className="footer__nav">
                            <li className="footer__nav-elem">
                                <a href="#" className="footer__nav-link">
                                    Скачать презентацию
                                    <LinkArrow  className="footer__nav-link-arrow"/>
                                </a>
                            </li>
                            <li className="footer__nav-elem">
                                <a href="tel:84999999999" className="footer__nav-link footer__nav-link--tel">+7 (499) 999-99-99</a>
                            </li>
                            <li className="footer__nav-elem">
                                <a href="mailto:info@site.com" className="footer__nav-link">info@site.com</a>
                            </li>
                        </ul>
                        <ul className="footer__messenger-list">
                            <li className="footer__messenger-box">
                                <a href="https://t.me/telegram-nickname" target="_blank" className="footer__messenger footer__messenger--telegram" title="Telegram" aria-label="Telegram">
                                    <TelegramLogo className="footer__messenger-logo"/>
                                </a>
                            </li>
                            <li className="footer__messenger-box">
                                <a href="https://wa.me/84999999999" target="_blank" className="footer__messenger footer__messenger--whatsapp" title="WhatsApp" aria-label="WhatsApp">
                                    <WhatsappLogo className="footer__messenger-logo"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__grid footer__grid--bottom">
                    <p className="footer__bottom-text footer__bottom-text--copyright">© Company 2022. All rights reserved.</p>
                    <a href="#" className="footer__bottom-text footer__bottom-text--agreement">Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
}