import React from 'react';
import Header from '../components/header';
import BannerBemVindo from '../components/bannerBemVindo';
import BannerDesafioFinanceiro from '../components/bannerDesafio';

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
