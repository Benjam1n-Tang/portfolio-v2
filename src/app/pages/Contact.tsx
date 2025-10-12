"use client";
import ContactInput from "@/components/layout/ContactInput";
import { FormikHelpers, useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { messageSchema } from "@/lib/utils";
import { contacts } from "@/constants";
import Swal from "sweetalert2";
import { useState } from "react";
import * as yup from "yup";
import { OctagonAlert } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (
    formValues: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    try {
      await messageSchema.validate(formValues, { abortEarly: false });

      const formData = new FormData();
      formData.append("access_key", "52ffac90-031f-4c21-9a10-a21e61821a73");
      formData.append("name", formValues.name);
      formData.append("email", formValues.email);
      formData.append("message", formValues.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
          background: "#1a1b26",
          color: "#e6e7ed",
          confirmButtonColor: "#e6e7ed",
          customClass: {
            title: "swal-title",
            htmlContainer: "swal-text",
            confirmButton: "swal-button",
          },
          buttonsStyling: false,
        });
        actions.resetForm();
        setSubmitError(null);
      } else {
        throw new Error(data.message || "Something went wrong.");
      }
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        console.warn("Validation failed:", err.errors);
      } else {
        console.error("Submit error:", err);
      }

      setSubmitError("Make sure all fields are properly filled.");
      Swal.fire({
        title: "Error!",
        text: "Make sure all fields are properly filled. Messages should be at least 10 characters.",
        icon: "error",
        background: "#1a1b26",
        color: "#e6e7ed",
        confirmButtonColor: "#e6e7ed",
        customClass: {
          title: "swal-title",
          htmlContainer: "swal-text",
          confirmButton: "swal-button",
        },
        buttonsStyling: false,
      });
    }
  };

  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit,
  });

  const { values, handleChange, handleSubmit } = formik;

  return (
    <div
      id="contact"
      className="page flex flex-col justify-center items-center gap-18 lg:pb-0 pb-6 min-h-[100dvh]"
    >
      <div className="flex flex-col lg:gap-2 gap-4">
        <h3 className="page_header">Contact Me</h3>{" "}
        <h5 className="font-poppins tracking-wide text-base lg:text-xl text-center">
          If you would like to get in touch, please fill out the form below or
          connect with me through my social profiles.
        </h5>
      </div>
      <div className="flex lg:flex-row flex-col w-full justify-between xl:pl-16">
        <aside className="flex flex-col gap-8">
          <div>
            <h3 className="text-3xl font-inter-tight uppercase tracking-wide font-semibold">
              {" "}
              Send a Message
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col gap-16">
              <ContactInput
                name="name"
                label="Name"
                placeholder="Your name..."
                type="text"
                value={values.name}
                onClick={() => setSubmitError(null)}
                onChange={handleChange}
                className="text-base"
              />
              <ContactInput
                name="email"
                label="Email"
                placeholder="Your email..."
                value={values.email}
                onClick={() => setSubmitError(null)}
                onChange={handleChange}
                type="email"
              />
              <ContactInput
                name="message"
                label="Message"
                placeholder="Your message here..."
                variant="2"
                onClick={() => setSubmitError(null)}
                value={values.message}
                onChange={handleChange}
              />
            </div>
            <p className="h-16 flex items-center justify-center lg:justify-start text-error gap-4">
              {" "}
              <OctagonAlert
                size={20}
                className={`${submitError ? "flex" : "hidden"}`}
              />{" "}
              {submitError}
            </p>
            <div>
              <Button className="rounded-none w-full lg:w-auto" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </aside>
        <aside className="flex flex-col w-full lg:justify-center lg:items-center text-left gap-4 lg:h-142 pt-14 lg:pt-0 pb-4 lg:pb-0">
          <div className="flex flex-col gap-2 lg:pb-40">
            <h4 className="text-inter-tight font-semibold text-2xl tracking-tight uppercase text-left pb-2">
              Contacts
            </h4>
            <p className="text-sm text-left tracking-wide flex flex-row gap-2 items-center">
              {contacts.email}{" "}
            </p>
            <p className="text-sm text-left tracking-wide flex flex-row gap-2 items-center">
              {contacts.phone}{" "}
            </p>
            <p className="text-sm text-left tracking-wide flex flex-row gap-2 items-center">
              {contacts.location}{" "}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
