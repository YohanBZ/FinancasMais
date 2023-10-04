import React from 'react';
import s from './BannerBemVindo.module.css';
import banner1 from '/LP-banner1.svg';

const BannerBemVindo = () => {
  return (
    <section className={s.container}>
      <div className={s.text}>
        <h2 className={s.title}>Bem-vindo ao Finanças+</h2>
        <h3 className={s.title3}>
          O seu aliado para uma gestão financeira bem-sucedida e a realização
          dos seus objetivos financeiros.
        </h3>
        <p className={s.paragrafo1}>
          Nosso aplicativo foi projetado para proporcionar a você o controle
          total sobre suas finanças pessoais, tornando o processo de gerenciar
          suas receitas, despesas e metas financeiras uma tarefa simples e
          prazerosa.
        </p>
      </div>
      <div>
        <img src={banner1} alt="" />
      </div>
    </section>
  );
};

export default BannerBemVindo;
