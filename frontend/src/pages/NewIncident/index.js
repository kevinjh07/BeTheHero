import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>FDescreva o caso detalhadamente para econtrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />

          <button className="button" type="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
