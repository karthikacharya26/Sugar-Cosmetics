import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SlHandbag } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

import React from "react";
import { Link } from "react-router-dom";

const NavMain = () => {
  return (
    <Box>
      {/* Main nav */}
      <Box
        display={"flex"}
        bgColor={"black"}
        h={"75px"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        {/* Logo */}
        <Box>
          <Image
            src={
              "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FLogo%2F5d427f5b-4665-4b7f-9b17-5f089615db21.png&w=640&q=100"
            }
            w={"200px"}
          />
        </Box>

        {/* Search box */}
        <Box w={"40%"}>
          <InputGroup
            bg={"#212121"}
            borderRadius={"md"}
            border={" 1px solid #6c757d"}
          >
            <InputRightElement
              pointerEvents="none"
              bgColor={"white"}
              w={"100px"}
            >
              <SearchIcon />
              Search
            </InputRightElement>
            <Input
              pl="3.5rem"
              placeholder='Try "Liquid Lipstick"'
              border={"none"}
              _hover={{ border: "none" }}
            />
          </InputGroup>
        </Box>

        {/* Login and cart */}
        <Box display={"flex"} justifyContent={"space-between"} w={"300px"}>
          <Link>
            <Flex
              gap={1}
              alignItems={"center"}
              color={"white"}
              fontWeight={"bold"}
            >
              <RxAvatar size={"20px"} />
              Login/Register
            </Flex>
          </Link>

          <Box
            display={"flex"}
            h={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            ml={{ base: "0", md: "10px" }}
            mt={{ base: "10px", md: 0 }}
          >
            <IoMdHeartEmpty color="white" size={"25px"} />
            <Link to={"/cart"}>
              <SlHandbag color="white" size={"25px"} />
            </Link>
            <RiDiscountPercentLine color="white" size={"25px"} />
          </Box>
        </Box>
      </Box>

      {/* Dropdowns */}
      <Box bgColor={"#141414"} h={"50px"}>
        <Box color="white" px={4} py={2}>
          <Flex justify="center" align="center">

            {/* Menu Items */}
            <Flex gap={2} align="center">
              {["SUGAR PLAY","LIPS", "EYES", "FACE", "NAILS", "SKINCARE", "ACCESSORIES"].map(
                (item) => (
                  <Menu key={item}>
                    <MenuButton
                      as={Button}
                      variant="ghost"
                      colorScheme="white"
                      fontSize={'sm'}
                    >
                      {item}
                    </MenuButton>
                    <MenuList bg="white" color="black">
                      <MenuItem fontWeight="bold">{item}</MenuItem>
                      <MenuItem>Option 1</MenuItem>
                      <MenuItem>Option 2</MenuItem>
                      <MenuItem>Option 3</MenuItem>
                    </MenuList>
                  </Menu>
                )
              )}
              {/* Static Items */}
              {[
                "GIFTING",
                "BESTSELLERS",
                "NEW LAUNCHES",
                "OFFERS",
                "BLOG",
                "SUGAR POP",
              ].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  colorScheme="white"
                  fontSize={'sm'}

                >
                  {item}
                </Button>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default NavMain;
