import {
  Box,
  Button,
  Center,
  Checkbox,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import React from "react";
import RadioBtns from "./RadioBtns";

export default function FormComponent() {
  return (
    <Center className="min-h-screen">
      <Box className="w-[80%] m-auto">
        <form className="shadow-lg bg-white rounded-md p-5">
          <Text className="font-bold" size="xl">
            Contact Us
          </Text>
          <Box className="flex flex-col sm:flex-row sm:gap-3">
            <TextInput
              size="sm"
              label="First Name"
              withAsterisk
              className="flex-1"
            />
            <TextInput
              size="sm"
              label="Last Name"
              withAsterisk
              className="flex-1"
            />
          </Box>
          <TextInput
            type="email"
            size="sm"
            label="Email"
            withAsterisk
            mb={10}
          />
          <RadioBtns />
          <Textarea
            size="sm"
            label="Message"
            withAsterisk
            rows={6}
            resize="vertical"
            mb={10}
          />
          <Checkbox
            defaultChecked
            size="sm"
            label="I consent to being contacted by the team"
            color="hsl(169, 82%, 27%)"
          />
          <Button
            type="submit"
            variant="filled"
            color="hsl(169, 82%, 27%)"
            fullWidth
            className="mt-5"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  );
}
