import "./IconsContainer.css";
import { LuUserRound, LuStar, LuSend } from "react-icons/lu";

const IconsContainer = ({ currentStepIndex }) => {
	const steps = [
		{ icon: LuUserRound, label: "Identificação" },
		{ icon: LuStar, label: "Avaliação" },
		{ icon: LuSend, label: "Envio" },
	];

	const stringFormatter = (text) => {
		return text
			.toLowerCase()
			.replace(/c/g, "ç")
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "");
	};

	return (
		<div id="iconsContainer">
			{steps.map((step, index) => {
				const condition = index <= currentStepIndex;
				const iconClass = condition ? "activeIcon" : "";
				const spanClass = condition ? "activeSpan" : "";
				const formattedLabel = stringFormatter(step.label);

				return (
					<div key={steps.label} id={`${formattedLabel}IconContainer`}>
						<div id={`${formattedLabel}IconAndLabel`}>
							<step.icon className={iconClass} />
							<span className={spanClass}>{step.label}</span>
						</div>
						{index !== steps.length - 1 && <hr className="divisorLine" />}
					</div>
				);
			})}
		</div>
	);
};

export default IconsContainer;
