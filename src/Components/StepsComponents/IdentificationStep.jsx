import "./IdentificationStep.css";

const IdentificationStep = ({ name, setName, email, setEmail }) => {
	const nameRealTimeValidator = (e) => {
		const formattedName = e.target.value
			.replace(/[^a-zA-ZáéíóúÁÉÍÓÚãõâêîôûàèìòùç\s]/g, "") // Remove caracteres não alfabéticos e acentuados, exceto espaços
			.toLowerCase()
			.replace(/(?:^|\s)\S/g, (match) => match.toUpperCase()); // Converte a primeira letra de cada palavra para maiúscula
		setName(formattedName);
	};

	return (
		<div id="identificationStep">
			<form>
				<label htmlFor="nameInput">
					<span>Nome</span>
					<input
						id="nameInput"
						className="identificationInput"
						placeholder="Digite o seu nome"
						type="text"
						value={name}
						onChange={nameRealTimeValidator}
						maxLength={70}
					/>
				</label>
				<label htmlFor="emailInput">
					<span>E-mail</span>
					<input
						id="emailInput"
						className="identificationInput"
						placeholder="Digite o seu e-mail"
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						maxLength={70}
					/>
				</label>
			</form>
		</div>
	);
};

IdentificationStep.displayName = "identification";
export default IdentificationStep;
