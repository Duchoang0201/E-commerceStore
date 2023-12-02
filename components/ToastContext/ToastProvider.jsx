import React, { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

import Toasts from "../App/AppAlert/Toasts";
import MoveTop from "../App/AppMoveTop/MoveTop";
import PhotoPreview from "../App/AppPhotoView/PhotoPreview";
import Footer from "../Layouts/Footer/Footer";
import Header from "../Layouts/Header/Header";

const ToastContext = createContext({
  add: () => {},
  remove: () => {},
});
export const useToast = () => useContext(ToastContext);

function ToastProvider({ Component, pageProps }) {
  const [toasts, setToasts] = useState([]);

  const add = (toast) => {
    // add it to the list
    setToasts((prev) => [...prev, { ...toast, id: Math.random() * 10000 }]);
  };
  const remove = (toastId, ref) => {
    ref?.current?.classList.add("animate-toastOut");

    // remove element after animation is done
    ref?.current?.addEventListener("animationend", () => {
      // lets remove it
      setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
    });
  };
  const value = useMemo(() => {
    return {
      add,
      remove,
    };
  }, []);
  return (
    <div className="">
      <ToastContext.Provider value={value}>
        <Header />
        <Component {...pageProps} />
        <div className="bg-black-0">
          <Footer />
        </div>
        <MoveTop />
        {/* <AppAlert messages={messages} /> */}
        <PhotoPreview />
        {/* Toast List  */}
        <div className="fixed  right-[50px] z-10 top-[50px]">
          {toasts.map((toast) => (
            <Toasts key={toast.id} {...toast} />
          ))}
        </div>
      </ToastContext.Provider>
    </div>
  );
}

export default ToastProvider;
ToastProvider.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
