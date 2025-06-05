"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { FormInputText } from "./FormInputText";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MWButton } from "../MWButton";

export const ContactForm = () => {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const { control, handleSubmit } = useForm<{
    name: string;
    email: string;
    phone: string;
    message: string;
    captchaValue: string | null;
  }>();

  const submitForm: SubmitHandler<{
    name: string;
    email: string;
    phone: string;
    captchaValue: string | null;
  }> = async (data) => {
    const dataWithCaptcha = { ...data, captchaValue };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataWithCaptcha),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const phoneFormat = (input: string) => {
    //returns (###) ###-####
    input = input.replace(/\D/g, "");
    const size = input.length;
    if (size > 0) input = "(" + input;
    if (size > 3) input = input.slice(0, 4) + ") " + input.slice(4, 11);
    if (size > 6) input = input.slice(0, 9) + "-" + input.slice(9);
    setPhone(input);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        paddingBottom: { xs: 5, md: 0 },
      }}
      onSubmit={handleSubmit(submitForm)}
    >
      {submitted ? (
        <Typography variant={"h5"} color="black">
          Thank you for your message! <br />
          We&apos;ll be in touch soon!
        </Typography>
      ) : (
        <>
          <FormInputText
            name="name"
            control={control}
            rules={{
              required: { value: true, message: "Name is required" },
              minLength: { value: 2, message: "Name is too short" },
              maxLength: { value: 25, message: "Name is too long" },
              pattern: {
                value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                message: "Invalid name",
              },
            }}
            autocomplete="fname"
            label="Your Name"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
            }}
          >
            <FormInputText
              name="email"
              control={control}
              rules={{
                required: { value: true, message: "Email address is required" },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              }}
              autocomplete="email"
              label="Email Address"
            />
            <FormInputText
              name="phone"
              control={control}
              autocomplete="tel"
              label="Phone Number"
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => phoneFormat(e.target.value)}
              value={phone}
            />
          </Box>
          <FormInputText
            name="message"
            control={control}
            rules={{
              required: { value: true, message: "Message is required" },
            }}
            multiline
            rows={4}
            label="Your message and project details"
          />
          {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
          )}
          {captchaValue === null && (
            <Typography color="black">Please complete the CAPTCHA</Typography>
          )}
          <MWButton
            text="Send"
            type="submit"
            styleProps={{ width: "40px" }}
            onclick={handleSubmit(submitForm)}
          />
        </>
      )}
    </Box>
  );
};
