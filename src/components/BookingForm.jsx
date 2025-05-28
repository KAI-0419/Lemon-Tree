import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
  Heading,
  useToast,
  Container,
  Flex,
  Spacer,
  Divider
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { bookingValidationSchema } from "../utils/validationSchema";

const initialValues = {
  name: "",
  email: "",
  date: "",
  time: "",
  guests: "",
};

const BookingForm = () => {
  const toast = useToast();

  const handleSubmit = (values, actions) => {
    toast({
      title: "Reservation Successful!",
      description: "Have a great time at Kai's Little Lemon Restaurant!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Container maxW="lg" py={8}>
      <Box borderWidth={1} borderRadius="2xl" p={8} boxShadow="lg" bg="white">
        <Heading as="h2" size="lg" mb={6} textAlign="center" color="teal.600">
          Little 🍋 Restaurant
        </Heading>

        <Formik
          initialValues={initialValues}
          validationSchema={bookingValidationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <VStack spacing={4} align="stretch">
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field as={Input} id="name" name="name" placeholder="Kai Lee" />
                  <ErrorMessage name="name" component={Text} color="red.500" fontSize="sm" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Field as={Input} id="email" name="email" type="email" placeholder="Kai0419@email.com" />
                  <ErrorMessage name="email" component={Text} color="red.500" fontSize="sm" />
                </FormControl>

                <Flex gap={4}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="date">Reservation Date</FormLabel>
                    <Field as={Input} id="date" name="date" type="date" />
                    <ErrorMessage name="date" component={Text} color="red.500" fontSize="sm" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel htmlFor="time">Time</FormLabel>
                    <Field as={Select} id="time" name="time" placeholder="Pick a time">
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                    </Field>
                    <ErrorMessage name="time" component={Text} color="red.500" fontSize="sm" />
                  </FormControl>
                </Flex>

                <FormControl isRequired>
                  <FormLabel htmlFor="guests">Numer</FormLabel>
                  <Field as={Input} id="guests" name="guests" type="number" min="1" max="10" placeholder="1 ~ 10" />
                  <ErrorMessage name="guests" component={Text} color="red.500" fontSize="sm" />
                </FormControl>

                <Divider my={4} />

                <Button
                  colorScheme="teal"
                  size="lg"
                  type="submit"
                  isLoading={formik.isSubmitting}
                  width="full"
                  borderRadius="full"
                >
                  Book Now!
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default BookingForm;