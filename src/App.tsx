import Table from "components/table/Table";
import Search from "Search";

function App() {
  return (
    <div className="container max-w-5xl mt-12">
      <h1 className="text-3xl font-bold">Your Personal Staking Calculator</h1>
      <Search />
      <Table />
    </div>
  );
}

export default App;
