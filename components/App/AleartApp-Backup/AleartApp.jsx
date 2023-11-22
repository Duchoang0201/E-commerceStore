import React, { useCallback, useEffect, useState } from "react";

import useMessage from "@/hooks/useMessage";

import ComponentRender from "./ComponentRender";

function getUniqueID() {
  return Math.floor(Math.random() * Date.now()).toString();
}

function AleartApp() {
  const { newClick } = useMessage();
  const [open, setOpen] = useState(false);
  // const timeRef = useRef();
  const [listMess, setListMess] = useState([]);

  const handleCompleteAnimation = useCallback((id) => {
    setListMess((oldItems) => {
      return oldItems?.filter((circle) => circle?.id !== id);
    });
  }, []);

  useEffect(() => {
    setOpen(true);
    const id = getUniqueID();

    setListMess([
      ...listMess,
      { anima1: "!translate-x-0", anima2: "translate-x-[600px]", id },
    ]);
    setOpen(true);
  }, [newClick]);

  return (
    <div>
      {listMess.map((item, index) => {
        return (
          <ComponentRender
            listMess={listMess}
            index={index + 1}
            item={item}
            key={item.id}
            open={open}
            setOpen={setOpen}
            setListMess={setListMess}
            handleCompleteAnimation={handleCompleteAnimation}
          />
        );
      })}
    </div>
  );
}

export default AleartApp;
