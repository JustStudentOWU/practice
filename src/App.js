import './App.css';
import {Characters} from "./characters/index";

function App() {
    return (
        <div>
            <Characters id={1}/>
            <Characters id={2}/>
        </div>
    );
}

export default App;
