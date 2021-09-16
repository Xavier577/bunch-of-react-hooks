import { useState } from "react";
import { FormFields } from "../types/interfaces";
import useDebounce from "./useDebounce";

const useSearchQuery = (
  queryUrl: string,
  searchQuery: string | number | readonly string[] | FormFields,
  dependency: any[]
) => {
  const [searchQueryData, setSearchQueryData] = useState<any>();
  const [fetchError, setFetchError] = useState();
  useDebounce(
    () => {
      if (searchQuery) {
        fetch(queryUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ searchQuery }),
        })
          .then((endpointResponse) => endpointResponse.json())
          .then((endpointData) => setSearchQueryData(endpointData))
          .catch((error) => setFetchError(error));
      }
    },
    1000,
    [...dependency]
  );

  return [searchQueryData, fetchError];
};

export default useSearchQuery;
