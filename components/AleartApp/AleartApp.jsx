import React, { useEffect, useRef, useState } from "react";
import { AlertTriangle, CheckCircle, Info, XOctagon } from "lucide-react";
import PropTypes from "prop-types";

import useMessage from "@/hooks/useMessage";

function AleartApp({ data }) {
  const { type, time, text } = data;

  const { newClick } = useMessage();
  const [open, setOpen] = useState(false);
  const timeRef = useRef();

  useEffect(() => {
    setOpen(true);
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      setOpen(false);
    }, time);
  }, [time, newClick]);

  return (
    <div>
      <div
        className={`${open ? "" : "hidden"} fixed right-[50px] z-10 top-[50px]`}
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
    </div>
  );
}

export default AleartApp;

AleartApp.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
