"use client";
import React from "react";

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  console.log("ClientComponent");
  return (
    <div>
      ClientComponent
      <p>{children}</p>
    </div>
  );
}
