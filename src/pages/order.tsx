/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { title } from 'process';

// const About = () => (
//   <MainLayout title="Заказ">
//     <h3 className="order">Оформление заказа</h3>
//     <div className="body">
//       <div className="form_group">
//         <input className="form_input" />
//         <label className="form_label">Введите имя:</label>
//       </div>
//       <div className="form_group">
//         <input className="form_input" />
//         <label className="form_label">Адресс эл.почты:</label>
//       </div>
//     </div>

//     <div className="order1">
//       <div className="bblock">
//         <p>
//           <input checked type="radio" name="position" value="lager" />
//           Шаровые краны
//         </p>
//         <p>
//           <input checked type="radio" name="position" value="lager" />
//           Заглушки
//         </p>
//         <p>
//           <input checked type="radio" name="position" value="lager" />
//           Переходы
//         </p>
//       </div>

//       <br />
//       <div className="bblock2">
//         <p>
//           <input checked type="radio" name="position2" value="lager" />
//           Фланцы
//         </p>
//         <p>
//           <input checked type="radio" name="position2" value="lager" />
//           Отводы
//         </p>
//         <p>
//           <input checked type="radio" name="position2" value="lager" />
//           Поковки
//         </p>
//       </div>

//       <br />
//       <div className="bblock3">
//         <p>
//           <input checked type="radio" name="position2" value="lager" />
//           Опоры
//         </p>
//         <p>
//           <input checked type="radio" name="position2" value="lager" />
//           Днища
//         </p>
//         <p>
//           <input checked type="radio" name="position2" value="lager" />
//           Прокладки
//         </p>
//       </div>
//       <br />
//       <div className="bblock4">
//         <p>
//           <input checked type="radio" name="position2" value="lager" />
//           Нефтепромысловое оборудование
//         </p>
//         <p>
//           <input checked type="radio" name="position2" value="lager" />
//           Монтажные катушки
//         </p>
//         <p>
//           <input checked type="radio" name="position2" value="lager" />
//           Тройники
//         </p>
//       </div>
//     </div>
//     <p>
//       Дополнительная
//       <br /> информация:
//     </p>
//     <div className="textaria">
//       <textarea className="textaria1" placeholder="" />
//     </div>
//     <div className="button_1">
//       <button className="button" type="submit">
//         Отправить
//       </button>
//     </div>
//   </MainLayout>
// );
// export default About;
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
          <div key={el.id} className="input-wrapper">
            <input type="radio" className="position" value="lager" />
            <span className="checkmark" />
            <label>{el.text}</label>
          </div>
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
