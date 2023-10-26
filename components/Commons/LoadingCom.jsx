import React from "react";
import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function LoadingCom({ open, language }) {
  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button variant="outline">{language}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
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
