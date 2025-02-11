import "./AvaliationStep.css";

const AvaliationStep = ({ name, email }) => {
	return (
		<div className="avaliationStep">
			AvaliationStep
			<p>{name}</p>
			<p>{email}</p>
		</div>
	);
};

export default AvaliationStep;
