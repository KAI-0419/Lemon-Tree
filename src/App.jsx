import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <ChakraProvider>
      <Box p={6}>
        <BookingForm />
      </Box>
    </ChakraProvider>
  );
}

export default App;
