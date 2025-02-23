import react from "react";
// Components
import AutocompleteSeachBar from "./components/AutocompleteSeachBar";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="font-medium text-3xl">Autocomplete Search Bar</h1>
      <AutocompleteSeachBar />
    </div>
  );
}

export default App;
