import Spreadsheet from "components/Spreadsheet";
import Search from "components/Search";
import SaveController from "components/SaveController";

function App() {
  return (
    <div className="container relative mt-12 max-w-5xl">
      <h1 className="text-3xl font-bold">Your Personal Staking Calculator</h1>
      <Search />
      <Spreadsheet />
      <SaveController />
    </div>
  );
}

export default App;
