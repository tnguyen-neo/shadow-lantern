"use client";

import { Switch } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import SunIcon from "../../../icons/SunIcon";
import MoonIcon from "../../../icons/MoonIcon";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const switchTheme = (value: boolean) => {
    value ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected
      size="lg"
      color="default"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onValueChange={(isSelected: boolean) => switchTheme(isSelected)}
    ></Switch>
  );
}
