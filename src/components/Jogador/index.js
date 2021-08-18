import React from 'react';

import roboImage from '../../assets/robo.png'
import pessoaImage from '../../assets/pessoa.png'

import './styles.css';

const imagens = {
	pessoa: pessoaImage,
	robo: roboImage,
}

function Jogador({ pontos, imagem, label }) {
	return (
		<div className="jogador">
			{label}
			<p>{ pontos}</p>
			<img src={ imagens[imagem] } alt="" />
		</div>
	);
}

export default Jogador;