import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Navbar/Header";
import NavMain from "./Navbar/NavMain";

const Navbar = () => {
  return (
    <Box>
      <Header />
      <NavMain/>
    </Box>
  );
};

export default Navbar;
