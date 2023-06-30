import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <label htmlFor="email" className="relative my-6 block">
      <FontAwesomeIcon icon={faSearch} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform opacity-30" />
      <input type="text" name="search" id="search" placeholder="Type a search query to filter" className="form-input rounded-lg w-full bg-input p-2 pl-10" />
    </label>
  );
}

export default Search;
