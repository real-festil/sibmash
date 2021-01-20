import { FC } from 'react';
import { AppProps } from 'next/app';
import '../styles/main.scss';
import 'react-multi-carousel/lib/styles.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
