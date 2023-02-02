import { useState } from "react";
import { Link } from "react-router-dom";

export const SearchBox = () => {
  const [searchText, setSearchText] = useState('');
  const changeHandler = (e) => {
    setSearchText(e.target.value);
  }

  return (
    <form className="position-absolute top-50 start-50 translate-middle w-75">
      <div className="input-group">
        <input type="text" className="form-control" onChange={changeHandler} value={searchText} placeholder="Search Photos..." aria-label="Search Books" aria-describedby="button-addon2" />
        <Link className={`btn btn-lg btn-danger ${searchText.length === 0 ? 'pe-none' : ''}`} to={`/search/${searchText}`} type="button" id="button-addon2">Search</Link>
      </div>
    </form>
  )
}