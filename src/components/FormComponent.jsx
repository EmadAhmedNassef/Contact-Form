"use client";

import {
  Box,
  Button,
  Center,
  Checkbox,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import RadioBtns from "./RadioBtns";

const schema = yup.object({
  firstName: yup.string().trim().required("This field is required"),
  lastName: yup.string().trim().required("This field is required"),
  email: yup
    .string()
    .trim()
    .required("This field is required")
    .email("Please enter a valid email address"),
  queryType: yup.string().required("Please select a query type"),
  message: yup.string().trim().required("This field is required"),
  consent: yup
    .boolean()
    .oneOf([true], "To submit this form, please consent to being contacted"),
});

export default function FormComponent() {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "General",
      message: "",
      consent: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setSubmitted(true);
  };

  return (
    <Center className="min-h-screen">
      <Box className="w-[80%] m-auto">
        {submitted && (
          <Box
            role="status"
            aria-live="polite"
            className="mb-4 rounded-md bg-[var(--fifth-color)] p-4 text-white"
          >
            <Text fw={700}>Message Sent!</Text>
            <Text size="sm">
              Thanks for completing the form. We&apos;ll be in touch soon!
            </Text>
          </Box>
        )}
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-lg bg-white rounded-md p-5"
        >
          <Text className="font-bold" size="xl">
            Contact Us
          </Text>
          <Box className="flex flex-col sm:flex-row sm:gap-3">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  ref={field.ref}
                  size="sm"
                  label="First Name"
                  withAsterisk
                  className="flex-1"
                  error={errors.firstName?.message}
                  aria-invalid={Boolean(errors.firstName)}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  ref={field.ref}
                  size="sm"
                  label="Last Name"
                  withAsterisk
                  className="flex-1"
                  error={errors.lastName?.message}
                  aria-invalid={Boolean(errors.lastName)}
                />
              )}
            />
          </Box>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                ref={field.ref}
                type="email"
                size="sm"
                label="Email"
                withAsterisk
                mb={10}
                error={errors.email?.message}
                aria-invalid={Boolean(errors.email)}
              />
            )}
          />
          <Controller
            name="queryType"
            control={control}
            render={({ field }) => (
              <RadioBtns
                value={field.value}
                onChange={field.onChange}
                error={errors.queryType?.message}
              />
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                ref={field.ref}
                size="sm"
                label="Message"
                withAsterisk
                rows={6}
                resize="vertical"
                mb={10}
                error={errors.message?.message}
                aria-invalid={Boolean(errors.message)}
              />
            )}
          />
          <Controller
            name="consent"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onChange={(event) => field.onChange(event.currentTarget.checked)}
                onBlur={field.onBlur}
                ref={field.ref}
                size="sm"
                label="I consent to being contacted by the team"
                color="hsl(169, 82%, 27%)"
                error={errors.consent?.message}
              />
            )}
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
