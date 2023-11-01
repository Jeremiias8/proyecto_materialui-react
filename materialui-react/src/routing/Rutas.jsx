import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

// pages's components
import { Inicio } from '../components/pages/Inicio';

import { Nav } from '../components/layout/Nav';
import { Header } from '../components/layout/Header';
import { Cards } from '../components/layout/Cards';
import { Footer } from '../components/layout/Footer';

export const Rutas = () => {

    return (
        <BrowserRouter>
            {/* LAYOUT */}
            <Header />
            <hr />
            <Nav />
            <Cards />

            {/* Contenido central y rutas */}
            <section id="content" className='content'>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/inicio' element={<Inicio />} />

                    <Route path='*' element={
                        <div className='jumbo'>
                            <h1>Error 404</h1>
                        </div>
                    } />
                </Routes>
            </section>

            <Footer />

        </BrowserRouter>
    );

}
