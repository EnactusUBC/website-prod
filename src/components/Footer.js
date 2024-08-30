import Image from 'next/image';
import enactusLogo from '../images/enactusLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const navigation = [
  {
    name: 'Email',
    href: 'mailto:internal.enactusubc@gmail.com', // Replace with your actual email address
    icon: (props) => (
      <svg fill='currentColor' viewBox="0 0 8 6" {...props}>
        <path 
        d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"
        clipRule='evenodd'/>
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/enactusubc',
    icon: (props) => (
      <FontAwesomeIcon icon={faFacebook} {...props} />
    )
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/enactusubc/',
    icon: (props) => (
      <FontAwesomeIcon icon={faInstagram} {...props} />
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/enactus-ubc/',
    icon: (props) => (
      <FontAwesomeIcon icon={faLinkedin} {...props} />
    )
  },
];

export default function Footer() {
  return (
    <footer className='bg-[#29476D]'>
      <div className='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <div className='mt-8 md:order-1 md:mt-0'>
          <Image 
            src={enactusLogo} 
            alt='Enactus UBC Logo' 
            width={75}
            height={24}
            className='mx-auto' 
          />
        </div>
        <div className='mt-8 md:order-1 md:mt-0'>
          <h1 className='text-center text-2xl leading-5 text-white'>
            Get in Touch!
          </h1>

          <h2 className='text-center text-md leading-5 text-white mt-4'>
            Made with love by the tech team ❤️
          </h2>
        </div>
      </div>
    </footer>
  );
}
