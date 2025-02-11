import "./IdentificationStep.css";

const IdentificationStep = ({ name, setName, email, setEmail }) => {
	return (
		<div id="IdentificationStep">
			<form>
				<label htmlFor="nameInput">
					<span>Nome</span>
					<input
						id="nameInput"
						className="identificationInput"
						placeholder="Digite o seu nome"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
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
					/>
				</label>
			</form>
		</div>
	);
};

export default IdentificationStep;
