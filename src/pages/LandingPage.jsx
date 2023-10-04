import React from 'react';
import Header from '../components/header/Header';
import './globalStyle.css';
import BannerBemVindo from '../components/bannerBemVindo/BannerBemVindo';
import BannerDesafioFinanceiro from '../components/bannerDesafio/BannerDesafioFinanceiro';

function LandingPage() {
  return (
    <>
      <Header />
      <BannerBemVindo />
      <BannerDesafioFinanceiro />
    </>
  );
}

export default LandingPage;
