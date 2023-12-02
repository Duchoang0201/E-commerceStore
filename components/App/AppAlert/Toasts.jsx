import React, { useEffect, useRef, useState } from "react";
import { AlertTriangle, CheckCircle, Info, XOctagon } from "lucide-react";
import PropTypes from "prop-types";

import { useToast } from "@/components/ToastContext/ToastProvider";

function Toasts({ id, time: duration, type, text }) {
  const wrapperRef = useRef(null);
  const { remove } = useToast();

  // auto dismiss
  const dismissRef = useRef();
  const [dismissPaused, setDismissPaused] = useState(false);

  useEffect(() => {
    if (duration && !dismissPaused) {
      dismissRef.current = setTimeout(() => {
        remove(id, wrapperRef);
      }, duration);
    }

    return () => {
      clearTimeout(dismissRef.current);
    };
  }, [dismissPaused, duration, id, remove]);

  // progressBar
  const progressBarRef = useRef();
  const [progress, setProgress] = useState(0);
  const [progressPaused, setProgressPaused] = useState(false);
  useEffect(() => {
    const complete = 100;

    if (duration && !progressPaused) {
      progressBarRef.current = setInterval(() => {
        if (progress < complete) {
          setProgress((prev) => prev + 1);
        } else {
          /* empty */
          remove(id, wrapperRef);
        }
      }, duration / complete);
    }

    return () => {
      clearInterval(progressBarRef.current);
    };
  }, [duration, id, progress, progressPaused, remove]);

  const handleMouseEnter = () => {
    wrapperRef.current.classList.add("fixed");
    clearInterval(progressBarRef.current);
    setProgressPaused(true);
    setDismissPaused(true);
  };

  const handleMouseLeave = () => {
    if (duration && progress < 100) {
      progressBarRef.current = setInterval(
        () => {
          if (progress < 100) {
            setProgress((prev) => prev + 1);
          } else {
            /* empty */
          }
        },
        duration / (100 - progress),
      );
    }
    setProgressPaused(false);
    setDismissPaused(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`animate-toastIn flex justify-between items-center overflow-hidden rounded-md shadow-lg my-3 relative text-white-0
      ${type === "infor" && "bg-Blue-500"} ${
        type === "danger" && "bg-Red-500"
      } ${type === "success" && "bg-success-600"} ${
        type === "warning" && "bg-warning-500"
      } 
      p-4
      `}
      ref={wrapperRef}
      role="alert"
    >
      {!!duration && (
        <div className="absolute bottom-0 right-0 left-0 w-full h-2 bg-red-900 dark:bg-neutral-500">
          <span
            className="absolute bg-neutral-200 left-0 top-0 bottom-0 h-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="flex p-3">
        <div className="inline-flex justify-center items-center  text-red-500">
          {type === "infor" && <Info size={60} />}
          {type === "danger" && <XOctagon size={60} />}
          {type === "success" && <CheckCircle size={60} />}
          {type === "warning" && <AlertTriangle size={60} />}
        </div>
      </div>

      <div className=" font-semibold  p-3 flex flex-col">
        <span className="capitalize text-[24px]">{type}</span>{" "}
        <span className="text-[20px]">{text}</span>
      </div>
      <button
        type="button"
        aria-label="Close"
        onClick={() => {
          remove(id, wrapperRef);
        }}
        className="w-4 h-4 mx-3 items-center justify-center
         text-gray-400 dark:text-gray-200
          hover:text-gray-900 rounded-md focus:ring-2
           focus:ring-gray-300 inline-flex dark:hover:text-white"
      >
        <span className="sr-only">Close</span>X
      </button>
    </div>
  );
}

export default React.memo(Toasts);

Toasts.propTypes = {
  type: PropTypes.instanceOf(Object).isRequired,
  text: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.instanceOf(Object).isRequired,
  time: PropTypes.instanceOf(Object).isRequired,
};
