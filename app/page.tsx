"use client"
import React, { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function Home() {
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <>
      <Dashboard />
    </>
  );
}
