import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import "../Style/erreur.css"

const Erreur = () => {
  return (
    <div>
      <Navbar/>
      <div className='erreur'>
        <div className='erreur_infos'>
          <h1 className='erreur_infos_title'>404</h1>
          <p className='erreur_infos_content'>Oups! La Page que vous recherchez n'existe pas!</p>

        </div>
<Link className='erreur_infos_retunr' to='/'> Retournez à la pade d'Accueil</Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Erreur;