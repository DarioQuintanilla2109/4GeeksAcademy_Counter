import React from "react";
import PropTypes from "prop-types";

//include images into your bundle

//create your first component
export function Home(props) {
	return (
		<div id="counter" className="d-flex justify-content-center">
			<div>
				<i className="far fa-clock" />
			</div>
			<div>{props.number1}</div>
			<div>{props.number2}</div>
			<div>{props.number3}</div>
			<div>{props.number4}</div>
			<div>{props.number5}</div>
			<div>{props.number6}</div>
		</div>
	);
}
Home.propTypes = {
	number1: PropTypes.string,
	number2: PropTypes.string,
	number3: PropTypes.string,
	number4: PropTypes.string,
	number5: PropTypes.string,
	number6: PropTypes.string
};
