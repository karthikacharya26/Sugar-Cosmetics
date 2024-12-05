import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Badge,
  Icon,
  VStack,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Section2 = () => {
  const products = [
    {
      id: 1,
      image:
        "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/Ace-Of-Face-Foundation-Stick.jpg?v=1719836444&w=640&q=75",
      title: "Ace Of Face Foundation Stick",
      shades: "15 shades",
      price: "₹1099",
      rating: 4.8,
      reviews: 1482,
      bestseller: true,
      buttonLabel: "SELECT SHADE",
    },
    {
      id: 2,
      image:
        "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/SUGAR-Signature-Makeup-Kit.jpg?v=1719901641&w=640&q=75",
      title: "SUGAR Signature Makeup Kit",
      shades: "1 shade",
      price: "₹1399",
      oldPrice: "₹1807",
      rating: 4.5,
      reviews: 1200,
      bestseller: false,
      buttonLabel: "CHOOSE ITEMS",
    },
    {
      id: 3,
      image:
        "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/Matte-Attack-Transferproof-Lipstick.jpg?v=1719855043&w=640&q=75",
      title: "Matte Attack Transferproof Lipstick",
      shades: "14 shades",
      price: "₹749",
      rating: 4.8,
      reviews: 680,
      bestseller: true,
      buttonLabel: "SELECT SHADE",
    },
    {
      id: 4,
      image:
        "https://in.sugarcosmetics.com/_next/image?url=https://cdn.shopify.com/s/files/1/0906/2558/files/Ace-Of-Face-Foundation-Stick.jpg?v=1719836444&w=640&q=75",
      title: "Dream Cover SPF15 Mattifying Compact",
      shades: "4 shades",
      price: "₹549",
      rating: 4.7,
      reviews: 531,
      bestseller: false,
      buttonLabel: "SELECT SHADE",
    },
  ];

  //  Slider settings
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "60%", md: "60%" });
  const side = useBreakpointValue({ base: "2%", md: "4%" });

  // These are the images used in the slide
  const cards = [
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FHomepage%2F69869838-272b-4179-a7d0-ab1a33ba72c8.gif&w=3840&q=100",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FHomepage%2Fac325a3f-1cb6-44d6-9c4a-77acc7d0c141.gif&w=3840&q=100",
  ];

  return (
    <Box>
      {/* Bestsellers */}
      <Box
        p={8}
        mt={"80px"}
        backgroundImage="url('https://images.sugarcosmetics.com/Homepage/03206b6c-5cd8-4631-ba61-20a1d78c0888.jpg')"
        backgroundSize="cover"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
          BESTSELLERS
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
                  colorScheme="blue"
                  fontSize="xs"
                >
                  Bestseller
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
                <Flex align="center" gap={1}>
                  <Icon as={AiFillStar} color="yellow.400" />
                  <Text fontSize="sm">
                    {product.rating} ({product.reviews})
                  </Text>
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

      {/* Price Drop */}
      <Box h={"500px"} mt={"50px"}>
        <Text fontSize="2xl" fontWeight="bold" mb={5} textAlign="center">
          PRICE DROP
        </Text>
        <Box position="relative" width="100%" height="390px" p={8}>
          {/* Left Icon */}
          <IconButton
            icon={<ChevronLeftIcon />}
            bgColor={"black"}
            color={"white"}
            borderRadius="full"
            position="absolute"
            fontSize="30px"
            left={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          />

          {/* Right Icon */}
          <IconButton
            icon={<ChevronRightIcon />}
            bgColor={"black"}
            color={"white"}
            borderRadius="full"
            position="absolute"
            fontSize="30px"
            right={side}
            top={top}
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          />

          {/* Slider */}
          <Slider
            {...settings}
            ref={(slider) => setSlider(slider)}
            style={{ width: "100%", height: "100%" }}
          >
            {cards.map((url, index) => (
              <Box key={index} height="100%" overflow="hidden"
              borderRadius="2xl">
                <Link to="/products?category=clothing">
                  <img
                    src={url}
                    alt={`Slide ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      
    </Box>
  );
};

export default Section2;
