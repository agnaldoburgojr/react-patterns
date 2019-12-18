// @ts-nocheck
import React from 'react';

import art from '../../assets/art.gif';

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    background: '#efefef',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '200px',
  },
  card: {
    width: '800px',
    height: '400px',
    background: '#fff',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    borderRadius: '8px',
  },

  img: {
    width: '400px',
    height: '300px',
    marginTop: '50px',
  },

  box: {
    width: '100%',
    padding: '36px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: '#456',
    borderRadius: '0 8px 8px 0',
  },

  title: {
    fontSize: '16px',
    fontWeight: 700,
    textAlign: 'right',
    textTransform: 'uppercase',
    color: '#ff8eaa',
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  p: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: 1.4,
    marginBottom: '20px',
    marginTop: '40px',
  },
  span: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontSize: '16px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
  },
  h4: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
  },
};

export default function InlineComponent() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={art} alt="art" style={styles.img} />
        <div style={styles.box}>
          <h3 style={styles.title}>Frases inspiradoras</h3>
          <div style={styles.content}>
            <p style={styles.p}>
              A simplicidade é o último grau de sofisticação
            </p>
            <span style={styles.span}>Leonardo da Vinci</span>
          </div>
          <div style={styles.footer}>
            <h4 style={styles.h4}>Continuar</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
