import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit})=> {

	return(
			<div>
				<p  className= 'f3 white' >
					{'This Magic Star will detect faces in your pic..Lets give it try!'}
				</p>
				<div className='center'>
					<div className='form center pa4 shadow-5 br3'>
						<input className= 'f3 pa2 w-70 center' type='text' onChange= {onInputChange}/>
						<button className='w-30 grow f4 link bg-purple pv2 ph3 pointer '
						onClick = {onButtonSubmit}
						>Detect</button>
					</div>
				</div>
			</div>


		)
};

export default ImageLinkForm;