"use client";
import { MantineProvider } from "@mantine/core";
import React from "react";

export default function Providers({ children }) {
  return <MantineProvider>{children}</MantineProvider>;
}
