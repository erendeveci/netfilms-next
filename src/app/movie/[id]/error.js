"use client";
import Link from "next/link";
import React from "react";

function Error() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1>An error has occured. Sory for that!</h1>
      <Link href="/" style={{ textDecoration: "underline" }}>
        Go Home!
      </Link>
    </div>
  );
}

export default Error;
