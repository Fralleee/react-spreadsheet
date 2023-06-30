import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <label htmlFor="email" className="relative block my-6">
      <FontAwesomeIcon icon={faSearch} className="pointer-events-none opacity-30 absolute top-1/2 transform -translate-y-1/2 left-3" />
      <input type="text" name="search" id="search" placeholder="Type a search query to filter" className="pl-10 form-input w-full bg-input p-2 rounded-large" />
    </label>
  );
}

export default Search;
