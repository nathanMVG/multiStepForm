import "./App.css";

import MainContainer from "./Components/MainContainerComponents/MainContainer";

import { useState } from "react";

function App() {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [avaliation, setAvaliation] = useState("");
	const [comment, setComment] = useState("");

	return (
		<>
			<header id="formHeader">
				<h1>Deixe sua avaliação</h1>
				<h2>
					Ficamos felizes com sua compra. Utilize o formulário abaixo para
					avaliar o produto
				</h2>
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
				/>
			</main>
		</>
	);
}

export default App;
