import React from "react";
import { List } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import ModalDraw from "./ModalDraw";

export function DialogCom() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <List color="gray" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ModalDraw />
      </SheetContent>
    </Sheet>
  );
}
