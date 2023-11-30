import React, { memo, useEffect, useState } from "react";
import { AlertTriangle, CheckCircle, Info, XOctagon } from "lucide-react";
import PropTypes from "prop-types";

import useMessage from "@/hooks/useMessage";

function Toast({ item, index }) {
  const { type, text } = item;
  const { messages, reSetMessages } = useMessage();

  const [rendered, setRendered] = useState(true);
  const [closeToast, setCloseToast] = useState(false);
  useEffect(() => {
    const timeoutB = setTimeout(
      () => {
        setCloseToast(true);
        setRendered(false);
      },
      item.time * (index + 1) - 600,
    );
    const timeout = setTimeout(
      () => {
        reSetMessages(messages.filter((toast) => toast.id !== item.id));
      },
      item.time * (index + 1),
    );

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeoutB);
    };
  }, [index, item.id, item.time, messages, reSetMessages]);

  return (
    <div
      className={`transform animate-in transition  ${
        rendered && "-translate-x-10  duration-700"
      }
      ${index === 0 && closeToast && "opacity-0 duration-700"}
      ${type === "infor" && "bg-Blue-500"} ${
        type === "danger" && "bg-Red-500"
      } ${type === "success" && "bg-success-600"} ${
        type === "warning" && "bg-warning-500"
      } flex items-center p-4 mb-2 text-sm shadow-2xl text-white-0 rounded-lg dark:bg-Neutral-500  
      `}
      role="alert"
    >
      {type === "infor" && <Info />}
      {type === "danger" && <XOctagon />}
      {type === "success" && <CheckCircle />}
      {type === "warning" && <AlertTriangle />}
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">Info alert! - </span> {text}
      </div>
      <p
        className={`after:animate-width-down after:bg-stone-900  after:left-0 after:bottom-0  after:absolute after:h-1 after:w-full after:duration-[${
          item.time * (index + 1) + 600
        }ms] after:transition-all cursor-pointer`}
      >
        {item.label}
      </p>
    </div>
  );
}

export default memo(Toast);

Toast.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.instanceOf(Number).isRequired,
};
