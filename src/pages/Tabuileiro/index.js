import React from 'react';
import Header from '../../components/Header';
import Jogador from "../../components/Jogador"
import Opcoes from '../../components/Opcoes';

import './styles.css';

function tabuileiro() {
	return (
		<div className="tabuleiro">
			<Header />

			<Opcoes />

			<div className="jogadores">
				<Jogador imagem="pessoa" label="Voce: " pontos={0} />
				<Jogador imagem="robo" label="Robo: " pontos={0} />
			</div>

		</div>
		)
}

export default tabuileiro;