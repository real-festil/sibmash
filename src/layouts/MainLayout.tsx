import React from 'react';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Header from '@/components/Header';

interface ILayout {
  title: string;
  children?: React.ReactNode;
}

const MainLayout = ({ title, children }: ILayout) => (
  <main className="main">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />

    <style jsx>{`
      .main {
        background: #626262;
        color: #fff;
      }
    `}</style>
  </main>
);

export default MainLayout;
