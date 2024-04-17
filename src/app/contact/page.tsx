{
  /* <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=unnamed%20road,%20Anand%20Vihar,%20-%20110092,%20Delhi,%20India%20Kaushambi,%20Ghaziabad+(unnamed%20road,%20Anand%20Vihar,%20-%20110092,%20Delhi,%20India)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.acadoo.de/'>Ghostwriter</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=adc6aaf0686813976b064188b9eca0e442b85538'></script> */
}

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Contact = () => {
  return (
    <main>
      <Header active="contact" />
      <div className="text-center pt-10">
        <h1 className="font-medium text-5xl">Contact Us</h1>
        <p className="opacity-70 text-[0.8em] sm:text-[1rem]">Let's Connect</p>
        <div className="flex justify-center bg-[#fff2df] px-12 py-12 mt-5">
          <div className="flex sm:flex-row flex-col flex-wrap justify-between gap-16 ">
            <div className="text-[#6F4119] flex flex-col justify-start text-left sm:w-[35%] w-[100%] gap-3">
              <img src="./location.svg" className="w-8" alt="" />
              <h2 className="font-bold text-xl">Address</h2>
              <p>
                1st Floor, H. No. 762 Saraswati Vihar, Chakkarpur, Gurugram,
                Haryana
              </p>
            </div>
            <div className="text-[#6F4119] flex flex-col justify-start text-left sm:w-[35%] w-[100%] gap-3">
              <img src="./call.svg" className="w-8" alt="" />
              <h2 className="font-bold text-xl">Phone</h2>
              <p>
                <a
                  className="underline underline-offset-4"
                  href="tel:+91 9971155921"
                >
                  +91 9971155921
                </a>
              </p>
            </div>
            <div className="text-[#6F4119] flex flex-col justify-start text-left sm:w-[35%] w-[100%] gap-3">
              <img src="./email.svg" className="w-8" alt="" />
              <h2 className="font-bold text-xl">Email</h2>
              <p>
                <a
                  className="underline underline-offset-4"
                  href="mailto:Consciously.yours111@gmail.com "
                >
                  Consciously.yours111@gmail.com{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d112074.87907002901!2d77.4144!3d28.6195712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1713339908021!5m2!1sen!2sin"
          width="800"
          height="600"
          loading="lazy"
        />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
