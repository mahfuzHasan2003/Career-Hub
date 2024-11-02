import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className='bg-gray-900 text-gray-200 py-16'>
         <div className='w-11/12 max-w-7xl mx-auto space-y-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-10'>
               <div className='space-y-4 md:col-span-2 lg:col-span-1'>
                  <h3 className='text-2xl font-bold'>CareerHub</h3>
                  <p>
                     There are many variations of passages of Lorem Ipsum , but
                     the majority have suffered alteration in some form.
                  </p>
                  <div className='flex gap-2'>
                     <a
                        href='https://www.facebook.com/callMeMahfuz'
                        target='_blank'>
                        <FaFacebook size={25} />
                     </a>
                     <a href='https://x.com/mahfuzHasan2003' target='_blank'>
                        <FaSquareXTwitter size={25} />
                     </a>
                     <a
                        href='https://www.instagram.com/mahfuzinsta69/'
                        target='_blank'>
                        <FaSquareInstagram size={25} />
                     </a>
                  </div>
               </div>
               <div className='space-y-2'>
                  <h6 className='text-lg font-bold'>Company</h6>
                  <ul className='space-y-2'>
                     <li>
                        <a href='#'>About Us</a>
                     </li>
                     <li>
                        <a href='#'>Work</a>
                     </li>
                     <li>
                        <a href='#'>Latest News</a>
                     </li>
                     <li>
                        <a href='#'>Careers</a>
                     </li>
                  </ul>
               </div>
               <div className='space-y-2'>
                  <h6 className='text-lg font-bold'>Product</h6>
                  <ul className='space-y-2'>
                     <li>
                        <a href='#'>Prototype Us</a>
                     </li>
                     <li>
                        <a href='#'>Plans & Pricing</a>
                     </li>
                     <li>
                        <a href='#'>Customers</a>
                     </li>
                     <li>
                        <a href='#'>Integrations</a>
                     </li>
                  </ul>
               </div>
               <div className='space-y-2'>
                  <h6 className='text-lg font-bold'>Support</h6>
                  <ul className='space-y-2'>
                     <li>
                        <a href='#'>Help Desk</a>
                     </li>
                     <li>
                        <a href='#'>Sales</a>
                     </li>
                     <li>
                        <a href='#'>Become a Partner</a>
                     </li>
                     <li>
                        <a href='#'>Developers</a>
                     </li>
                  </ul>
               </div>
               <div className='space-y-2'>
                  <h6 className='text-lg font-bold'>Contact</h6>
                  <ul className='space-y-2'>
                     <li>524 Broadway , NYC</li>
                     <li>+1 777 - 978 - 5570</li>
                  </ul>
               </div>
            </div>

            <hr className='border-t border-gray-500' />

            <div className='flex md:justify-between flex-col md:flex-row gap-4'>
               <p>
                  @2023 <span className='font-bold'>CareerHub</span>. All Rights
                  Reserved
               </p>
               <p>
                  Powered by <span className='font-bold'>CareerHub</span>
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
