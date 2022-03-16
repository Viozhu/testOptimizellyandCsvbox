import React from "react";
import { CSVBoxButton } from "@csvbox/react";

export const Uploadfiles = () => {
  const takeData = () => {
    fetch("", {
      "Access-Control-Allow-Origin": "*",
      mode: "no-cors",
    })
      .then((response) => response.json())
      .then((data) => console.log(data, "datas"))
      .catch(function (error) {
        console.log("Request failed", error);
      });
    return;
  };

  // function download(dataurl, filename) {
  //   const link = document.createElement("a");
  //   link.href = dataurl;
  //   link.download = filename;
  //   link.click();
  // }

  // download(
  //   "https://app.csvbox.io/download-rawfile/XcJR62t3bJE6l7yQ3XyVpFir0lXZn2XM68lrLJFJ",
  //   "helloWorld.txt"
  // );
  return (
    <>
      <CSVBoxButton
        licenseKey="P9CXu06Szrfdy4Kwth5B73dvSvCioF"
        user={{
          user_id: "default123",
        }}
        onImport={(result, data) => {
          if (result) {
            console.log("success");
            // takeData(data.raw_file);
          } else {
            console.log("fail");
            //custom code
          }
        }}
        render={(launch) => {
          return (
            <button data-csvbox onClick={launch}>
              Subir archivoses
            </button>
          );
        }}
      ></CSVBoxButton>
      <button onClick={takeData}>test</button>
    </>
  );
};
