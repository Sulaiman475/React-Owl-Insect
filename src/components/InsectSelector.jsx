// InsectSelector.js
import React from "react";
import { insectsData } from "../data/data";
import InsectButton from "./InsectButton";

const InsectSelector = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {insectsData.map((insect) => (
        <InsectButton
          key={insect.name}
          imgSrc={insect.imgSrc}
          name={insect.name}
        />
      ))}
    </Box>
  );
};

export default InsectSelector;
