import Image from "next/image";
import { Button } from "./ui/button";
import { NewsletterSection } from "@/components/HomePage";

export default function AboutPage() {
  return (
    <>
      <section className="w-full">
        <div
          className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] w-full bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/About/about.png')",
          }}
        >
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              ABOUT THE <span className="text-red-500">FCL</span>
            </h2>
            <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              The Firefighter Challenge League (FCL) is the official global
              sanctioning body for its fire- themed challenge-based events. We
              are an international organization dedicated to developing,
              coordinating and delivering firefighter-themed competitions and
              events. In addition to our own series, we proudly collaborate with
              other entities that also deliver world-class events for
              firefighters. Collectively, we unite to serve and support the
              global fire service community.
            </p>
          </div>
        </div>
      </section>

      <MissionVisionSection />
      <RedBlueSections />

      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-100">
        <div className="container font-euclid-circular mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 sm:mb-12">
            INTERNATIONAL LEAGUE PARTNERS
          </h2>

          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:flex-row lg:gap-12 xl:gap-16">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <Image
                src={"/images/About/l-1.png"}
                width={500}
                height={500}
                alt="New Zealand"
                className="w-full h-auto"
              />
            </div>

            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <Image
                src={"/images/About/l-2.png"}
                width={500}
                height={500}
                alt="Germany"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}

function MissionVisionSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 font-euclid-circular bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                  src="/images/About/mission.png"
                  alt="Firefighter in full gear with breathing apparatus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white rounded-full"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  OUR <span className="text-red-500">MISSION</span>
                </h2>
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We have a three-part nonprofit mission of highlighting the
                strength and readiness of the fire service, encouraging interest
                in firefighting careers, and offering engaging methods to help
                firefighters maintain and improve their fitness.
              </p>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white rounded-full"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  OUR <span className="text-blue-500">VISION</span>
                </h2>
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-semibold">
                Through sport we UNITE, CHALLENGE, INSPIRE, INNOVATE, AND
                ACHIEVE our nonprofit Mission.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our competition series is open to all firefighters regardless of
                where they are on their fitness journey, offering a variety of
                sporting events for as a sport for junior, explorer, cadet,
                rookie, veteran, retired, volunteer, military, or career fire-
                fighters. We are honored to have SERVPRO and their 2,500+
                franchises serving as our league&apos;s inaugural title sponsor
                and growth ambassador in the United States.
              </p>

              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base">
                Learn More
              </Button>
            </div>

            <div>
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                  src="/images/About/vision.png"
                  alt="Firefighters in action during competition"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RedBlueSections() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 font-euclid-circular lg:grid-cols-2">
          <div
            className="flex min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] flex-col justify-center rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white"
            style={{
              backgroundImage: "url('/images/About/img-1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4 sm:mb-6">
              THE TOUGHEST TWO MINUTES IN SPORTS BEGAN HERE
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-95 mb-6 sm:mb-8">
              Proud of the toughest two minutes in sports? That&apos;s all! The
              Firefighter Challenge Championship Series is our signature sport,
              and we are proud to be the original founding body and creator of
              this competition. The FCL is the legal owner globally of all
              intellectual property rights, copyright, and trademarks. Some
              still call it the Firefighter...
            </p>
            <Button
              variant="outline"
              className="w-fit border-white bg-transparent px-4 sm:px-6 py-2 text-sm sm:text-base text-white hover:bg-white hover:text-red-600"
            >
              Learn More
            </Button>
          </div>

          <div
            className="flex min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] flex-col justify-center rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white"
            style={{
              backgroundImage: "url('/images/About/img-2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4 sm:mb-6">
              WE ARE THE OFFICIAL INTERNATIONAL GOVERNING BODY
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-95 mb-6 sm:mb-8">
              Commissioners for the FCL establish the rules, regulations and
              play enforced by our legally granted licensees around the world.
              We ensure our licensees deliver consistent experiences for our
              athletes, while upholding fair play, integrity, and the overall
              development of our respective sports in the named up licensed
              area.
            </p>
            <Button
              variant="outline"
              className="w-fit border-white bg-transparent px-4 sm:px-6 py-2 text-sm sm:text-base text-white hover:bg-white hover:text-blue-600"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
