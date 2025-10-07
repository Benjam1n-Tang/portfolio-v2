import ContactInput from "@/components/layout/ContactInput";

const Contact = () => {
  return (
    <div id="contact" className="page flex flex-col items-center gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="page_header pt-16">Contact Me</h3>{" "}
        <h5 className="font-inter text-xl">
          If you would like to get in touch, please fill out the form below or
          connect with me through my social profiles.
        </h5>
      </div>
      <ContactInput label="Name" placeholder="Name" type="text" className="text-base" />
      <ContactInput label="Email" placeholder="Email" type="email" />
      <ContactInput
        label="Message"
        placeholder="Your message here..."
        variant="2"
      />
    </div>
  );
};

export default Contact;
