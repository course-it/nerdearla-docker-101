import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src="https://dwglogo.com/wp-content/uploads/2017/09/1300px-Docker_container_engine_logo.png"
                    className="App-logo"
                    alt="logo"
                />
                <p>Workshop: Docker</p>
                <p>
                    Organiza:{" "}
                    <a href="https://twitter.com/wwcodeba">Women Who Code</a>
                </p>
                <p>
                    Dictado por:{" "}
                    <a href="https://twitter.com/_JuanGallo">@_JuanGallo</a> y{" "}
                    <a href="https://twitter.com/DamianCatanzaro">
                        @DamianCatanzaro
                    </a>
                </p>
            </header>
        </div>
    );
}

export default App;
