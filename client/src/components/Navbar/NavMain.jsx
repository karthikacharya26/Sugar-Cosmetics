import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
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
import { useSelector } from "react-redux";

const NavMain = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const { isLogin } = useSelector((state) => state.loginState);
  const data = JSON.parse(localStorage.getItem("user"));

  const lips = [
    {
      name: "LIPSTICKS",
      items: [
        "TRANSFER PROOF LIPSTICK",
        "MATTE LIPSTICKS",
        "LIQUID LIPSTICKS",
        "CRAYON LIPSTICKS",
        "POWDER LIPSTICKS",
        "SATIN LIPSTICKS",
        "BULLET LIPSTICKS",
        "LIP GLOSS & LINERS",
      ],
    },
    {
      name: "LIPCARE",
      items: [
        "LIPSTICK FIXERS & REMOVERS",
        "LIP PRIMERS & SCRUBS",
        "LIP BALMS",
      ],
    },
    {
      name: "LIPSTICK SETS & COMBOS",
      items: ["LIPSTICK SETS", "LIPSTICK COMBOS"],
    },
  ];

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
          <Link to={"/"}>
            <Image
              src={
                "https://www.sugarcosmetics.com/cdn/shop/files/Sugal_white_logo_horizontal_orientation.png?v=1614336338&width=280"
              }
              w={"180px"}
            />
          </Link>
        </Box>

        {/* Search box */}
        <Box w={"40%"}>
          <InputGroup
            bg={"#212121"}
            borderRadius={"md"}
            border={" 1px solid #6c757d"}
            color={"white"}
          >
            <InputRightElement
              pointerEvents="none"
              bgColor={"white"}
              w={"100px"}
              color={"black"}
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
          {isLogin || data?.isAuth ? (
            <Button onClick={handleLogout} borderRadius={"3xl"}>
              Logout
            </Button>
          ) : (
            <Link to={"/signup"}>
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
          )}

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
              {[
                "SUGAR PLAY",
                "LIPS",
                "EYES",
                "FACE",
                "NAILS",
                "SKINCARE",
                "ACCESSORIES",
              ].map((item, idx) => (
                <Menu key={item}>
                  <MenuButton
                    as={Button}
                    variant="ghost"
                    colorScheme="white"
                    fontSize={"sm"}
                    _hover={{ bgColor: "#333333" }}
                  >
                    {item}
                  </MenuButton>
                  {item === "LIPS" ? (
                    <MenuList bg="white" color="black" display={"flex"}>
                      {lips.map((category) => (
                        <MenuGroup key={category.name} title={category.name}>
                          {category.items.map((subItem, subIdx) => (
                            <MenuItem key={subIdx} fontSize={"13px"}>
                              <Link to={"/products?category=lipsticks"}>
                                <li>{subItem}</li>
                              </Link>
                            </MenuItem>
                          ))}
                          <MenuDivider />
                        </MenuGroup>
                      ))}
                    </MenuList>
                  ) : (
                    <MenuList bg="white" color="black">
                      <MenuItem>Option 1</MenuItem>
                      <MenuItem>Option 2</MenuItem>
                      <MenuItem>Option 3</MenuItem>
                    </MenuList>
                  )}
                </Menu>
              ))}
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
                  fontSize={"sm"}
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
