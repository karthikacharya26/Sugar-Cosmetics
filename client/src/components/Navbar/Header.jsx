import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box
      display={"flex"}
      h={"35px"}
      bgImage={
        "https://images.sugarcosmetics.com/Wtp/0ccd669b-57a7-4903-b68e-bb2d998dba00.jpg"
      }
      alignItems={"center"}
      w={"100%"}
    >
      {/* Top nav */}
      <Box display={"flex"} w={"100%"}>
        <Box display={"flex"} w={"100%"} justifyContent={"space-around"}>
          <Box>
            <Text color={"white"} fontWeight={"bold"}>
              New launch⚠️: Try our Drop A Tint Lip Oil at Rs.599
            </Text>
          </Box>
          <Box display={"flex"} gap={5}>
            <Text color={"white"} fontWeight={"bold"}>
              GET APP
            </Text>
            <Text color={"white"} fontWeight={"bold"}>
              STORE
            </Text>
            <Text color={"white"} fontWeight={"bold"}>
              GIFT CARD
            </Text>
            <Text color={"white"} fontWeight={"bold"}>
              HELP
            </Text>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default Header;
