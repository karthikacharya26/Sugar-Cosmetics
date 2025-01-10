import {
  AbsoluteCenter,
  Badge,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const Section3 = () => {
  const cards = [
    {
      url: "https://www.sugarcosmetics.com/cdn/shop/files/Mousse-Muse-Lip-Cream-Set-of-2.jpg?v=1736171881&width=500",
    },
    {
      url: "https://www.sugarcosmetics.com/cdn/shop/files/Matte-Attack-Transferproof-Lipstick-Seal-The-Show-Lip-Primer.jpg?v=1736171904&width=500",
    },
    {
      url: "https://www.sugarcosmetics.com/cdn/shop/files/SUGAR-POP-Satin-Matte-Lipstick-Set-of-3-Offer_e89d989e-fe99-45ef-8169-a2dc3154a366.jpg?v=1736178762&width=500",
    },
  ];

  const cards2 = [
    {
      url: "https://www.sugarcosmetics.com/cdn/shop/files/Iconic-Tile-2022-Air-Kiss_1.jpg?v=1734582210&width=600",
    },
    {
      url: "https://www.sugarcosmetics.com/cdn/shop/files/Iconic-Tile-2023-LaLaLove.jpg?v=1734582295&width=600",
    },
    {
      url: "https://www.sugarcosmetics.com/cdn/shop/files/Iconic-Tile-2024-MM_1.jpg?v=1734582271&width=600",
    },
  ];

  const cards3 = [
    {
      url: "https://www.sugarcosmetics.com/cdn/shop/files/Blog-banner.jpg?v=1734688186&width=1600",
    },
    {
      url: "https://www.sugarcosmetics.com/cdn/shop/files/image_30.png?v=1734589537&width=600",
    },
    {
      url: "https://www.sugarcosmetics.com/cdn/shop/files/image_31.png?v=1734589553&width=600",
    },
  ];

  const products = [
    {
      id: 1,
      image:
        "https://www.sugarcosmetics.com/cdn/shop/files/SUGAR-Drop-A-Tint-Lip-Oil-7.jpg?v=1736421561&width=1600",
      title: "SUGAR Drop A Tint Lip Oil with shades",
      shades: "6 shades",
      price: "₹599",
      bestseller: true,
      buttonLabel: "SELECT SHADE",
    },
    {
      id: 2,
      image:
        "https://www.sugarcosmetics.com/cdn/shop/files/Glide-Peptide-Serum-Lipstick-13.jpg?v=1736421591&width=1600",
      title: "Glide Peptide Serum Lipstick",
      shades: "7 shades",
      price: "₹499",

      bestseller: false,
      buttonLabel: "SELECT SHADE",
    },
    {
      id: 3,
      image:
        "https://www.sugarcosmetics.com/cdn/shop/files/Partner-In-Shine-Transferproof-Lip-Gloss-8_9b89652e-80b6-4bcc-9f5e-923eadda6428.jpg?v=1736171778&width=500",
      title: "Partner in shine transferpoof lip gloss",
      shades: "15 shades",
      price: "₹699",

      bestseller: true,
      buttonLabel: "SELECT SHADE",
    },
    {
      id: 4,
      image:
        "https://www.sugarcosmetics.com/cdn/shop/files/SUGAR-Matte-Match-Transferproof-Foundation-9.jpg?v=1736421511&width=1000",
      title: "Sugar Matte Match Transferproof Foundation",
      shades: "15 shades",
      price: "₹599",

      bestseller: false,
      buttonLabel: "SELECT SHADE",
    },
  ];

  const products2 = [
    {
      id: 1,
      image:
        "https://www.sugarcosmetics.com/cdn/shop/files/SUGAR-Play-Mega-Hype-Colour-Changing-Lip-Oil.jpg?v=1736171976&width=500",
      title: "SUGAR-Play-Mega-Hype-Colour-Changing-Lip-Oil",
      shades: "6 shades",
      price: "₹599",
      bestseller: true,
      buttonLabel: "SELECT SHADE",
    },
    {
      id: 2,
      image:
        "https://www.sugarcosmetics.com/cdn/shop/files/SUGAR-Play-Power-Drip-Lip-Gloss-2.jpg?v=1736421361&width=500",
      title: "SUGAR-Play-Power-Drip-Lip-Gloss",
      shades: "7 shades",
      price: "₹399",

      bestseller: true,
      buttonLabel: "SELECT SHADE",
    },
    {
      id: 3,
      image:
        "https://www.sugarcosmetics.com/cdn/shop/files/SUGAR-Play-Smooth-Operator-Lip-Crayon.jpg?v=1736171932&width=500",
      title: "SUGAR-Play-Smooth-Operator-Lip-Crayon",
      shades: "15 shades",
      price: "₹599",

      bestseller: true,
      buttonLabel: "SELECT SHADE",
    },
  ];
  return (
    <Box>
      {/* Exclusive kit series */}
      <Box>
        <Text fontSize="2xl" fontWeight="bold" mb={5} textAlign="center">
          EXCLUSIVE KIT SERIES
        </Text>
        <Flex justifyContent={"center"}>
          <SimpleGrid
            spacing={1} // Reduced spacing
            templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
            justifyItems="center" // Centering items horizontally
            alignItems="center" // Centering items vertically
          >
            {cards.map((ele, i) => (
              <Card
                key={i}
                _hover={{
                  cursor: "pointer",
                }}
                shadow={"none"}
              >
                <CardHeader>
                  <Image src={ele.url} borderRadius={"lg"} h={"290px"} />
                </CardHeader>
              </Card>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>

      {/* New Launch */}
      <Box
        p={8}
        mt={"80px"}
        backgroundImage="url('https://images.sugarcosmetics.com/Homepage/03206b6c-5cd8-4631-ba61-20a1d78c0888.jpg')"
        backgroundSize="cover"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
          NEW LAUNCH
        </Text>
        <Flex gap={6} wrap="wrap" justify="center">
          {products.map((product) => (
            <Box
              key={product.id}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              overflow="hidden"
              width="250px"
              p={4}
              position="relative"
            >
              {product.bestseller && (
                <Badge
                  position="absolute"
                  top={2}
                  left={2}
                  colorScheme="green"
                  fontSize="xs"
                >
                  New
                </Badge>
              )}
              <Image
                src={product.image}
                alt={product.title}
                borderRadius="md"
                mb={4}
              />
              <VStack align="flex-start" spacing={2} alignItems={"center"}>
                <Text fontWeight="bold">{product.title}</Text>
                {product.shades && (
                  <Text fontSize="sm" color="gray.500">
                    {product.shades}
                  </Text>
                )}
                <Flex align="center" gap={2}>
                  <Text fontWeight="bold">{product.price}</Text>
                  {product.oldPrice && (
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      textDecoration="line-through"
                    >
                      {product.oldPrice}
                    </Text>
                  )}
                </Flex>
              </VStack>
              <Flex
                justify="space-between"
                mt={4}
                align="center"
                justifyContent={"space-between"}
              >
                <Icon as={AiOutlineHeart} boxSize={6} cursor="pointer" />
                <Button
                  bgColor={"black"}
                  colorScheme="blackAlpha"
                  variant="solid"
                  size="sm"
                  w={"180px"}
                >
                  {product.buttonLabel}
                </Button>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Sugar icons in focus */}
      <Box mt={"80px"}>
        <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
          SUGAR ICONS IN-FOCUS
        </Text>
        <Flex justifyContent={"center"}>
          <SimpleGrid
            spacing={1} // Reduced spacing
            templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
            justifyItems="center" // Centering items horizontally
            alignItems="center" // Centering items vertically
          >
            {cards2.map((ele, i) => (
              <Card
                key={i}
                _hover={{
                  cursor: "pointer",
                }}
                shadow={"none"}
              >
                <CardHeader>
                  <Image src={ele.url} borderRadius={"lg"} h={"290px"} />
                </CardHeader>
              </Card>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>

      {/* Sugar play range */}
      <Box
        p={8}
        mt={"80px"}
        backgroundImage="url('https://images.sugarcosmetics.com/Homepage/03206b6c-5cd8-4631-ba61-20a1d78c0888.jpg')"
        backgroundSize="cover"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
          SUGAR PLAY RANGE
        </Text>
        <Flex gap={6} wrap="wrap" justify="center">
          {products2.map((product) => (
            <Box
              key={product.id}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              overflow="hidden"
              width="250px"
              p={4}
              position="relative"
            >
              {product.bestseller && (
                <Badge
                  position="absolute"
                  top={2}
                  left={2}
                  colorScheme="green"
                  fontSize="xs"
                >
                  New
                </Badge>
              )}
              <Image
                src={product.image}
                alt={product.title}
                borderRadius="md"
                mb={4}
              />
              <VStack align="flex-start" spacing={2} alignItems={"center"}>
                <Text fontWeight="bold">{product.title}</Text>
                {product.shades && (
                  <Text fontSize="sm" color="gray.500">
                    {product.shades}
                  </Text>
                )}
                <Flex align="center" gap={2}>
                  <Text fontWeight="bold">{product.price}</Text>
                  {product.oldPrice && (
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      textDecoration="line-through"
                    >
                      {product.oldPrice}
                    </Text>
                  )}
                </Flex>
              </VStack>
              <Flex
                justify="space-between"
                mt={4}
                align="center"
                justifyContent={"space-between"}
              >
                <Icon as={AiOutlineHeart} boxSize={6} cursor="pointer" />
                <Button
                  bgColor={"black"}
                  colorScheme="blackAlpha"
                  variant="solid"
                  size="sm"
                  w={"180px"}
                >
                  {product.buttonLabel}
                </Button>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Sugar beauty blog */}
      <Box mt={"80px"}>
        <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
          SUGAR BEAUTY BLOG
        </Text>
        <Flex justifyContent={"center"}>
          <SimpleGrid
            spacing={1} // Reduced spacing
            templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
            justifyItems="center" // Centering items horizontally
            alignItems="center" // Centering items vertically
          >
            {cards3.map((ele, i) => (
              <Card
                key={i}
                _hover={{
                  cursor: "pointer",
                }}
                shadow={"none"}
              >
                <CardHeader>
                  <Image src={ele.url} borderRadius={"lg"} h={"290px"} />
                </CardHeader>
              </Card>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>

      {/* Read more */}

      <Box mt={"80px"}>
        <Box position="relative" padding="10">
          <Divider />
        </Box>

        <Text
          display={"flex"}
          alignItems={"center"}
          gap={4}
          fontSize="lg"
          fontWeight="bold"
          mb={6}
          textAlign="left"
          ml={"40px"}
          cursor={"pointer"}
        >
          READ MORE ABOUT SUGAR COSMETICS
          <IoIosArrowForward color="magenta" size={"30px"} />
        </Text>
      </Box>
    </Box>
  );
};

export default Section3;
