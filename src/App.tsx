import Spreadsheet from "components/Spreadsheet";
import Search from "components/Search";

function App() {
  return (
    <div className="container mt-12 max-w-5xl">
      <h1 className="mb-6 text-3xl font-bold">Your Personal Staking Calculator</h1>
      <Search />
      <Spreadsheet />
    </div>
  );
}

export default App;
