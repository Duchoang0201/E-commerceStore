import React, { useEffect, useState } from "react";
import { AlertTriangle, CheckCircle, Info, XOctagon } from "lucide-react";
import PropTypes from "prop-types";

function Toast({ item, closeToast }) {
  const { type, text } = item.message;
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);

    const timeout = setTimeout(() => {
      closeToast(item.id);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [closeToast, item.id]);

  return (
    <div
      className={`transform animate-in transition duration-500  ${
        rendered ? "-translate-x-10" : "-translate-y-2 "
      }
      ${type === "infor" && "bg-Blue-500"} ${
        type === "danger" && "bg-Red-500"
      } ${type === "success" && "bg-success-600"} ${
        type === "warning" && "bg-warning-500"
      } flex items-center p-4 mb-4 text-sm shadow-2xl text-white-0 rounded-lg dark:bg-Neutral-500  
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
    </div>
  );
}

export default Toast;

Toast.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  //   index: PropTypes.instanceOf(Number).isRequired,
  closeToast: PropTypes.func.isRequired,
};
