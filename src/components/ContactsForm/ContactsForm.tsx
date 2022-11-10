import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

import "./ContactsForm.scss";
import {ReactComponent as Plane} from '../../assets/images/plane.svg';

export const ContactsForm = () => {
    const [submitAnimate, setSubmitAnimate] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            comment: '',
            agree: false
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Имя должно быть не менее 2 символов')
                .required('Укажите ваше имя'),
            email: Yup.string()
                .email('Укажите правильный E-Mail')
                .required('Укажите E-Mail'),
            comment: Yup.string()
                .min(20, 'Комментарий должен быть не менее 20 символов')
                .required('Напишите комментарий'),
            agree: Yup.bool()
                .oneOf([true], 'Accept Terms & Conditions is required')
        }),
        onSubmit: (_, { resetForm }) => {
            setSubmitAnimate(true);
            resetForm();
            setTimeout(() => {
                setSubmitAnimate(() => false);
            }, 1000);
        },
    });

    const nameClasses = classNames('form-group', {'form-group--error': formik.touched.name && formik.errors.name, 'form-group--empty': !formik.values.name.length});
    const emailClasses = classNames('form-group', {'form-group--error': formik.touched.email && formik.errors.email, 'form-group--empty': !formik.values.email.length});
    const commentClasses = classNames('contacts-form__comment form-group', {'form-group--error': formik.touched.comment && formik.errors.comment, 'form-group--empty': !formik.values.comment.length});
    const agreeClasses = classNames('checkbox contacts-form__agreement', {'checkbox--error': formik.touched.agree && formik.errors.agree});
    const submitClasses = classNames('contacts-form__submit', {'contacts-form__submit--animate': submitAnimate});
    const normalTextClasses = classNames('contacts-form__submit-text', {'contacts-form__submit-text--active': !submitAnimate});
    const submitTextClasses = classNames('contacts-form__submit-text', {'contacts-form__submit-text--active': submitAnimate})

    return (
        <section className="contacts-form container">
            <h1 className="contacts-form__title h1">Мы рядом</h1>
            <p className="contacts-form__text">
                Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите нам на почту&nbsp;
                <a href="mailto:info@site.com" className="contacts-form__text-link">info@site.com</a>
            </p>
            <form className="contacts-form__form" onSubmit={formik.handleSubmit}>
                <div className="contacts-form__inputs-box">
                    <div className="contacts-form__inputs-grid">
                        <div className={nameClasses}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-group__input"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            <label htmlFor="name" className="form-group__label">Ваше имя <span className="form-group__asterisk">*</span></label>
                            {formik.touched.name && formik.errors.name ? (
                                <p className="form-group__error-message">{formik.errors.name}</p>
                            ) : null}
                        </div>
                        <div className={emailClasses}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-group__input"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            <label htmlFor="email" className="form-group__label">Ваш E-Mail <span className="form-group__asterisk">*</span></label>
                            {formik.touched.email && formik.errors.email ? (
                                <p className="form-group__error-message">{formik.errors.email}</p>
                            ) : null}
                        </div>
                        <div className={commentClasses}>
                            <textarea
                                id="comment"
                                name="comment"
                                className="form-group__input form-group__input--textarea"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.comment}
                            />
                            <label htmlFor="comment" className="form-group__label">Комментарий <span className="form-group__asterisk">*</span></label>
                            {formik.touched.comment && formik.errors.comment ? (
                                <p className="form-group__error-message">{formik.errors.comment}</p>
                            ) : null}
                        </div>
                    </div>
                    <div className={agreeClasses}>
                        <input
                            type="checkbox"
                            id="agree"
                            name="agree"
                            className="checkbox__input"
                            checked={formik.values.agree}
                            onChange={(e) => { formik.setFieldValue("agree", e.target.checked) }}
                        />
                        <label htmlFor="agree" className="checkbox__label">
                            Согласен с <a href="#" className="checkbox__link" target="_blank" rel="nofollow">Политикой конфиденциальности</a>
                        </label>
                    </div>
                </div>
                <div className="contacts-form__submit-box">
                    <button type="submit" className={submitClasses}>
                        <Plane className="contacts-form__submit-plane"/>
                        <span className={normalTextClasses}>Отправить</span>
                        <span className={submitTextClasses}>Ваше сообщение отправлено!</span>
                    </button>
                </div>
            </form>
        </section>
    );
}