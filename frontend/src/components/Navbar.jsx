"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";


export default function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn(" inset-x-0 mt-5 z-50" , className)}>
      <Menu setActive={setActive}>
        <Link href="/">
        
        <MenuItem setActive={setActive} active={active} item="Home">
          
        </MenuItem>
        </Link>
        <Link href="/about">
        <MenuItem setActive={setActive} active={active} item="About">
          
        </MenuItem>
        </Link>
        <Link href="/contact">
        <MenuItem setActive={setActive} active={active} item="Contact us">
          
        </MenuItem>
        </Link>
      </Menu>
    </div>)
  );
}
