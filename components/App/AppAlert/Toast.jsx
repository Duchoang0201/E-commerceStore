import React, { useEffect, useRef, useState } from "react";
import { AlertTriangle, CheckCircle, Info, XOctagon } from "lucide-react";
import PropTypes from "prop-types";

import useMessage from "@/hooks/useMessage";

function Toast({ item }) {
  const { type, text, time } = item;
  const { reSetMessages, messages } = useMessage();
  const wrapperRef = useRef();
  // Time out
  const timeoutRef = useRef();

  useEffect(() => {
    if (time) {
      timeoutRef.current = setTimeout(() => {
        wrapperRef?.current?.classList.add("animate-toastOut");
      }, time);
    }
    const cleartimeB = setTimeout(() => {
      wrapperRef?.current?.addEventListener("animationend", () => {
        reSetMessages(messages.filter((toast) => toast.id !== item.id));
      });
    }, time);
    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(cleartimeB);
    };
  }, []);

  // Progress (CUSTOME, USE IT OR NOT , IT"S UP TO YOU)
  const progressRef = useRef();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const complete = 100;
    if (time) {
      progressRef.current = setInterval(() => {
        if (progress < complete) {
          setProgress((prev) => prev + 1);
        } else {
          /* empty */
        }
      }, time / complete);
    }

    return () => {
      clearInterval(progressRef.current);
    };
  }, []);

  return (
    <div
      // transform animate-in transition -translate-x-10
      ref={wrapperRef}
      role="alert"
      key={item.id}
      className={` 
      animate-toastIn
      relative
      ${type === "infor" && "bg-Blue-500"} ${
        type === "danger" && "bg-Red-500"
      } ${type === "success" && "bg-success-600"} ${
        type === "warning" && "bg-warning-500"
      } flex flex-col gap-2 items-start p-5 mb-2 text-[24px] shadow-2xl text-white-0 rounded-lg dark:bg-Neutral-500  
      `}
    >
      <div className="flex flex-row gap-2 items-center">
        {type === "infor" && <Info />}
        {type === "danger" && <XOctagon />}
        {type === "success" && <CheckCircle />}
        {type === "warning" && <AlertTriangle />}
        <span className="sr-only">Info</span>
        <span className="font-medium">Info alert! - </span> {text}
        <span
          style={{ width: `${progress}%` }}
          className={`absolute bg-yellow-600 w-full h-2 rounded-lg bottom-0 right-0
        
      `}
        />
        {/* <p
        className={`after:animate-width-down
        after:bg-stone-900  after:left-0 
      after:bottom-0  after:absolute after:h-1 after:w-full cursor-pointer
      
      `}
      >
        {item.label}
      </p> */}
      </div>

      <p className=" text-base font-bold text-white-0">
        Alert close after : {progress}
      </p>
    </div>
  );
}

export default React.memo(Toast);

Toast.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  // messages: PropTypes.instanceOf(Object).isRequired,
  // removeMessage: PropTypes.instanceOf(Function).isRequired,
};
