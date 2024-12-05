import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  IconButton,
  Link,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box  color="white"  >
      {/* Subscription Section */}
      <Box bg="gray.100" color="black" py={8}>
        <VStack spacing={4} textAlign="center">
          <Text fontSize="xl" fontWeight="bold">
            LET'S STAY IN TOUCH
          </Text>
          <Text>Get the latest beauty tips straight to your inbox. Can't wait to connect!</Text>
          <Flex w="full" justify="center">
            <Input
              placeholder="Enter Email"
              maxW="400px"
              borderRadius="full"
              bg="white"
            />
            <Button bg="black" colorScheme="blackAlpha" borderRadius="full" ml={2}>
              SUBSCRIBE
            </Button>
          </Flex>
        </VStack>
      </Box>

      {/* Main Footer Content */}
      <VStack  spacing={8} bg="black">
        <Box>
          <Flex justify="center" align="center">
            <Text fontSize="2xl" fontWeight="bold" letterSpacing="widest">
              SUGAR
            </Text>
          </Flex>
          {/* Social Media Icons */}
          <Flex justify="center" mt={4} gap={4}>
            <IconButton
              as="a"
              href="#"
              icon={<FaFacebook />}
              bg="black"
              color="white"
              aria-label="Facebook"
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaTwitter />}
              bg="black"
              color="white"
              aria-label="Twitter"
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaInstagram />}
              bg="black"
              color="white"
              aria-label="Instagram"
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaYoutube />}
              bg="black"
              color="white"
              aria-label="YouTube"
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaEnvelope />}
              bg="black"
              color="white"
              aria-label="Email"
            />
            <IconButton
              as="a"
              href="#"
              icon={<FaPinterest />}
              bg="black"
              color="white"
              aria-label="Pinterest"
            />
          </Flex>
        </Box>

        {/* Footer Links */}
        <Flex
          justify="center"
          gap={12}
          wrap="wrap"
          textAlign="center"
          fontSize="sm"
          letterSpacing="wide"
        >
          <Link href="#">Stores</Link>
          <Link href="#">Elite</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Returns</Link>
          <Link href="#">FAQs</Link>
          <Link href="#">About Us</Link>
        </Flex>

        <Divider borderColor="gray.600" />

        {/* Contact Info */}
        <Flex
          justify="space-around"
          w="full"
          px={{ base: 4, md: 20 }}
          fontSize="sm"
          flexWrap="wrap"
          textAlign="center"
        >
          <VStack spacing={2} textAlign="left">
            <Text fontWeight="bold">GET IN TOUCH</Text>
            <Text>Call us at</Text>
            <Text fontWeight="bold">1800-209-9933</Text>
            <Text>Monday to Saturday: 09:00 AM - 07:00 PM</Text>
          </VStack>
          <VStack spacing={2} textAlign="left">
            <Text fontWeight="bold">Support</Text>
            <Text>hello@sugarcosmetics.com</Text>
          </VStack>
          <VStack spacing={2} textAlign="left">
            <Text fontWeight="bold">Careers</Text>
            <Text>We're hiring!</Text>
          </VStack>
          <VStack spacing={2} textAlign="left">
            <Text fontWeight="bold">Press & Media</Text>
            <Text>pr@sugarcosmetics.com</Text>
          </VStack>
          <VStack spacing={2} textAlign="left">
            <Text fontWeight="bold">Influencer Collab</Text>
            <Text>Join Us</Text>
          </VStack>
        </Flex>

        <Divider borderColor="gray.600" />

        {/* App Links */}
        <Flex
          justify="center"
          align="center"
          gap={4}
          mt={4}
          flexWrap="wrap"
          px={{ base: 4, md: 20 }}
        >
          <Text fontSize="sm" textAlign="center">
            GET THE NEW SUGAR APP TODAY!
          </Text>
          <Flex gap={4}>
            <Button
              as="a"
              href="#"
              bg="gray.800"
              color="white"
              _hover={{ bg: "gray.700" }}
              borderRadius="lg"
              p={4}
            >
              Get it on Google Play
            </Button>
            <Button
              as="a"
              href="#"
              bg="gray.800"
              color="white"
              _hover={{ bg: "gray.700" }}
              borderRadius="lg"
              p={4}
            >
              Download on the App Store
            </Button>
          </Flex>
        </Flex>
      </VStack>

      <Box  textAlign="center" fontSize="xs" color="gray.500" bg="black" py={4}>
        Copyright © 2024 SUGAR Cosmetics. All rights reserved. 
      </Box>
    </Box>
  );
};

export default Footer;
