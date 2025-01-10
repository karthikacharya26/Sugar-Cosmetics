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
    "https://www.sugarcosmetics.com/cdn/shop/files/400off-LP-1600x400_1.jpg?v=1735816502&width=1600",
    "https://www.sugarcosmetics.com/cdn/shop/files/Welcome-offer-10--Off-HP1920x453_2.jpg?v=1734939149&width=1800",
    "https://www.sugarcosmetics.com/cdn/shop/files/BTR-Eyeshadow-Palette-LP--1600x400_1.gif?v=1734581554&width=1600"
  ];

  return (
    <Box position="relative" width="100%" height="300px" >
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
            <Link to="/products?category=lipsticks">
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
