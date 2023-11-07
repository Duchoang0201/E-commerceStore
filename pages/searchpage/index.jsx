import React from "react";
import PropTypes from "prop-types";

import SearchPage from "@/components/Searchpage/SearchPage";

import useSearch from "@/hooks/useSearch";
import { axiosClient } from "@/libraries/axiosClient";

function SearchCom({ data }) {
  const { searchString } = useSearch();
  const newData = data.filter(
    (row) =>
      searchString === "" ||
      row.title.toLowerCase().includes(searchString.toLowerCase()),
  );
  return (
    <div className="my-[140px]">
      <SearchPage data={newData} />
    </div>
  );
}

export default SearchCom;

export async function getStaticProps() {
  // Carts

  const resCarts = await axiosClient.get("/products");
  const { data } = resCarts;

  return {
    props: {
      data,
    },
  };
}

SearchCom.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
