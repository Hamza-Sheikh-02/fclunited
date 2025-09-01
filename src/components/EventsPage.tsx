import { Button } from "./ui/button";
import { NewsletterSection, SponsorsSection } from "./HomePage";

export default function EventsPage() {
  return (
    <>
      <section className="w-full">
        <div
          className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/Events/events.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              <span className="text-red-500">FCL</span> EVENTS
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mt-2 sm:mt-4 max-w-4xl mx-auto leading-relaxed">
              At the FCL, we pride ourselves in developing life service themed
              sporting events together our important three-part nonprofit
              mission of highlighting the strength and readiness of the fire
              service, encouraging the use in firefighting culture, and offering
              engaging methods to help firefighters maintain and improve their
              fitness.
            </p>
          </div>
        </div>
        <SponsorsSection />
      </section>

      <section className="w-full py-8 sm:py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
            <span className="text-blue-600">CURRENT</span> SERIES & EVENTS
            <br />
            OFFERED BY THE <span className="text-red-600">FCL</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div
                className="h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-200 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/Events/1.png')",
                }}
              ></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                  THE ORIGINAL &quot;TOUGHEST TWO MINUTES IN SPORTS&quot;
                </h3>
                <p className="text-sm sm:text-base font-extralight font-euclid-circular-regular text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  We created the Firefighter Challenge concept, formally known
                  as the Firefighter Combat Challenge, which began as a U.S.
                  research study on firefighter fitness and endurance in the
                  late 1980&apos;s. Over 30 years later, the Firefighter
                  Challenge Championship Series remains a leading global fire
                  service competition. Only officially sanctioned groups listed
                  on our website are licensed to operate our sport; others using
                  our name and branding are not approved.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 text-sm sm:text-base">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div
                className="h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-200 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/Events/2.png')",
                }}
              ></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                  HOMETOWN RIVALRY, UNFORGETTABLE FUN AT FCL
                </h3>
                <p className="text-sm sm:text-base font-extralight font-euclid-circular-regular text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  The Hometown Edition is a scaled down version of the larger
                  Firefighter Challenge Championship Series (FCCS) offering a
                  one-day, single lane course event utilizing fire department
                  training towers/facilities and/or other locations organized by
                  local FCL leagues and sponsors. LEARN MORE this is a button
                  that redirects to
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 text-sm sm:text-base">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 sm:p-8 flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  WHERE STRENGTH MEETS FIREFIGHTER DETERMINATION
                </h3>
                <p className="text-sm sm:text-base font-extralight font-euclid-circular-regular text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  The Firefighter Workout Challenge offers various virtual
                  competitions year-round known as &apos;editions&apos;. Each
                  edition is developed by well-known fitness coaches, fitness
                  apps, fitness products, fitness organizations, and even pro
                  athletes that generously support our nonprofit. Firefighters
                  can compete from the convenience of their home, fire station,
                  drill field, gym, and more. Participants simply login into the
                  app provided by our Edition partner and then record their
                  daily results! It&apos;s that easy!
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 w-fit text-sm sm:text-base">
                  Learn More
                </Button>
              </div>
              <div
                className="h-48 sm:h-56 md:h-64 lg:h-auto bg-gray-200 bg-cover bg-center order-1 lg:order-2"
                style={{
                  backgroundImage: "url('/images/Events/3.png')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
