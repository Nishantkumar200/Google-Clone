import React from "react";
import "./SearchPage.css";

//import Response from "../response";
import googleLogo from "../images/googl_logo.png";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "./Search";

import SearchIcon from "@material-ui/icons/Search";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
//import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term },dispatch] = useStateValue();

  // LIVE Google API Call
  const { data } = useGoogleSearch(term);

  // const data = Response;
  // console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img src={googleLogo} alt="logo" />
        </Link>

        <div className="search_bodyheader">
          <Search ishiddenButton />

          <div className="search_option">
            <div className="search_optionLeft">
              <Link to="/searchlogo">
                <SearchIcon />
                All
              </Link>
              <Link to="/searchlogo">
                <BookmarkBorderIcon />
                Books
              </Link>
              <Link to="/searchlogo">
                <FileCopyIcon />
                News
              </Link>
              <Link to="/searchlogo">
                <OndemandVideoIcon />
                Videos
              </Link>
              <Link to="/searchlogo">
                <MoreVertIcon />
                more
              </Link>
            </div>

            <div className="search_optionRight">
              <Link to="/setting">setting</Link>
              <Link to="/tools">Tools</Link>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage_results">
          <p className="searchPage_count">
            About {data?.searchInformation.formattedTotalResults} results in (
            {data?.searchInformation.formattedSearchTime} s) for <b>{term}</b>
          </p>
          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a href={item.link}>{item.link}</a>
              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
