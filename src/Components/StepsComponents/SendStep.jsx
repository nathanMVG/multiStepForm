import "./SendStep.css";
import { emotions } from "./AvaliationStep";

const SendStep = ({ name, email, comment, avaliation }) => {
	const emotion = emotions.find((emotion) => emotion.label === avaliation);
	const Icon = emotion.icon;

	return (
		<div id="sendStep">
			<h2>Falta Pouco...</h2>
			<p>
				A sua opinião é muito importante. Confira suas respostas e envie para
				receber um cupom de 10% de desconto para a sua próxima compra.
			</p>
			<h3>{name}, aqui está o resumo da sua avaliação:</h3>
			<div id="dataReview">
				<div id="satisfactionReview">
					<span>Satisfação com o produto: </span> <Icon />
				</div>
				<div id="commentReview">
					<span>Comentário: </span>
					{comment}
				</div>
			</div>
		</div>
	);
};

SendStep.displayName = "send";
export default SendStep;
