import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <ChakraProvider>
      <Box p={6}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", textAlign: "center", color: "#2C5282" }}>
          WKU 학생식당 예약 시스템
        </h1>
        <BookingForm />
      </Box>
    </ChakraProvider>
  );
}

export default App;