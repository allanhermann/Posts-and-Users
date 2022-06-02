import { ReactNode } from "react";

type BodyProp = {
  children: ReactNode;
};
export const Body = ({ children }: BodyProp) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        overflowY: "scroll",
        height: "calc(100vh - 102px)",
        background: "#f2ec54",
      }}
    >
      {children}
    </div>
  );
};
