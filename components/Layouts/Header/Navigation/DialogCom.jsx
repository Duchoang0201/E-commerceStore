import React from "react";
import { Heart, List, Search, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// import ModalDraw from "./ModalDraw";

export function DialogCom() {
  const listNavi = [
    { name: "Home", href: "home" },
    { name: "Contact", href: "contact" },
    { name: "About", href: "about" },
    { name: "Sign up", href: "signup" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <List color="gray" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white-0">
        <SheetHeader>
          <SheetTitle>Exclusive</SheetTitle>
          <SheetDescription>
            <div className="flex flex-row items-center gap-4 pr-3 w-full">
              <form>
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block p-3 text-sm text-gray-900 bg-gray-50 w-[243px]"
                    placeholder="Looking for..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-black absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg "
                  >
                    <Search />
                  </button>
                </div>
              </form>

              <Heart size={32} />
              <ShoppingCart size={32} />
            </div>
            <div>
              <ul className="flex flex-col w-full px-2 py-2 h-auto">
                {listNavi.map((item) => {
                  return (
                    <li key={`${item.name}`} className="w-auto py-2">
                      <a
                        href={item.href}
                        className=" block px-2 py-2 pl-3 pr-4 text-black rounded hover:bg-TEXT-1 hover:text-white-0   "
                        aria-current="page"
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </SheetDescription>
        </SheetHeader>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
