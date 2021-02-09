/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { title } from 'process';

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
const About = () => (
  <MainLayout title="Заказ">
    <div className="order_all">
      <h3 className="order">Оформление заказа</h3>
      <div className="input_all">
        <div className="input_pole">
          <input className="form_input" />
          <p>Введите имя:</p>
        </div>
        <div className="input_pole">
          <input className="form_input" />
          <p>Адресс эл. почты:</p>
        </div>
      </div>
      <div className="tabl">
        {inputs.map((el) => (
          <label key={el.id} className="input-wrapper">
            <input type="radio" className="position" value="lager" />
            <span className="checkmark" />
            <label>{el.text}</label>
          </label>
        ))}
      </div>
      <div className="area">
        <textarea className="textaria" placeholder="" />
        <p>
          Дополнительная
          <br /> информация:
        </p>
      </div>
      <button className="button" type="submit">
        Отправить
      </button>
    </div>
  </MainLayout>
);
export default About;
