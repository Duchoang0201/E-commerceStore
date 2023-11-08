import React, { useEffect, useRef, useState } from "react";
import { AlertTriangle, CheckCircle, Info, XOctagon } from "lucide-react";
import PropTypes from "prop-types";

import useMessage from "@/hooks/useMessage";

function ComponentRender({ data, index, item, handleCompleteAnimation }) {
  const { type, time, text } = data;
  const animationRef = useRef("translate-x-0");

  const [animation, setAnimation] = useState("translate-x-[600px]");
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation(item.anima1);
    }, 100); // Render after 2 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [item.anima1]);

  const beginRef = useRef();
  const timeRef = useRef();
  const deleteRef = useRef();
  const { newClick } = useMessage();

  useEffect(() => {
    // if (beginRef.current) {
    //   clearTimeout(beginRef.current);
    // }
    // beginRef.current = setTimeout(() => {
    //   setAnimation(item.anima1);
    //   animationRef.current = item.anima1;
    // }, 200 * index);

    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      setAnimation(item.anima2);
      animationRef.current = item.anima2;
    }, 3000 * index);

    return () => {
      if (deleteRef.current) {
        clearTimeout(deleteRef.current);
      }
      deleteRef.current = setTimeout(() => {
        // setListMess((oldItems) => {
        //   return oldItems?.filter((circle) => circle?.id !== item.id);
        // });
        handleCompleteAnimation(item.id);
      }, 3500 * index);
    };
  }, [
    handleCompleteAnimation,
    index,
    item.anima1,
    item.anima2,
    item.id,
    newClick,
    time,
  ]);

  return (
    <div
      //   className={`${
      //     open ? "translate-x-0" : "translate-x-[600px]"
      //   } fixed right-[50px] z-10 top-[50px] transform duration-10000000 transition-transform ease-out delay-${
      //     10 * 100 * 10000
      //   }`}

      className={`${
        animation === "!translate-x-0" ? animation : "translate-x-[600px]"
      }   fixed right-[50px] z-10 top-[50px] transform duration-1000 transition-transform ease-out `}
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
}

export default ComponentRender;

ComponentRender.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  item: PropTypes.instanceOf(Object).isRequired,
  handleCompleteAnimation: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.instanceOf(Object).isRequired,
};
