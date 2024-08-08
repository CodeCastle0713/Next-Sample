"use client"

import { useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";

export default function ThemeSwitcher() {
  const [isSelected, setIsSelected] = useState(true);
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setIsSelected(!isSelected);
    if(theme == "dark")
      setTheme("light");
    else
      setTheme("dark");
  }
  return (
    <div className="flex flex-col gap-2 p-6">
      <Switch 
        color="secondary"
        size="sm"
        isSelected={isSelected} 
        onValueChange={handleTheme}>
          {isSelected?'Night':'Light'}
      </Switch>
    </div>
  )  
}
