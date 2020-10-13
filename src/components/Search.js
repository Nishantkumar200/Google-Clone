import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ ishiddenButton = false }) {
  const [{},dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log("Did you clicked !", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <>
      <form>
        <div className="search_input">
          <SearchIcon className="searchIcon" />
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <MicIcon className="searchIcon" />
        </div>

        {!ishiddenButton ? (
          <div className="Search_btn">
            <Button type="submit" onClick={search} variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        ) : (
          <div className="Search_btn">
            <Button
              type="submit"
              onClick={search}
              className="search_btnhide"
              variant="outlined">
              Google Search
            </Button>
            <Button className="search_btnhide" variant="outlined">
              I'm Feeling Lucky
            </Button>
          </div>
        )}
      </form>
    </>
  );
}

export default Search;
