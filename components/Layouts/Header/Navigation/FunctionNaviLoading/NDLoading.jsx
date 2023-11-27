"use client";

import React from "react";
import { List } from "lucide-react";

function NDLoading() {
  return (
    <div className={`relative flex items-center `}>
      <button title="openDraw" className="" onClick={() => {}} type="button">
        <List strokeWidth={2} size={32} color="black" />
      </button>
    </div>
  );
}

export default NDLoading;
