import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
  Divider,
  Icon,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../redux/Cart/actions";
import GetSinglePro from "../components/GetSinglePro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  const { loading } = useSelector((state) => state.loading);
  const [allProducts, setAllProducts] = useState([]);
  const { isOpen: showCoupons, onToggle: toggleCoupons } = useDisclosure();

  useEffect(() => {
    dispatch(getCartItems);
  }, [dispatch]);

  const subtotal = allProducts.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price;
  }, 0);

  const estimatedTotal = subtotal;

  return (
    <>
      <Navbar />
      <Box maxWidth="container.xl" margin="auto" p={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          My Bag
        </Text>

        <Flex flexDirection={{ base: "column", md: "row" }} gap={8}>
          <VStack flex={2} alignItems="stretch" spacing={4}>
            {loading ? (
              <Flex justifyContent="center" alignItems="center" minH="50vh">
                <Spinner size="xl" />
              </Flex>
            ) : cartData && cartData.length > 0 ? (
              cartData.map((elem, i) => (
                <GetSinglePro
                  key={i}
                  singleData={elem}
                  setAllProducts={setAllProducts}
                  allProducts={allProducts}
                />
              ))
            ) : (
              <Box mt={5}>
                <Divider mb={10} />
                <Text fontSize="18px" fontWeight={400} mb={3}>
                  Your shopping cart is empty. Please add at least one item to
                  your cart before checking out.
                </Text>
                <Button mb={4} colorScheme="black" variant="solid">
                  Continue Shopping
                </Button>
                <Divider mt={10} />
              </Box>
            )}
          </VStack>

          <Box flex={1}>
            <Box borderWidth={1} borderRadius="md" p={4}>
              <Button
                width="full"
                justifyContent="space-between"
                alignItems="center"
                onClick={toggleCoupons}
                variant="outline"
                mb={4}
              >
                <HStack>
                  <Text>Offers & Coupons</Text>
                </HStack>
                <Icon as={showCoupons ? ChevronDownIcon : ChevronRightIcon} />
              </Button>

              <VStack spacing={2} align="stretch">
                <Flex justifyContent="space-between">
                  <Text>Item(s) Total (Inclusive of taxes)</Text>
                  <Text>₹{subtotal.toFixed(2)}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                  <Text>Club Vellvette Savings</Text>
                  <HStack>
                    <Text>₹0</Text>
                  </HStack>
                </Flex>
                <Flex justifyContent="space-between">
                  <Text>Standard Shipping</Text>
                  <HStack>
                    <Text>₹99</Text>
                  </HStack>
                </Flex>

                <Divider />

                <Flex justifyContent="space-between" fontWeight="bold">
                  <Text>Order Total</Text>
                  <Text>₹ {estimatedTotal.toFixed(2)}</Text>
                </Flex>
                <Button color={"white"} bgColor={"black"} width="full">
                  PLACE ORDER
                </Button>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Footer />
    </>
  );
};

export default CartPage;
