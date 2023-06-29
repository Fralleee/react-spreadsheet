import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="container max-w-5xl mt-12">
      <h1 className="text-3xl font-bold">Your Personal Staking Calculator</h1>
      <label htmlFor="email" className="relative block my-6">
        <FontAwesomeIcon icon={faSearch} className="pointer-events-none opacity-30 absolute top-1/2 transform -translate-y-1/2 left-3" />

        <input type="text" name="search" id="search" placeholder="Type a search query to filter" className="pl-10 form-input w-full bg-input p-2 rounded-large" />
      </label>

      <div className="flex justify-stretch bg-header p-2 my-6 text-center rounded font-medium">
        <div className="flex-1">A</div>
        <div className="flex-1">B</div>
        <div className="flex-1">C</div>
      </div>

      <div className="flex flex-col my-6 text-center rounded py-1 bg-cell">
        <div className="flex justify-stretch gap-x-1 text-center bg-cell-border">
          {Array(3)
            .fill(null)
            .map(_ => (
              <div className="flex-1 relative p-2 bg-cell">
                $1000
                <button>
                  <FontAwesomeIcon icon={faPen} className="absolute top-1/2 transform -translate-y-1/2 right-3" />
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
