import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Box, FormControl, Input, View, WarningOutlineIcon } from "native-base";
import React from "react";

const InputComponent = () => {
  return (
    <Box alignItems="center">
      <FormControl isInvalid w="75%" maxW="300px">
        <FormControl.Label>Password</FormControl.Label>
        <Input placeholder="Enter password" color="white" />
        <FormControl.ErrorMessage
          leftIcon={
            <FontAwesome
              name="info-circle"
              size={25}
              color="white"
              style={{ marginRight: 15 }}
            />
          }
        >
          Try different from previous passwords.
        </FormControl.ErrorMessage>
      </FormControl>
    </Box>
  );
};

export default InputComponent;
