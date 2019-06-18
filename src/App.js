import React, { useState } from 'react';
import './App.css';

function App() {
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(6.99);

    function getLoanAmount(event) {
        console.log(event.target.value);
        setLoanAmount(event.target.value);
    }

    function getInterestRate(event) {
        console.log(event.target.value);
        setInterestRate(event.target.value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Estimat</h1>
                <div className="mb-1">
                    <label className="mb-1">Loan Amount</label>
                    <input
                        type="text"
                        value={loanAmount}
                        onChange={getLoanAmount}
                    />
                </div>
                <div className="mb-1">
                    <label className="mb-1">Interest Rate</label>
                    <input
                        type="text"
                        value={interestRate}
                        onChange={getInterestRate}
                    />
                </div>
                <div>
                    <h2>$0</h2>
                </div>
            </header>
        </div>
    );
}

export default App;
