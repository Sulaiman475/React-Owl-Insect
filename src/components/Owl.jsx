import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

import OwlImage from "../assets/owl.png";
import Lefteye from "../assets/eyeLeft.png";
import Righteye from "../assets/eyeRight.png";

import { useMyContext } from "../context/myState";
import Mouth from "./Mouth";

const Owl = () => {
  const { currentInsectPosition: insectPosition, moveEye } = useMyContext();

  const leftEyeRef = useRef();
  const rightEyeRef = useRef();

  useEffect(() => {
    if (insectPosition) {
      moveEye(leftEyeRef.current, insectPosition);
      moveEye(rightEyeRef.current, insectPosition);
    }
  }, [insectPosition, moveEye]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4rem",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <img src={OwlImage} className="main-image" alt="Owl face"/>
        <img src={Lefteye} ref={leftEyeRef} className="eye-image eye-left"  alt="owl left eye"/>
        <img src={Righteye} ref={rightEyeRef} className="eye-image eye-right"  alt="owl right eye"/>
        <Mouth />
      </Box>
    </Box>
  );
};

export default Owl;
