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
      url: "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/94d08ede-948d-475d-b9ea-af89e70a16c7.jpg&w=3840&q=75",
    },
    {
      url: "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/eb1730d5-c956-4760-89cc-f47ebb2fdeb9.jpg&w=3840&q=75",
    },
    {
      url: "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/7401b53f-61d2-4d20-b230-d52c0835a090.jpg&w=3840&q=75",
    },
  ];

  const cards2 = [
    {
      url: "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/35d38ac8-c1f7-4317-a29d-c86270c9998e.jpg&w=3840&q=75",
    },
    {
      url: "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/717e0853-03c4-4b97-8b54-1945ce8924fa.jpg&w=3840&q=75",
    },
    {
      url: "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/e0c69e17-7245-4ec8-ab0e-ce2e6b974369.jpg&w=3840&q=75",
    },
  ];

  const cards3 = [
    {
      url: "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/1e4f4408-9009-48b2-a6fd-0a7c1af3b858.jpg&w=3840&q=75",
    },
    {
      url: "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/480e52dc-727f-4b35-bd5f-4ece7974cee6.jpg&w=3840&q=75",
    },
    {
      url: "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/c3002fdc-a7d6-4565-86f1-ad0310d9cc7c.jpg&w=3840&q=75",
    },
  ];

  const products = [
    {
      id: 1,
      image:
        "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/SUGAR-Drop-A-Tint-Lip-Oil.jpg?v=1728574974&w=640&q=75",
      title: "SUGAR Drop A Tint Lip Oil with shades",
      shades: "6 shades",
      price: "₹599",
      bestseller: true,
      buttonLabel: "SELECT SHADE",
    },
    {
      id: 2,
      image:
        "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/Glide-Peptide-Serum-Lipstick.jpg?v=1729939439&w=640&q=75",
      title: "Glide Peptide Serum Lipstick",
      shades: "7 shades",
      price: "₹499",

      bestseller: false,
      buttonLabel: "SELECT SHADE",
    },
    {
      id: 3,
      image:
        "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/Partner-In-Shine-Transferproof-Lip-Gloss_ec7ab486-7c12-4ce0-8487-5d285d5d6c15.jpg?v=1723822866&w=640&q=75",
      title: "Partner in shine transferpoof lip gloss",
      shades: "15 shades",
      price: "₹699",

      bestseller: true,
      buttonLabel: "SELECT SHADE",
    },
    {
      id: 4,
      image:
        "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/SUGAR-Matte-Match-Transferproof-Foundation_c454bc14-2c7c-4885-93e4-edee1c6aa831.jpg?v=1723114098&w=640&q=75",
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
        "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/SUGAR-Play-Mega-Hype-Colour-Changing-Lip-Oil.jpg?v=1719899159&w=640&q=75",
      title: "SUGAR-Play-Mega-Hype-Colour-Changing-Lip-Oil",
      shades: "6 shades",
      price: "₹599",
      bestseller: true,
      buttonLabel: "SELECT SHADE",
    },
    {
      id: 2,
      image:
        "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/SUGAR-Play-Power-Drip-Lip-Gloss.jpg?v=1719893402&w=640&q=75",
      title: "SUGAR-Play-Power-Drip-Lip-Gloss",
      shades: "7 shades",
      price: "₹399",

      bestseller: true,
      buttonLabel: "SELECT SHADE",
    },
    {
      id: 3,
      image:
        "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/SUGAR-Play-Smooth-Operator-Lip-Crayon.jpg?v=1719899956&w=640&q=75",
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
