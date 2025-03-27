import { FaMailBulk, FaMapMarked } from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import Footer from "../modules/Footer/Footer";
import Header from "../modules/Header/Header";
import GiftCarts from "../components/GiftCarts";
import FullScreenWrapper from "../components/Wrapper";
import { FormEvent, useState } from "react";

interface GiftCartsProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  linkText?: string;
  linkHref?: string;
}

const Contact = () => {
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [text, setText] = useState<string>("");

    const handleSubmit = () => {
        const data = {
            phone,
            email,
            name,
            text
        }
    alert(JSON.stringify(data));
        setPhone("");
        setEmail("");
        setName("");
        setText("");
    };
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
    <FullScreenWrapper>
        <h1 className="text-center text-3xl mt-10">Contact us</h1>
    </FullScreenWrapper>
    <FullScreenWrapper>
    <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto p-6 bg-white rounded-xl">
        <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="name" className="font-medium text-gray-700">Name</label>
            <input 
                type="text" 
                id="name"
                onChange={(e) => setName(e.target.value)}
                aria-label="Name"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
        </div>
        <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="email" className="font-medium text-gray-700">Email</label>
            <input 
                type="email" 
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
        </div>
        <div className="flex flex-col space-y-2 w-full md:col-span-2">
            <label htmlFor="phone" className="font-medium text-gray-700">Phone</label>
            <input 
                type="tel" 
                id="phone" 
                onChange={(e) => setPhone(e.target.value)}
                aria-label="Phone"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
        </div>
        <div className="flex flex-col space-y-2 w-full md:col-span-2">
            <label htmlFor="text" className="font-medium text-gray-700">Message</label>
            <textarea  
                id="text" 
                rows={4}
                onChange={(e) => setText(e.target.value)}
                aria-label="Message"
                className="w-full p-3 resize-none border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
        </div>
        <button type="submit"
            className="w-full md:w-auto bg-blue-500 text-white font-medium rounded-lg p-3 transition-all hover:bg-blue-600 hover:shadow-lg md:col-span-2">
            Send Message
        </button>
    </form>
</FullScreenWrapper>


      <Footer />
    </div>
  );
};

export default Contact;
