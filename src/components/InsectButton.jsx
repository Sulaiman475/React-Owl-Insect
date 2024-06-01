import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useMyContext } from "../context/myState";

const InsectButton = ({ imgSrc, name }) => {
  const { addInsect } = useMyContext();

  return (
    <Button
      size="large"
      sx={{
        bgcolor: "secondary.main",
        borderRadius: "8px",
        "&:hover": {
          bgcolor: "white",
        },
      }}
      onClick={() => addInsect(name)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.1rem",
          px: "15px",
        }}
      >
        <img src={imgSrc} alt={name} className="button-image" />
        <Typography>{name}</Typography>
      </Box>
    </Button>
  );
};

export default InsectButton;
