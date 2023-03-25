import React from "react";
import Loading from "@/src/components/loading";

function LoadingPage() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loading />
    </div>
  );
}

export default LoadingPage;
