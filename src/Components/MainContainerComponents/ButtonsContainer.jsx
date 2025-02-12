import "./ButtonsContainer.css";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { LuSend } from "react-icons/lu";

const ButtonsContainer = ({
	stepsArray,
	currentStepIndex,
	setCurrentStepIndex,
	name,
	email,
	errorMessage,
	setErrorMessage,
	errorTrigger,
	setErrorTrigger,
}) => {
	const nextBtnHandler = () => {
		if (currentStepIndex === 0) {
			if (!name || !email) {
				setErrorMessage("Preencha todos os campos");
				setErrorTrigger((prev) => prev + 1);
				return;
			}
		}
		if (currentStepIndex !== stepsArray.length - 1) {
			setCurrentStepIndex((previous) => previous + 1);
		}
	};

	const previousBtnHandler = () => {
		if (currentStepIndex) {
			setCurrentStepIndex((previous) => previous - 1);
		}
	};

	const submitHandler = () => {
		console.log("sla");
	};

	return (
		<div id="buttonsContainer">
			{currentStepIndex > 0 && (
				<button onClick={previousBtnHandler}>
					<GrFormPrevious />
					Voltar
				</button>
			)}
			{currentStepIndex < stepsArray.length - 1 ? (
				<button onClick={nextBtnHandler}>
					Avançar <GrFormNext />
				</button>
			) : (
				<button onClick={submitHandler}>
					Enviar <LuSend />
				</button>
			)}
		</div>
	);
};

export default ButtonsContainer;
