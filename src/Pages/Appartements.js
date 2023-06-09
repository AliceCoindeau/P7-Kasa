import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import AppartementsHeader from '../Components/AppartementsHeader/AppartementsHeader';
import Footer from '../Components/Footer/Footer';
import Wrapper from '../Components/Wrapper/Wrapper';
import '../Style/appartements.css'
import Carrousel from '../Components/Carrousel/Carrousel';



const Appartements = () => {
	const location = useLocation();
	const[appart, setAppart] = useState(null);

	useEffect(appartementsData);

function appartementsData () {
    
fetch('logements.json')
.then((response) =>{
	return response.json()
	})
    .then((apparts) => {
		const appart = apparts.find((appart) => appart.id === location.appartemenId);
		setAppart(appart);
	})
    .catch(console.error);
    
    }
	if (appart == null) return <div>Chargement</div>
	return (
		<>
			<Navbar/>
			<div className='appartements-card'>
				<Carrousel pictures={appart.pictures}/>
				<AppartementsHeader appart={appart}/>
				<div className='wrapper-description-global'>
<Wrapper title ='Description' content={appart.description}/>
<Wrapper title ='Equipement' content ={appart.equipements}                      />

				</div>

			</div>
			
			<Footer/>
			
			
		</>
	);
};

export default Appartements;