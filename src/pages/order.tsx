/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Form, Field } from 'react-final-form';

const inputs = [
  {
    id: 0,
    text: `Шаровые краны`,
  },
  {
    id: 1,
    text: `Заглушки`,
  },
  {
    id: 2,
    text: `Переходы`,
  },
  {
    id: 3,
    text: `Фланцы`,
  },
  {
    id: 4,
    text: `Отводы`,
  },
  {
    id: 5,
    text: `Поковки`,
  },
  {
    id: 6,
    text: `Опоры`,
  },
  {
    id: 7,
    text: `Днища`,
  },
  {
    id: 8,
    text: `Прокладки`,
  },
  {
    id: 9,
    text: `Нефтепромысловое оборудование`,
  },
  {
    id: 10,
    text: `Монтажные катушки`,
  },
  {
    id: 11,
    text: `Проводники`,
  },
];
const About = () => {
  const onSubmit = async (v: any) => {
    const xhr = new XMLHttpRequest();
    const data = new FormData();
    data.append(`Данные`, JSON.stringify(v));
    xhr.open(`POST`, `https://formspree.io/f/xwkwzgao`);
    xhr.setRequestHeader(`Accept`, `application/json`);
    await xhr.send(data);
  };

  return (
    <MainLayout title="Заказ">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="order_all">
            <h3 className="order">Оформление заказа</h3>
            <div className="input_all">
              <div className="input_pole">
                <Field name="Имя" type="text">
                  {({ input }) => <input className="form_input" {...input} />}
                </Field>
                <p>Введите имя:</p>
              </div>
              <div className="input_pole">
                <Field name="почта" type="text">
                  {({ input }) => <input className="form_input" {...input} />}
                </Field>
                <p>Адресс эл. почты:</p>
              </div>
            </div>
            <div className="tabl">
              {inputs.map((el) => (
                <Field
                  name="тип"
                  type="radio"
                  value={el.text}
                  id={el.text}
                  key={el.id}
                >
                  {({ input }) => (
                    <label className="input-wrapper">
                      <input
                        type="radio"
                        className="position"
                        value="lager"
                        {...input}
                      />
                      <span className="checkmark" />
                      <label>{el.text}</label>
                    </label>
                  )}
                </Field>
              ))}
            </div>
            <div className="area">
              <Field name="информация" type="text">
                {({ input }) => (
                  <textarea className="textaria" placeholder="" {...input} />
                )}
              </Field>
              <p>
                Дополнительная
                <br /> информация:
              </p>
            </div>
            <button className="button" type="submit">
              Отправить
            </button>
          </form>
        )}
      />
    </MainLayout>
  );
};

export default About;
