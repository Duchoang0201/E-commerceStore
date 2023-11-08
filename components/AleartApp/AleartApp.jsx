import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import useMessage from "@/hooks/useMessage";

import ComponentRender from "./ComponentRender";

function getUniqueID() {
  return Math.floor(Math.random() * Date.now()).toString();
}

function AleartApp({ data }) {
  const { newClick } = useMessage();
  const [open, setOpen] = useState(false);
  // const timeRef = useRef();
  const [listMess, setListMess] = useState([]);

  console.log(`🚀🚀🚀!..listMess`, listMess);
  const handleCompleteAnimation = useCallback((id) => {
    setListMess((oldItems) => {
      return oldItems?.filter((circle) => circle?.id !== id);
    });
  }, []);

  useEffect(() => {
    setOpen(true);
    const id = getUniqueID();

    setListMess([
      ...listMess,
      { anima1: "!translate-x-0", anima2: "translate-x-[600px]", id },
    ]);
    setOpen(true);
  }, [newClick]);

  // useEffect(() => {
  //   setListMess([
  //     ...listMess,
  //     { anima1: "translate-x-0", anima2: "translate-x-[600px]", new: newClick },
  //   ]);
  //   setOpen(true);
  //   if (timeRef.current) {
  //     clearTimeout(timeRef.current);
  //   }
  //   timeRef.current = setTimeout(() => {
  //     setOpen(false);
  //     setListMess([]);
  //   }, time);
  //   return () => {
  //     setOpen(false);
  //   };
  // }, [time, newClick]);
  return (
    <div>
      {/* {listMess.map((item, index) => {
        return (
          <div
            key={item}
            className={`${
              open ? "translate-x-0" : "translate-x-[600px]"
            } fixed right-[50px] z-10 top-[50px] transform duration-700 transition-transform ease-out delay-${
              index * 100
            }`}
          >
            <div
              className={`${type === "infor" && "bg-Blue-500"} ${
                type === "danger" && "bg-Red-500"
              } ${type === "success" && "bg-success-600"} ${
                type === "warning" && "bg-warning-500"
              } flex items-center p-4 mb-4 text-sm text-white-0 rounded-lg dark:bg-Neutral-500 transition-opacity duration-500`}
              role="alert"
            >
              {type === "infor" && <Info />}
              {type === "danger" && <XOctagon />}
              {type === "success" && <CheckCircle />}
              {type === "warning" && <AlertTriangle />}
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Info alert!</span> {text}
              </div>
            </div>
          </div>
        );
      })} */}

      {listMess.map((item, index) => {
        return (
          <ComponentRender
            listMess={listMess}
            index={index + 1}
            item={item}
            key={item.id}
            data={data}
            open={open}
            setOpen={setOpen}
            setListMess={setListMess}
            handleCompleteAnimation={handleCompleteAnimation}
          />
        );
      })}

      {/* <div
        className={`${
          open ? "translate-x-0" : "translate-x-[600px]"
        } fixed right-[50px] z-10 top-[50px] transform duration-700 transition-transform ease-out `}
      >
        <div
          className={`${type === "infor" && "bg-Blue-500"} ${
            type === "danger" && "bg-Red-500"
          } ${type === "success" && "bg-success-600"} ${
            type === "warning" && "bg-warning-500"
          } flex items-center p-4 mb-4 text-sm text-white-0 rounded-lg dark:bg-Neutral-500 transition-opacity duration-500`}
          role="alert"
        >
          {type === "infor" && <Info />}
          {type === "danger" && <XOctagon />}
          {type === "success" && <CheckCircle />}
          {type === "warning" && <AlertTriangle />}
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Info alert!</span> {text}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AleartApp;

AleartApp.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
