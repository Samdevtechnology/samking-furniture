import Phone from "@/assets/icons/Phone";
import Location from "@/assets/icons/Location";
import ImageTitle from "@/components/ImageTitle";
import Container from "@/utils/Container";
import { Button, Input, Textarea } from "@/utils/MuiServerComponent";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import {
  FacebookSolid,
  InstagramSolid,
  PinterestSolid,
  TwitterSolid,
} from "@/assets/icons/Socials";
import GoogleMapReact from "google-map-react";

const Lagos = { lat: 6.465422, lng: 3.406448 };

const Contact = () => {
  return (
    <div>
      <ImageTitle title="Contact Us" />
      <section>
        <Container>
          <div className="my-16 lg:my-36 relative lg:w-4/5 m-auto">
            <main className="bg-tertiary grow mb-8 sm:mb-12 lg:mb-0 lg:w-4/5 ml-auto">
              <div className="px-12 lg:pl-48 lg:pr-16 lg:pb-24">
                <header className="pt-8 mb-4 text-center text-white font-secondary font-medium text-xl">
                  <h4>Send Us a Message</h4>
                </header>

                <form action="">
                  <div className="lg:flex gap-x-8">
                    <fieldset className="w-full mb-4 lg:mb-8">
                      <Input variant="standard" label="First Name" />
                    </fieldset>
                    <fieldset className="w-full mb-4 lg:mb-8">
                      <Input variant="standard" label="Last Name" />
                    </fieldset>
                  </div>
                  <div className="lg:flex gap-x-8">
                    <fieldset className="w-full mb-4 lg:mb-8">
                      <Input variant="standard" label="Mobile Number" />
                    </fieldset>
                    <fieldset className="w-full mb-4 lg:mb-8">
                      <Input variant="standard" label="Email Address" />
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="mb-4">
                      <Textarea
                        variant="standard"
                        label="Write your message here..."
                      />
                    </fieldset>
                  </div>
                  <div className="btn py-4 lg:w-fit lg:pb-8">
                    <Button className="bg-primary shadow-primaryShade20 hover:shadow-primaryShade40 hover:bg-primaryBtn w-full">
                      Send
                    </Button>
                  </div>
                </form>
              </div>
            </main>
            <aside className="bg-primary text-white flex items-center flex-col grow lg:absolute lg:w-min lg:top-2/4 lg:h-4/5 md:-translate-y-2/4">
              <header className="pt-8 mb-4 text-center font-secondary font-medium text-xl">
                <h4>Contact Info</h4>
              </header>
              <div className="flex flex-col justify-between items-center px-12 min-h-[250px] h-full">
                <ul className=" flex flex-col gap-y-4">
                  <li className="flex gap-x-2 justify-start items-start">
                    <span>
                      <Location className=" w-5 h-5" />
                    </span>
                    <p className=" text-sm">
                      19, Adekunle Adebayo Street, Victoria Island, Lagos State,
                      Nigeria.
                    </p>
                  </li>
                  <li className="flex gap-x-2 justify-start items-start">
                    <span>
                      <Phone className=" w-5 h-5" />
                    </span>
                    <p className=" text-sm">+(234) 905 632 7145</p>
                  </li>
                  <li className="flex gap-x-2 justify-start items-start">
                    <span>
                      <EnvelopeIcon className=" w-5 h-5" />
                    </span>
                    <p className=" text-sm">Samkingwebdev@gmail.com</p>
                  </li>
                </ul>

                <ul className="flex justify-between items-center w-full mb-8">
                  <li>
                    <span>
                      <InstagramSolid />
                    </span>
                  </li>
                  <li>
                    <span>
                      <TwitterSolid />
                    </span>
                  </li>
                  <li>
                    <span>
                      <PinterestSolid />
                    </span>
                  </li>
                  <li>
                    <span>
                      <FacebookSolid />
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-secondary">
        <Container>
          <div className="py-12">
            <header className="mb-8 text-center font-secondary font-medium text-xl">
              <h4 className="text-2xl">Google Map</h4>
            </header>
            <div className="flex flex-col-reverse lg:flex-row-reverse">
              <main className="w-full lg:w-3/4 h-60 md:h-72 bg-white lg:h-96">
                <GoogleMapReact
                  //   bootstrapURLKeys={{ key: "" }}
                  defaultCenter={Lagos}
                  defaultZoom={11}
                >
                  <div>My Marker</div>
                </GoogleMapReact>
              </main>
              <aside className="w-full bg-container2 flex items-center flex-col px-4 pb-4 lg:w-1/4 mb-8 md:mb-12 lg:mb-0">
                <header className="flex just-cont pt-8 mb-8 text-center font-secondary font-medium text-xl">
                  <span>
                    <Location color="black" className="w-5 h-5" />
                  </span>
                  <h5 className="text-xl">Office Opening Hours</h5>
                </header>

                <ul>
                  <li className="mb-4">
                    <p>
                      <span className="font-medium">Monday </span>- 8am - 4pm
                    </p>
                  </li>
                  <li className="mb-4">
                    <p>
                      <span className="font-medium">Tuesday </span>- 8am - 4pm
                    </p>
                  </li>
                  <li className="mb-4">
                    <p>
                      <span className="font-medium">Wednesday </span>- 8am - 4pm
                    </p>
                  </li>
                  <li className="mb-4">
                    <p>
                      <span className="font-medium">Thursday </span>- 10am - 4pm
                    </p>
                  </li>
                  <li className="mb-4">
                    <p>
                      <span className="font-medium">Friday </span>- 8am - 2pm
                    </p>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
