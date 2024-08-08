"use client";

import { useState } from "react";
import Image from "next/image";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import ThemeSwitcher from '@/components/ThemeSwitcher'

import logodark from "@/public/assets/logo-dark.svg";
import logolight from "@/public/assets/logo-light.svg";

export default function SideBar() {
  const [sidebarStatus,setSideBarStatus] = useState(true);
  const handleSideBar = () => {
    setSideBarStatus(!sidebarStatus);
  }

  return(
    <>
    {sidebarStatus? (
      <>
        <div className="grid content-between min-w-[260px] border-r dark:bg-[#2B2C37] dark:border-[#3E3F4E] py-6 pr-6 max-sm:hidden">
          <div className="p-6">
            <Image
              src={logolight}
              className="hidden dark:block"
              alt="nextjs image"
              width="auto"
              height="auto"
            />
            <Image
              src={logodark}
              className="block dark:hidden"
              alt="nextjs image"
              width="auto"
              height="auto"
            />
          </div>
          <div className="block">
            <Button className="p-6 rounded-r-full" color="primary" onClick={handleSideBar}>
              Hide SideBar
            </Button>
            <ThemeSwitcher />
          </div>
        </div>
        <div className="fixed left-0 bottom-20 hidden max-sm:block" color="primary">
          <Popover placement="right">
            <PopoverTrigger>
              <Button className="rounded-r-full"  color="primary">Show</Button>
            </PopoverTrigger>
            <PopoverContent>
              <ThemeSwitcher />
            </PopoverContent>
          </Popover>
        </div>
      </>
      ) : (
      <div className="fixed left-0 bottom-20">
        <Button className="p-6 rounded-r-full" color="primary" onClick={handleSideBar}>
          Show
        </Button>
      </div>
      )}
    </>
  )
}