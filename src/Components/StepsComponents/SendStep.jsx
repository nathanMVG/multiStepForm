import "./SendStep.css";
import { emotions } from "./AvaliationStep";

const SendStep = ({ name, email, comment, avaliation }) => {
	const capitalizeString = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	};

	const emotion = emotions.find((emotion) => emotion.label === avaliation);
	const Icon = emotion.icon;

	return (
		<div className="sendStep">
			<h2>Falta Pouco</h2>
			<p>
				A sua opinião é muito importante. Confira suas respostas e envie para
				receber um cupom de 10% de desconto para a sua próxima compra.
			</p>
			<h3>{capitalizeString(name)}, aqui está o resumo da sua avaliação:</h3>
			<p>
				<span>Satisfação com o produto:</span> <Icon />
			</p>
			<p>
				<span>Comentário:</span> {comment}
			</p>
		</div>
	);
};

export default SendStep;
