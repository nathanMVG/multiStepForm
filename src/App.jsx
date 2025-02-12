import "./App.css";

import MainContainer from "./Components/MainContainerComponents/MainContainer";
import ErrorDisclaimer from "./Components/ErrorDisclaimer";

import { useState } from "react";
import { useEffect } from "react";

function App() {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [avaliation, setAvaliation] = useState("");
	const [comment, setComment] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [errorTrigger, setErrorTrigger] = useState(0);
	const [dynamicClass, setDynamicClass] = useState("errorInactive");

	useEffect(() => {
		if (errorMessage) {
			setDynamicClass("errorActive");
			setTimeout(() => {
				setDynamicClass("errorInactive");
			}, 2000);
		}
	}, [errorMessage, errorTrigger]);

	return (
		<>
			<header id="formHeader">
				<h1>Deixe sua avaliação</h1>
				<h2>
					Ficamos felizes com sua compra. Utilize o formulário abaixo para
					avaliar o produto
				</h2>
				<ErrorDisclaimer
					errorMessage={errorMessage}
					dynamicClass={dynamicClass}
				/>
			</header>
			<main>
				<MainContainer
					currentStepIndex={currentStepIndex}
					setCurrentStepIndex={setCurrentStepIndex}
					name={name}
					setName={setName}
					email={email}
					setEmail={setEmail}
					comment={comment}
					setComment={setComment}
					avaliation={avaliation}
					setAvaliation={setAvaliation}
					errorMessage={errorMessage}
					setErrorMessage={setErrorMessage}
					errorTrigger={errorTrigger}
					setErrorTrigger={setErrorTrigger}
				/>
			</main>
		</>
	);
}

export default App;
