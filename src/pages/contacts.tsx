import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api';

const About = () => {
  const { isLoaded } = useJsApiLoader({
    id: `google-map-script`,
    googleMapsApiKey: `YOUR_API_KEY`,
  });
  const containerStyle = {
    width: `700px`,
    height: `500px`,
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);

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
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        </LoadScript>
      </div>
    </MainLayout>
  );
};

export default About;
