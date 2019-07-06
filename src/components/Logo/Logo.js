import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import icon from './icon.png';

const Logo = ()=> {

	return(
			<div className= 'ma4 mt0'>
				<Tilt className="Tilt br2 shadow-5" options={{ max : 70 }}
				 style={{ height: 88, width: 88 }} >
 					<div className="Tilt-inner pa3"> 
 						<img style = {{paddingTop:'5px'}} alt="icon" src= {icon}/>
 					</div>
				</Tilt> 
			</div>


		)
};

export default Logo;