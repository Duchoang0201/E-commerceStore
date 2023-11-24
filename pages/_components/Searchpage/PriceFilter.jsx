import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/router";

function PriceFilter() {
  const { handleSubmit, control } = useForm();
  const [openDropdown, setOpenDropdown] = useState(false);
  const router = useRouter();
  const priceRef = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const onSubmit = (data) => {
    // Get the current query parameters
    const { pathname } = router;

    if (priceRef.current) {
      clearTimeout(priceRef.current);
    }

    priceRef.current = setTimeout(() => {
      // Use router.push to update the URL with the new query parameters
      router.push({
        pathname,
        query: {
          ...router.query,
          // Check if data.priceFrom and data.priceTo are defined before adding them to the query
          ...(data.priceFrom && { price_min: data.priceFrom }),
          ...(data.priceTo && { price_max: data.priceTo }),
        },
      });
    }, 1000);
  };

  return (
    <div
      ref={dropdownRef}
      className="flex items-center justify-center p-4 relative"
    >
      <button
        title="Price Filter"
        className="text-white-0 bg-Blue-600 hover:bg-Blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button"
        onClick={() => {
          setOpenDropdown(true);
        }}
      >
        Filter by Price
        {openDropdown ? <ChevronUp /> : <ChevronDown />}
      </button>

      {openDropdown && (
        <div className="z-10 w-56 p-3 bg-white-0 rounded-lg shadow dark:bg-gray-700 absolute top-14">
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </h6>
          <form
            className="max-w-[243px] w-full flex flex-col gap-2 py-[7px] pl-5 pr-3 rounded-sm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="priceFrom"
              control={control}
              render={({ field }) => (
                <input
                  required
                  defaultValue={router.query.title}
                  {...field}
                  className="text-[12px] bg-Secondary-0 w-[153px] h-10 outline-none"
                  placeholder="Price From"
                />
              )}
            />
            <Controller
              required
              name="priceTo"
              control={control}
              render={({ field }) => (
                <input
                  defaultValue={router.query.title}
                  {...field}
                  className="text-[12px] bg-Secondary-0 w-[153px] h-10 outline-none"
                  placeholder="Price To"
                />
              )}
            />
            <button
              title="Search"
              type="submit"
              className="bg-Secondary-2 text-white-0 w-1/2 rounded-sm"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PriceFilter;
