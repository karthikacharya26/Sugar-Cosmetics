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

  const estimatedTotal = subtotal + 99;

  const amount = estimatedTotal.toFixed(2);
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    const response = await fetch(
      "https://sugar-cosmetics.onrender.com/payment/order",
      {
        method: "POST",
        body: JSON.stringify({
          amount: amount * 100,
          currency: "INR",
          receipt: receiptId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const order = await response.json();

    var options = {
      key: "rzp_test_Yr4KP4ovfMr1Aw", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "SUGAR COSMETICS CLONE",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };
        const validateRes = await fetch(
          "https://sugar-cosmetics.onrender.com/payment/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const jsonRes = await validateRes.json();
      },
      prefill: {
        name: "John Doe",
        email: "Johndoe@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

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
                  <Text>
                    ₹{" "}
                    {cartData?.length > 0 ? estimatedTotal.toFixed(2) : "0.00"}
                  </Text>
                </Flex>
                <Button
                  color={"white"}
                  bgColor={"black"}
                  width="full"
                  onClick={paymentHandler}
                >
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
