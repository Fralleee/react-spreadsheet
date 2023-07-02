import Spreadsheet from "components/Spreadsheet";
import Search from "components/Search";
import SaveButton from "components/spreadsheet/SaveButton";
import Statusbar from "components/Statusbar";
import { useEffect } from "react";
import { useDataStore } from "hooks/useDataStore";

function App() {
  const { isDirty } = useDataStore();

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes, are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  return (
    <div className="container relative mt-12 max-w-5xl">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Personal Staking Calculator</h1>
        <SaveButton />
      </div>
      <Search />
      <Spreadsheet />
      <Statusbar />
    </div>
  );
}

export default App;
