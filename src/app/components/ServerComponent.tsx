import React from "react";

export default function ServerComponent({ children }: { children: React.ReactNode }) {
  console.log("ServerComponent");
  return (
    <div>
      ServerComponent
      <p>{children}</p>
    </div>
  );
}
