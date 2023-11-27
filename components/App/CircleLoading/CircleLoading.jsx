import React from "react";

function CircleLoading() {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-[10px] w-[10px] border-t border-white-0" />
    </div>
  );
}

export default CircleLoading;
