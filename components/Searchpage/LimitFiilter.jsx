import React, { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/router";

import OffsetFilter from "./OffsetFilter";

function LimitFilter() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const router = useRouter();
  const categoryIdRef = useRef();

  const arrLimit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];
  return (
    <div>
      <div className="flex items-center justify-center p-4 ">
        <button
          className="  relative text-white bg-Blue-600 text-white-0 hover:bg-Blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
          onClick={() => {
            setOpenDropdown(!openDropdown);
          }}
        >
          Filter by Limit
          {!openDropdown ? <ChevronDown /> : <ChevronUp />}
          <div
            className={`${
              openDropdown ? "" : "hidden"
            } z-10 w-56 p-3 bg-white-0 rounded-lg shadow dark:bg-gray-700 absolute top-10 `}
          >
            <h6 className="mb-3 text-sm font-medium text-gray-900 text-black-0 dark:text-white">
              Category
            </h6>
            <div className="flex flex-row w-full justify-between">
              <ul className="space-y-2 text-sm z-20">
                {arrLimit.map((item) => (
                  <li
                    key={`${item.id}/${item.id}`}
                    className="flex items-center"
                    value={item}
                  >
                    <label
                      htmlFor={item}
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100 flex flex-row gap-4"
                    >
                      <input
                        onChange={() => {
                          // Get the current query parameters
                          const { pathname, query } = router;

                          // Update the categoryId in the query
                          query.limit = item;
                          if (categoryIdRef.current) {
                            clearTimeout(categoryIdRef.current);
                          }

                          categoryIdRef.current = setTimeout(() => {
                            // Use router.push to update the URL with the new query parameters
                            router.push({ pathname, query });
                          }, 1000);
                        }}
                        id={item}
                        type="checkbox"
                        // eslint-disable-next-line eqeqeq
                        checked={router.query.limit == item}
                        value={item}
                        className=" w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <span className="text-black-0">{item} </span>
                    </label>
                  </li>
                ))}
              </ul>
              <OffsetFilter />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default LimitFilter;
