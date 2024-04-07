import Button from "@/app/components/Button";
import Footer from "@/app/components/Footer";
import Kontakt from "@/app/components/Kontakt";
import LottieAnimation from "@/app/components/LottieAnimation";
import Navbar from "@/app/components/Navbar";
import React from "react";
import Image from "next/image";
import UnderFooter from "@/app/components/Underfooter";

export default function Latest() {
  return (
    <>
      <Navbar />
      <div className="bg-secondary text-background flex flex-col items-center py-20 gap-10">
        <div className="px-5 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-5 justify-center items-center">
          <div className="p-5 w-80 md:w-96 lg:w-600 flex flex-col gap-8 justify-center items-center text-left">
            <h1 className="text-2xl">Cookies Policy!</h1>
            <Image
              src="/images/cookies.jpg"
              alt="logo"
              width={300}
              height={300}
              className="logo-nav"
            />
            <p className="leading-relaxed">
              This Cookies Policy explains what cookies are, how we use them,
              and your choices regarding their usage on our website. What are
              cookies? Cookies are small pieces of data stored on your browser
              when you visit a website. They are commonly used to make websites
              work more efficiently and to provide information to the website
              owners. How do we use cookies? We use cookies for various
              purposes, including: Essential cookies: These are necessary for
              the website to function properly. They enable basic functions like
              page navigation and access to secure areas of the website. The
              website cannot function properly without these cookies.
              Analytical/performance cookies: These cookies help us understand
              how visitors interact with our website by collecting and reporting
              information anonymously. This allows us to improve the website's
              performance. Functionality cookies: These cookies enable enhanced
              functionality and personalization, such as remembering your
              preferences and settings. They may be set by us or third-party
              providers whose services we have added to our pages.
              Advertising/targeting cookies: These cookies may be set through
              our website by our advertising partners. They may be used by those
              companies to build a profile of your interests and show you
              relevant advertisements on other websites. Your choices regarding
              cookies You can choose to accept or decline cookies. Most web
              browsers automatically accept cookies, but you can usually modify
              your browser settings to decline cookies if you prefer. However,
              this may prevent you from taking full advantage of the website. If
              you wish to manage cookies, you can typically do so through your
              browser settings. You can also opt-out of specific third-party
              cookies by following the instructions provided by the relevant
              third-party providers. Changes to this policy We may update this
              Cookies Policy from time to time to reflect changes in our
              practices or for other operational, legal, or regulatory reasons.
              We encourage you to review this policy periodically for any
              updates. Contact us If you have any questions about this Cookies
              Policy, please contact us at [contact information]. By using our
              website, you consent to the use of cookies as described in this
              policy.
            </p>
          </div>
        </div>

        <div>
          <Button
            buttonText="Go back"
            imageSrc="/images/arrow.png"
            link="/"
            bgColor="bg-background"
          />
        </div>
      </div>
      <Footer />
      <UnderFooter />
    </>
  );
}
