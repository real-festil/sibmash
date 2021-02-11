import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const About = () => {
  const containerStyle = {
    width: `700px`,
    height: `500px`,
  };

  return (
    <MainLayout title="Контакты">
      <div className="Contacts">
        <div className="mail">
          Электронный адрес
          <br />
          infosibmash@gmail.com
          <br />
          proxicham@gmail.com
          <br />
          <br />
          Телефон:
          <br />
          8 (913) 652-54-04
          <br />
          8(3812)-399-859
          <br />
          <br />
          Адрес:
          <br />
          644031, Россия, Омская область,
          <br />
          г. Омск, 20-я Линия, 65
        </div>
        <LoadScript googleMapsApiKey="AIzaSyC_RNGIuK2dE0co70Xa5a3EzmCTE9SQhzQ">
          <GoogleMap
            center={{
              lat: 54.986205,
              lng: 73.4227419,
            }}
            mapContainerStyle={containerStyle}
            zoom={15}
          />
        </LoadScript>
      </div>
    </MainLayout>
  );
};

export default About;
