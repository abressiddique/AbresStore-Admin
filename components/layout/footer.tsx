import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start flex-wrap px-4">
        {/* Logo and About Section */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <Image src="/logo.png" alt="Logo" width={144} height={56} className="mb-4" />
          <p className="text-gray-300">
            Welcome to Abres India, your destination for trendy and stylish clothing. Quality and
            creativity in every design, serving you since 1984.
          </p>
        </div>

        {/* Contact Section */}
        <div className="w-full lg:w-1/3 flex flex-col items-start">
          <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-300">Phone: +91 1234567777</p>
          <p className="text-gray-300 mb-4">Email: abresstore@gmail.com</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://www.linkedin.com" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Abres India. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
