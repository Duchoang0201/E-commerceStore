import React from "react";
import PropTypes from "prop-types";

import FilterComponent from "@/pages/_components/Searchpage/FilterComponent";
import SearchPage from "@/pages/_components/Searchpage/SearchPage";

import { axiosClient } from "@/libraries/axiosClient";

function SearchCom({ data }) {
  return (
    <div>
      <FilterComponent />
      <div className="my-[140px]">
        <SearchPage data={data} />
      </div>
    </div>
  );
}

export default SearchCom;

export async function getServerSideProps(context) {
  // Extract all query parameters from the context
  const queryParams = context.query;
  // Construct the URL with dynamic parameters
  const url = `/products/?${Object.entries(queryParams)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&")}`;
  // Make the API request
  const resCarts = await axiosClient.get(url);
  const { data: configOne } = resCarts;
  const data = configOne.filter((item) => item.images[0].includes("https"));

  return {
    props: {
      data,
    },
  };
}

SearchCom.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
