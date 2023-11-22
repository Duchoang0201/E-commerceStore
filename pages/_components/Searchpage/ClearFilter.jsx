import React from "react";
import { Trash } from "lucide-react";
import { useRouter } from "next/router";

function ClearFilter() {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center justify-center p-4 ">
        <button
          className="  flex flex-row justify-around text-white bg-Blue-600 text-white-0 hover:bg-Blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center  items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
          onClick={() => {
            const { pathname } = router;
            router.push({ pathname, query: {} });
          }}
        >
          <span>Delete Filter</span>
          <Trash />
        </button>
      </div>
    </div>
  );
}

export default ClearFilter;
