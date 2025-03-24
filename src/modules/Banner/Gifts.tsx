import React from 'react';
import { FaGift, FaPhone } from 'react-icons/fa';
import GiftCarts from '../../components/GiftCarts';

interface GiftCartsProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  linkText?: string;
  linkHref?: string;
}

const giftData: GiftCartsProps[] = [
  {
    icon: <FaGift />,
    title: 'Special Gift',
    text: 'Get an exclusive offer just for you!',
    linkText: 'Claim Now',
    linkHref: '#',
  },
  {
    icon: <FaPhone />,
    title: 'Phone Number',
    text: '+99899 999 99 99',
  },
];

const Gifts = () => {
  return (
    <div className="flex flex-wrap max-w-6xl gap-4 items-center justify-center mx-auto p-4">
      {giftData.map((gift, index) => (
        <GiftCarts key={index} {...gift} />
      ))}
    </div>
  );
};

export default Gifts;
