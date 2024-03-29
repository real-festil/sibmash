import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const About = () => (
  <MainLayout title="О компании">
    <div className="wrapper-about">
      <h3 className="name"> О компании</h3>
      <p>
        <p className="about-text">
          Наше предприятие является изготовителем и поставщиком металлоизделий,
          а именно:
          <br />
          заготовки прессовые, кованные, раскатные кольца из различных марок
          сталей: 20, 45,
          <br /> 20ЮЧ, 09Г2С, 10Г2ФБЮ, 65Г, 15ХМ, 15Х5М, 13ХФА, 15Х1М1Ф, 40ХН,
          40ХН2МА, 08Х18Н10Т,
          <br /> 20Х13, 12Х18Н10Т, 10Х17Н13М2Т и др.
        </p>

        <p className="about-text">
          Техническое оснащение производственной базы предприятия позволяет
          выпускать
          <br />
          готовую продукцию из собственных заготовок, а именно:
        </p>
        <p>
          {` `}
          Фланцы и кольцевые заготовки (поковки) фланцев Ду15-2500 по ГОСТ
          12821-80, 12820-80,
          <br />
          28759.3-90, 28759.4-90, ASME-B16.5, DIN-EN-1092-1 и по чертежам
          заказчика.
          <ul className="list">
            <li>
              - Прокладки овального и восьмиугольного сечения по ГОСТ
              28759.8-90, ОСТ
              <br /> 26.260.461-99, ASME Решетки трубные Ду≤1500 мм.
            </li>
            <li>- Обечайки, патрубки, штуцера (ГОСТ, ТУ, ОСТ и по чертежам)</li>
            <li>- Переходы эксцентрические (ГОСТ, ТУ, ОСТ и по чертежам)</li>
            <li>- Тройники (ГОСТ, ТУ, ОСТ и по чертежам)</li>
            <li>- Заглушки фланцевые и поворотные (обтюраторы).</li>
          </ul>
        </p>

        <p className="about-text">
          Главный принцип нашей компании – работа в полном соответствии с
          условиями и<br />
          требованиями заказчика. Это означает:
          <ul className="list">
            <li>
              - Высокое качество изделий, их конструкционное соответствие
              предоставленному
              <br /> техническому заданию, либо проектной документации
            </li>
            <li>- Быстрые сроки исполнения заказа</li>
            <li>
              - Предоставление сопутствующих услуг по комплектованию крепежом и
              прокладками.
            </li>
          </ul>
        </p>

        <p className="about-text">
          <strong>По заявке заказчика:</strong>
          <ul className="list">
            <li>
              - Изготавливаем любую нестандартизированную трубопроводную
              арматуру по тех.
              <br /> заданию, по рабочим чертежам заказчика, по образцу
              заказчика
            </li>
            <li>
              - Изготавливаем продукцию из углеродистых, коррозионностойких,
              жаропрочных,
              <br />
              кислотоустойчивых сталей.
            </li>
            <li>- Осуществляем доставку продукции до места назначения.</li>

            <li>
              С помощью современных измерительных и ультразвуковых приборов
              осуществляется
              <br />
              тщательный контроль качества выпускаемых изделий. Вся продукция
              сертифицирована.
            </li>
          </ul>
        </p>

        <p className="about-text">
          Мы предлагаем следующие варианты размещения заказа:
          <ul className="list">
            <li>-Частичная предоплата (от 20%)</li>
            <li>- Отсрочка платежа (до 30 дней)</li>
            <li>- Факторинг (до 180 дней)</li>
          </ul>
        </p>
      </p>
    </div>
  </MainLayout>
);
export default About;
