import CurrentBot from "./Components/CurrentBot";
import RootDisplay from "./Components/MainTool/RootDisplay";

function App() {
    return(
        <div id="main">
            <div id="head">
                <h1 id="maded">Maded by KINGO</h1>
                <CurrentBot />
            </div>
            <RootDisplay />
        </div>
    )
}

export default App;
