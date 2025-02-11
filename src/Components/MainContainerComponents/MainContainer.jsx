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
}) => {
	const stepsArray = [IdentificationStep, AvaliationStep, SendStep];

	const CurrentStep = stepsArray[currentStepIndex];

	return (
		<div id="mainContainer">
			<IconsContainer currentStepIndex={currentStepIndex} />

			<CurrentStep
				name={name}
				setName={setName}
				email={email}
				setEmail={setEmail}
			/>

			<ButtonsContainer
				stepsArray={stepsArray}
				currentStepIndex={currentStepIndex}
				setCurrentStepIndex={setCurrentStepIndex}
			/>
		</div>
	);
};

export default MainContainer;
