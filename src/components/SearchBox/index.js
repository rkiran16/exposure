import { useState } from "react";
import { Link } from "react-router-dom";

export const SearchBox = () => {
  const [searchText, setSearchText] = useState('');
  const changeHandler = (e) => {
    setSearchText(e.target.value);
  }

  return (
    <>
      <div className="input-group">
        <input type="text" className="form-control" onChange={changeHandler} value={searchText} placeholder="Search Photos..." aria-label="Search Books" aria-describedby="button-addon2" />
        <Link className={`btn btn-lg btn-warning rounded-0 ${searchText.length === 0 ? 'pe-none' : ''}`} to={`/search/${searchText}`} type="button" id="button-addon2">
          <i class="fa-solid fa-magnifying-glass me-3"></i>
          Search
        </Link>
      </div>
    </>
  )
}