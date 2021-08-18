import React from 'react';

import papelImage from '../../assets/papel.png'
import pedraImage from '../../assets/pedra.png'
import tesouraImage from '../../assets/tesoura.png'

import './styles.css';

function Opcoes() {
	return (
		<div className="opcoes">
			<img src={papelImage} alt="papel"/>
			<img src={pedraImage} alt="pedra"/>
			<img src={tesouraImage} alt="tesoura"/>
		</div>
	);
}

export default Opcoes;