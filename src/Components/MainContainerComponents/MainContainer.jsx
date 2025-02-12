import "./MainContainer.css";

import IconsContainer from "./IconsContainer";
import ButtonsContainer from "./ButtonsContainer";
import IdentificationStep from "../StepsComponents/IdentificationStep";
import AvaliationStep from "../StepsComponents/AvaliationStep";
import SendStep from "../StepsComponents/SendStep";

const MainContainer = ({
	currentStepIndex,
	setCurrentStepIndex,
	name,
	setName,
	email,
	setEmail,
	comment,
	setComment,
	avaliation,
	setAvaliation,
	errorMessage,
	setErrorMessage,
	errorTrigger,
	setErrorTrigger,
}) => {
	const stepsArray = [IdentificationStep, AvaliationStep, SendStep];

	const CurrentStep = stepsArray[currentStepIndex];

	const stepProps = [
		{ name, setName, email, setEmail }, // Props para IdentificationStep
		{ comment, setComment, avaliation, setAvaliation }, // Props para AvaliationStep
		{ name, email, comment, avaliation }, // Props para SendStep
	];

	return (
		<div id="mainContainer">
			<IconsContainer currentStepIndex={currentStepIndex} />

			<CurrentStep {...stepProps[currentStepIndex]} />

			<ButtonsContainer
				stepsArray={stepsArray}
				currentStepIndex={currentStepIndex}
				setCurrentStepIndex={setCurrentStepIndex}
				name={name}
				email={email}
				errorMessage={errorMessage}
				setErrorMessage={setErrorMessage}
				errorTrigger={errorTrigger}
				setErrorTrigger={setErrorTrigger}
			/>
		</div>
	);
};

export default MainContainer;
