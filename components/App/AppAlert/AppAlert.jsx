"use client";

import React, { useCallback, useEffect, useState } from "react";

import useMessage from "@/hooks/useMessage";

import Toast from "./Toast";

function AppAlert() {
  const { messages } = useMessage();

  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (messages.id && messages.type) {
      const newToast = {
        id: Date.now(),
        message: messages,
      };
      setToasts((prevToasts) => [...prevToasts, newToast]);
    }
  }, [messages, messages.length]);

  const closeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <div
      className="fixed right-[50px] z-10 top-[50px] flex flex-col 
    transform translate-y-10 transition-transform ease-in-out duration-300 "
    >
      {toasts.map((item, index) => {
        return (
          <Toast
            key={item.id}
            item={item}
            closeToast={closeToast}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default AppAlert;
