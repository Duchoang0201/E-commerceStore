import React, { useRef } from "react";
import { useRouter } from "next/router";

function OffsetFilter() {
  const router = useRouter();
  const categoryIdRef = useRef();

  const arryOffset = [0, 10, 20, 30];
  return (
    <div>
      <ul className="space-y-2 text-sm z-20">
        {arryOffset.map((item) => (
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
                  query.offset = item;
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
                checked={router.query.offset == item}
                value={item}
                className=" w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <span className="text-black-0">{item} </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OffsetFilter;
