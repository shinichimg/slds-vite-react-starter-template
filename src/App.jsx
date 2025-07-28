import "./App.css";
import {ElementInspector} from "element-prompt-builder";

function App() {
  return (
    <div className="slds-scope">
      {import.meta.env.DEV && <ElementInspector />}
    </div>
  );
}

export default App;
