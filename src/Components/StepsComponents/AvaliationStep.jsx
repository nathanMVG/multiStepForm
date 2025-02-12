import "./AvaliationStep.css";
import {
	RiEmotionUnhappyFill,
	RiEmotionNormalFill,
	RiEmotionHappyFill,
	RiEmotionLaughFill,
} from "react-icons/ri";

export const emotions = [
	{
		icon: RiEmotionUnhappyFill,
		label: "Insatisfeito",
		classComponent: "insatisfeito",
	},
	{
		icon: RiEmotionNormalFill,
		label: "Poderia ser melhor",
		classComponent: "poderiaSerMelhor",
	},
	{
		icon: RiEmotionHappyFill,
		label: "Satisfeito",
		classComponent: "satisfeito",
	},
	{
		icon: RiEmotionLaughFill,
		label: "Muito Satisfeito",
		classComponent: "muitoSatisfeito",
	},
];

const AvaliationStep = ({ comment, setComment, avaliation, setAvaliation }) => {
	return (
		<div className="avaliationStep">
			<div id="emotionsContainer">
				{emotions.map((emotion) => {
					const condition = avaliation === emotion.label;
					const iconClass = condition ? "activeEmotion" : "";
					const spanClass = condition ? "activeLabel" : "";
					const classComponent = emotion.classComponent;
					return (
						<div key={classComponent} id={`${classComponent}IconAndLabel`}>
							<emotion.icon
								className={iconClass}
								onClick={() => setAvaliation(emotion.label)}
							/>
							<span className={spanClass}>{emotion.label}</span>
						</div>
					);
				})}
			</div>
			<p id="avaliationLabel">Comentário:</p>
			<textarea
				id="avaliationComment"
				placeholder="Conte como foi sua experiênica com o produto"
				onChange={(e) => setComment(e.target.value)}
				value={comment}
			></textarea>
		</div>
	);
};

export default AvaliationStep;
