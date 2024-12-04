import React, { useState } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Section1 = () => {
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
  const top = useBreakpointValue({ base: "70%", md: "70%" });
  const side = useBreakpointValue({ base: "2%", md: "2%" });

  // These are the images used in the slide
  const cards = [
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FHomepage%2F33e32bfe-c7e1-4a0e-b6d6-849dbaec0cad.gif&w=3840&q=100",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FHomepage%2F20124de6-ac81-463a-bed8-7f819f4a8a12.jpg&w=3840&q=100",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FHomepage%2F6bb6989b-584f-433c-ba92-c7470041d800.jpg&w=3840&q=100",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FHomepage%2Fe16cc158-a1b2-49c9-8253-48fcab0f0325.jpg&w=3840&q=100",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FHomepage%2F10aa787c-8ab3-4d9c-9180-cba493e18f1d.jpg&w=3840&q=100",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FHomepage%2F109be1ae-3451-4fc0-8f05-8ec6d654da07.jpg&w=3840&q=100"
  ];

  return (
    <Box position="relative" width="100%" height="300px">
      {/* Left Icon */}
      <IconButton
        icon={<ChevronLeftIcon />}
        bgColor={'black'}
        color={'white'}
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
        bgColor={'black'}
        color={'white'}
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
          <Box key={index} height="100%">
            <Link to="/products?category=clothing">
              <img
                src={url}
                alt={`Slide ${index}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Section1;
