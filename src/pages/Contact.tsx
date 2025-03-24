import { FaMailBulk, FaMapMarked } from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import Footer from "../modules/Footer/Footer";
import Header from "../modules/Header/Header";
import GiftCarts from "../components/GiftCarts";
import FullScreenWrapper from "../components/Wrapper";

interface GiftCartsProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  linkText?: string;
  linkHref?: string;
}

const Contact = () => {
  const giftData: GiftCartsProps[] = [
    {
      icon: <FaMapMarked />,
      title: "Address",
      text: "7th floor - Palace Building - 221B Walk of Fame -London - UK",
      linkText: "Open Map",
      linkHref: "#",
    },
    {
      icon: <SlEarphonesAlt />,
      title: "Phone Number",
      text: "+99899 999 99 99",
      linkText: "Call Now",
      linkHref: "tel:+998999999",
    },
    {
      icon: <FaMailBulk />,
      title: "Email",
      text: "aliboyevkamol@gmail.com",
      linkHref: "mailto:aliboyevkamol@gmail.com",
      linkText: "Send Message",
    },
  ];
  return (
    <div>
      <Header />
      <h1 className="text-center text-6xl m-10">Contact</h1>
      <FullScreenWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto p-4 m-4">
          {giftData.map((gift, index) => (
            <GiftCarts key={index} {...gift} />
          ))}
        </div>
      </FullScreenWrapper>
      <FullScreenWrapper>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95941.81089723216!2d69.19908519999998!3d41.28315220000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf3870c714d%3A0x6ddece20c220333b!2sMagic%20city!5e0!3m2!1suz!2s!4v1742803274106!5m2!1suz!2s"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </FullScreenWrapper>

      <Footer />
    </div>
  );
};

export default Contact;
