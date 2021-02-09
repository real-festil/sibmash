import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const About = () => (
  <MainLayout title="Контакты">
    <div className="Contacts">
      <div className="maps">
        <img src="/images/image 2.png" alt="123" />
      </div>
      <div className="mail">
        Электронный адресс
        <br />
        infosibmash@gmail.com
        <br />
        proxicham@gmail.com
        <br />
      </div>
      <div className="mail">
        Телефон:
        <br />
        8 (913) 652-54-04
        <br />
        8(3812)-399-859
      </div>
      <div className="mail">
        Адресс:
        <br />
        644031, Россия, Омская область,
        <br />
        г. Омск, 20-я Линия, 65 ;
      </div>
    </div>
  </MainLayout>
);
export default About;
