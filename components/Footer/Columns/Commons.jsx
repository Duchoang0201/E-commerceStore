import React from "react";

const Commons = ({ data }) => {
  const { title, list } = data;
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold  dark:text-white">{title}</h2>
      <ul className=" font-medium text-base">
        {list?.map((item, index) => {
          return (
            <li key={index} className="mb-4">
              <a href="#" className="hover:underline">
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Commons;
