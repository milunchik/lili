import { FaTelegram } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { SiViber } from 'react-icons/si';

export const menu = [{ name: 'About' }, { name: 'Contact' }];

export const socialHandles = [
  {
    name: 'Telegram',
    icon: <FaTelegram />,
    link: 'https://t.me/LiliiaPopovych',
  },
  {
    name: 'Viber',
    icon: <SiViber />,
    link: 'google.com',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/liliapopovych/',
  },
];
