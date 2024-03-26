import ContactForm from "@/components/contact/ContactForm";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Next Blog</title>
        <meta
          name="description"
          content="Send me your messages. I would love to hear from you!"
          key={"contact-page-meta"}
        />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
