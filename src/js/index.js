//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let userInput = prompt("Enter a number");

var counter = userInput;
var newCounter;
let stopLoop = true;

function increaseCounter() {
	counter--;
	newCounter = "000000" + counter;
	newCounter = newCounter.slice(-6);

	ReactDOM.render(
		<Home
			number1={newCounter.charAt(0)}
			number2={newCounter.charAt(1)}
			number3={newCounter.charAt(2)}
			number4={newCounter.charAt(3)}
			number5={newCounter.charAt(4)}
			number6={newCounter.charAt(5)}
		/>,
		document.querySelector("#app")
	);
	if (newCounter === "000000") {
		clearInterval(flag);
		console.log(flag);
	}
}

let flag = setInterval(increaseCounter, 1000);
