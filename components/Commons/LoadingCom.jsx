import React from "react";
import ReactLoading from "react-loading";
import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export function LoadingCom({ open, language }) {
  return (
    <Dialog open={open}>
      <DialogTrigger asChild className="w-full">
        <Button className="hover:bg-Neutral-400 items-center flex justify-start">
          {language}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-none">
        <DialogHeader>
          <DialogDescription className="flex justify-center">
            <ReactLoading type="bubbles" color="red" height={150} width={150} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

LoadingCom.propTypes = {
  open: PropTypes.instanceOf(Boolean),
  language: PropTypes.instanceOf(String),
};
LoadingCom.defaultProps = {
  open: false,
  language: "",
};
