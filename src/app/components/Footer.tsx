import Container from "@/utils/Container";
import React from "react";
import NewsletterInput from "../../components/NewsletterInput";
import IconBtnWrap from "@/utils/IconBtnWrap";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
} from "@/assets/icons/Socials";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import TextLinkWrap from "@/utils/TextLinkWrap";

const Footer = () => {
  return (
    <footer className="bg-primary text-white flex just-cont">
      <Container Variant="div" className="w-full p-8">
        <div className="flex flex-col md:flex-row w-full">
          <main className="w-full flex flex-col sm:w-[70%] mt-4">
            <div>
              <ul className="flex flex-col gap-y-3 md:flex-row gap-x-3">
                <li className="order-last md:order-first md:mr-10 w-full">
                  <ul className="text-sm">
                    <header className="pb-4 text-xl font-secondary">
                      Contact Us
                    </header>
                    <ul className="pl-2 flex flex-col gap-y-4">
                      <li className="flex">
                        <div className="icon mr-3">
                          <MapPinIcon
                            className="w-5 h-5 md:w-6 md:h-6 text-white"
                            strokeWidth={2}
                          />
                        </div>
                        <article>
                          19, Adekunle Adebayo Street, Victoria Island, Lagos
                          State, Nigeria.
                        </article>
                      </li>
                      <li className="flex">
                        <div className="icon mr-3">
                          <PhoneIcon
                            className="w-5 h-5 md:w-6 md:h-6 text-white"
                            strokeWidth={2}
                          />
                        </div>
                        <article>+(234) 905 632 7145</article>
                      </li>
                      <li className="flex">
                        <div className="icon mr-3">
                          <EnvelopeIcon
                            className="w-5 h-5 md:w-6 md:h-6 text-white"
                            strokeWidth={2}
                          />
                        </div>
                        <article>Samkingwebdev@gmail.com</article>
                      </li>
                    </ul>
                  </ul>
                </li>
                <li className="w-full">
                  <ul className="text-sm">
                    <header className="pb-3 text-xl font-secondary">
                      Help & Support
                    </header>
                    <ul className="flex flex-col gap-y-1 pl-2">
                      <li>
                        <TextLinkWrap href="/">Store Locator</TextLinkWrap>
                      </li>
                      <li>
                        <TextLinkWrap href="/">
                          Tracking your order
                        </TextLinkWrap>
                      </li>
                      <li>
                        <TextLinkWrap href="/">Shipping</TextLinkWrap>
                      </li>
                      <li>
                        <TextLinkWrap href="/">Returns & Refunds</TextLinkWrap>
                      </li>
                      <li>
                        <TextLinkWrap href="/">FAQ</TextLinkWrap>
                      </li>
                    </ul>
                  </ul>
                </li>
                <li className="order-first md:order-last w-full">
                  <ul className="text-sm">
                    <header className="pb-3 text-xl font-secondary">
                      Shop by category
                    </header>
                    <ul className="flex flex-col gap-y-1 pl-2">
                      <li>
                        <TextLinkWrap href="/">New in store</TextLinkWrap>
                      </li>
                      <li>
                        <TextLinkWrap href="/">Living Room</TextLinkWrap>
                      </li>
                      <li>
                        <TextLinkWrap href="/">Kitchen</TextLinkWrap>
                      </li>
                      <li></li>
                      <li>
                        <TextLinkWrap href="/">Clearance Deals</TextLinkWrap>
                      </li>
                    </ul>
                  </ul>
                </li>
              </ul>
            </div>
          </main>
          <aside className="w-full order-first md:order-last md:w-[30%]">
            <div className="flex flex-col w-full h-full justify-center">
              <div className="flex flex-col">
                <label
                  htmlFor="news-letter"
                  className="pb-2 text-lg font-secondary"
                >
                  Subscribe To Our Newsletter
                </label>
                <NewsletterInput className="w-[60%] md:w-[90%]" />
              </div>
              <ul className="social flex mt-2 gap-x-2">
                <li>
                  <IconBtnWrap
                    bg="bg-white"
                    size={12}
                    className="rounded-sm -ml-1"
                  >
                    <Link href="/" title="Our Twitter Handle">
                      <Twitter />
                    </Link>
                  </IconBtnWrap>
                </li>
                <li>
                  <IconBtnWrap bg="bg-white" size={12} className="rounded-sm">
                    <Link href="/" title="Our Facebook Handle">
                      <Facebook />
                    </Link>
                  </IconBtnWrap>
                </li>
                <li>
                  <IconBtnWrap bg="bg-white" size={12} className="rounded-sm">
                    <Link href="/" title="Our Pinterest Handle">
                      <Pinterest />
                    </Link>
                  </IconBtnWrap>
                </li>
                <li>
                  <IconBtnWrap bg="bg-white" size={12} className="rounded-sm">
                    <Link href="/" title="Our Instagram Handle">
                      <Instagram />
                    </Link>
                  </IconBtnWrap>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <small className="w-full flex mt-12">
          <ul className="w-full flex text-white/80 flex-col md:flex-row justify-between items-start md:items-center">
            <li>
              <Link href="/">Terms & conditons</Link>
            </li>
            <li className="mt-2 md:mt-0 md:order-last">
              <Link href="/">cookies & Privacy Policy</Link>
            </li>
            <li className="self-center mt-4 md:mt-0 text-white/50">
              <Link href="https://twitter.com/samdevtech" target="_blank">
                &copy; 2023 SamdevTech. All rights reserved
              </Link>
            </li>
          </ul>
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
