import { useDecision } from "@optimizely/react-sdk";
import React from "react";

export const Data = () => {
  const [decision] = useDecision("test1");
  // document.cookie = "username=John Doe";
  return <h1>{`${decision.enabled}`}</h1>;
};
