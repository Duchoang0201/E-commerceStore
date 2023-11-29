import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

function Commons({ data }) {
  const { title, list, passHref } = data;
  return (
    <div className="h-full">
      <h2 className="mb-6 text-xl font-semibold  dark:text-white">{title}</h2>
      <ul className=" font-medium text-base ">
        {list?.map((item) => {
          return (
            <li key={item.name} className="mb-4">
              {item.passHref ? (
                <a href={item.href}>{item.name}</a>
              ) : (
                <Link
                  passHref={passHref && passHref}
                  href={`${
                    item.type === "email" || item.type === "phone"
                      ? item.href
                      : `/${item.href}`
                  }`}
                  className="hover:underline"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
Commons.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    passHref: PropTypes.bool,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
  }),
};

Commons.defaultProps = {
  data: {},
};
export default Commons;
