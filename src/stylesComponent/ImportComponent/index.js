import React from 'react';

import art from '../../assets/art.gif';
import './styles.css';

export default function ImportComponent() {
  return (
    <div className="container">
      <div className="card">
        <img src={art} alt="art" className="img" />
        <div className="box">
          <h3 className="title">Frases inspiradoras</h3>
          <div className="content">
            <p className="p">A simplicidade é o último grau de sofisticação</p>
            <span className="span">Leonardo da Vinci</span>
          </div>
          <div className="footer">
            <h4 className="h4">Continuar</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
