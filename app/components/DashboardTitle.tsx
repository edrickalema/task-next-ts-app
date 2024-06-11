import React from "react";

const DashboardTitle = ({ main, sub }: { main: string; sub?: string }) => {
  return (
    <div className="mb-5">
      <h1 className="font-bold text-[2.5em]">{main}</h1>
      <p className="text-base text-muted-foreground">{sub}</p>
    </div>
  );
};

export default DashboardTitle;
