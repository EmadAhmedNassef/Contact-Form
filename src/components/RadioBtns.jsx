"use client";
import { Box, Radio, RadioGroup } from "@mantine/core";
import React from "react";

export default function RadioBtns({ value, onChange, error }) {
  return (
    <RadioGroup
      label="Query Type"
      withAsterisk
      mb={10}
      value={value}
      onChange={onChange}
      error={error}
    >
      <Box className="flex flex-col sm:flex-row gap-3" mt="xs">
        <Radio
          value="General"
          label="General Enquiry"
          size="xs"
          className={`flex-1 border border-[var(--second-color)] p-3 rounded-md ${
            value === "General" ? "bg-[var(--first-color)]" : ""
          }`}
          color="hsl(169, 82%, 27%)"
        />
        <Radio
          value="Support"
          label="Support Request"
          size="xs"
          className={`flex-1 border border-[var(--second-color)] p-3 rounded-md ${
            value === "Support" ? "bg-[var(--first-color)]" : ""
          }`}
          color="hsl(169, 82%, 27%)"
        />
      </Box>
    </RadioGroup>
  );
}
