import Head from 'next/head';
import { Container } from 'react-bootstrap';
// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../features/Header/Header.jsx';
import Footer from '../features/Footer/Footer.jsx';
import MoviesMain from '../features/MoviesMain/MoviesMain.jsx';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <div className="min-vh-100 d-flex flex-column">
          <Header />
          <MoviesMain />
          <Footer />
        </div>
      </Container>
    </div>
  );
}

/* eslint-disable no-nested-ternary */

/*
  =============================================================

  This is the second option

  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      console.log(xhttp.responseText)
    }
  }

  xhttp.open('GET', 'http://localhost:4000/movies?limit=10', true)
  xhttp.send()

  =============================================================
*/
