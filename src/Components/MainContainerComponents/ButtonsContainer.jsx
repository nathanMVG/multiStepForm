import "./ButtonsContainer.css";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { LuSend } from "react-icons/lu";

const ButtonsContainer = ({
	stepsArray,
	currentStepIndex,
	setCurrentStepIndex,
	name,
	email,
	avaliation,
	comment,
	errorMessage,
	setErrorMessage,
	errorTrigger,
	setErrorTrigger,
}) => {
	const currentStepDisplayName = stepsArray[currentStepIndex].displayName;

	const isEmailValid = (email) => {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		return regex.test(email);
	};

	const isCommentValid = (text) => {
		const regex = /[a-zA-ZáéíóúÁÉÍÓÚãõâêîôûàèìòùç]/;
		return regex.test(text);
	};

	const nextBtnHandler = () => {
		if (currentStepDisplayName === "identification") {
			if (!name || !email) {
				setErrorMessage("Preencha todos os campos");
				setErrorTrigger((prev) => prev + 1);
				return;
			}
			if (!isEmailValid(email)) {
				setErrorMessage("E-mail inválido");
				setErrorTrigger((prev) => prev + 1);
				return;
			}
		}
		if (currentStepDisplayName === "avaliation") {
			if (!avaliation) {
				setErrorMessage("Escolha seu nível de satisfação com o produto");
				setErrorTrigger((prev) => prev + 1);
				return;
			}
			if (!isCommentValid(comment)) {
				setErrorMessage("Mesmo que curto, seu comentário é muito importante!");
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
