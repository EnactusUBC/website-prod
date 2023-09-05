const navigation = [
  {
    name: 'Email',
    href: 'mailto:youremail@example.com', // Replace with your actual email address
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
    href: '#',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
          clipRule='evenodd'
        />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
          clipRule='evenodd'
        />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: '#', // Update the href to your LinkedIn profile URL
    icon: (props) => (
<svg fill='currentColor' viewBox='0 0 24 24' {...props}>
  <path
    fillRule='evenodd'
    d='M19.685 2H4.315C3.027 2 2 3.027 2 4.315v15.37C2 20.973 3.027 22 4.315 22h15.37C20.973 22 22 20.973 22 19.685V4.315C22 3.027 20.973 2 19.685 2zM7.738 19.067H5.077V9.348h2.661v9.719zM6.407 8.159a1.477 1.477 0 110-2.954 1.477 1.477 0 010 2.954zm12.66 10.908h-2.663v-4.606c0-1.101-.02-2.513-1.537-2.513-1.538 0-1.774 1.2-1.774 2.441v4.678h-2.662V9.348h2.56v1.298h.038c.356-.674 1.228-1.385 2.524-1.385 2.7 0 3.194 1.775 3.194 4.085v4.808z'
    clipRule='evenodd'
  />
</svg>
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
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <div className='mt-8 md:order-1 md:mt-0'>
          <p className='text-center text-sm leading-5 text-white'>
            &copy; Enactus UBC
          </p>
        </div>
        <div className='mt-8 md:order-1 md:mt-0'>
          <h1 className='text-center text-2xl leading-5 text-white'>
            Get in Touch!
          </h1>

          <h2 className='text-center text-md leading-5 text-white mt-4'>
            For general contact, please email us -{'>'}
          </h2>
        </div>
      </div>
    </footer>
  );
}
