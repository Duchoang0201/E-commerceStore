import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/router";

import { axiosClient } from "@/libraries/axiosClient";

function CategoriesFilter() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const categoryIdRef = useRef();
  useEffect(() => {
    const handleGetCategories = async () => {
      try {
        const { data } = await axiosClient.get("/categories");
        setCategories(data);
      } catch (error) {
        console.log(`🚀🚀🚀!..error`, error);
      }
    };
    handleGetCategories();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center p-4 ">
        <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          className="  relative text-white bg-Blue-600 text-white-0 hover:bg-Blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
          onClick={() => {
            setOpenDropdown(!openDropdown);
          }}
        >
          Filter by category
          {!openDropdown ? <ChevronDown /> : <ChevronUp />}
          <div
            id="dropdown"
            className={`${
              openDropdown ? "" : "hidden"
            } z-10 w-56 p-3 bg-white-0 rounded-lg shadow dark:bg-gray-700 absolute top-10 `}
          >
            <h6 className="mb-3 text-sm font-medium text-gray-900 text-black-0 dark:text-white">
              Category
            </h6>
            <ul
              className="space-y-2 text-sm z-20"
              aria-labelledby="dropdownDefault"
            >
              {categories.map((item) => (
                <li
                  key={`${item.id}/${item.id}`}
                  className="flex items-center"
                  value={item.id}
                >
                  <label
                    htmlFor={item.name}
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100 flex flex-row gap-4"
                  >
                    <input
                      onChange={() => {
                        // Get the current query parameters
                        const { pathname, query } = router;

                        // Update the categoryId in the query
                        query.categoryId = item.id;
                        if (categoryIdRef.current) {
                          clearTimeout(categoryIdRef.current);
                        }

                        categoryIdRef.current = setTimeout(() => {
                          // Use router.push to update the URL with the new query parameters
                          router.push({ pathname, query });
                        }, 1000);
                      }}
                      id={item.name}
                      type="checkbox"
                      // eslint-disable-next-line eqeqeq
                      checked={router.query.categoryId == item.id}
                      value={item.name}
                      className=" w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <span className="text-black-0">{item.name} (50)</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
}

export default CategoriesFilter;
