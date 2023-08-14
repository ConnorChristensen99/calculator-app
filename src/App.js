import "./App.css";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);


// HANDLES THE CLICK OF EACH BUTTON
function handleClick(element) {
  setTotal(element)
  displayTotal()

  //HAVE TO CLICK THE BUTTONS TWICE TO HAVE THEM DISPLAY - THAT IS WHERE I AM AT CURRENTLY
}
// HANDLES THE DISPLAYING OF THE TOTAL
window.addEventListener('load', () => {
  displayTotal()
})
  function displayTotal() {
    let totalSpan = document.getElementById('totalSpan')

    totalSpan.innerText = total
  }
  





	return (
		<div className="App">
			<div className="calculator" id="calculator">
				<div className="screen" id="screen"><span id='totalSpan'></span>
				</div>
				<div className="buttons" id="buttons">
					<div className="div1 grey button" onClick={() => handleClick('clear')}>C</div>
					<div className="div2 grey button" onClick={() => handleClick('pos/neg')}>+/-</div>
					<div className="div3 grey button" onClick={() => handleClick('percent')}>%</div>
					<div className="div4 orange button" onClick={() => handleClick('divide')}>&divide;</div>
					<div className="div5 black button" onClick={() => handleClick(7)}>7</div>
					<div className="div6 black button" onClick={() => handleClick(8)}>8</div>
					<div className="div7 black button" onClick={() => handleClick(9)}>9</div>
					<div className="div8 orange button" onClick={() => handleClick('multiply')}>&times;</div>
					<div className="div9 black button" onClick={() => handleClick(4)}>4</div>
					<div className="div10 black button" onClick={() => handleClick(5)}>5</div>
					<div className="div11 black button" onClick={() => handleClick(6)}>6</div>
					<div className="div12 orange button" onClick={() => handleClick('subtract')}>-</div>
					<div className="div13 black button" onClick={() => handleClick(1)}>1</div>
					<div className="div14 black button" onClick={() => handleClick(2)}>2</div>
					<div className="div15 black button" onClick={() => handleClick(3)}>3</div>
					<div className="div16 orange button" onClick={() => handleClick('add')}>+</div>
					<div className="div17 btn0 black button" onClick={() => handleClick(0)}>0</div>
					<div className="div18 black button" onClick={() => handleClick('decimal')}>.</div>
					<div className="div19 orange button" onClick={() => handleClick('equal')}>=</div>
				</div>
			</div>
		</div>
	);
}

export default App;
