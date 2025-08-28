import Image from "next/image";
import { Button } from "./ui/button";
import { NewsletterSection } from "@/components/HomePage";

export default function AboutPage() {
  return (
    <>
      <section className="relative font-euclid-circular min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/About/about.png')",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 text-balance drop-shadow-2xl">
            ABOUT THE <span className="text-red-500">FCL</span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed text-pretty drop-shadow-lg">
              The Firefighter Challenge League (FCL) is the official global
              sanctioning body for its firefighter challenge-based events. We
              are an international organization dedicated to developing
              competitive firefighter events worldwide. We proudly collaborate
              with other entities that also deliver world-class events for
              firefighters. Collectively, we unite to grow and support the
              global fire service community.
            </p>
          </div>
        </div>
      </section>

      <MissionVisionSection />
      <RedBlueSections />

      <section className="w-full py-16 bg-gray-100">
        <div className="container font-euclid-circular mx-auto max-w-7xl px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12 lg:text-3xl">
            INTERNATIONAL LEAGUE PARTNERS
          </h2>

          <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16">
            <div className="relative">
              <Image
                src={"/images/About/l-1.png"}
                width={500}
                height={500}
                alt="New Zealand"
              />
            </div>

            <div className="relative">
              <Image
                src={"/images/About/l-2.png"}
                width={500}
                height={500}
                alt="Germany"
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
    <section className="py-16 font-euclid-circular bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/About/mission.png"
                  alt="Firefighter in full gear with breathing apparatus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  OUR <span className="text-red-500">MISSION</span>
                </h2>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                We have a three-part nonprofit mission of highlighting the
                strength and readiness of the fire service, encouraging interest
                in firefighting careers, and offering engaging methods to help
                firefighters maintain and improve their fitness.
              </p>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  OUR <span className="text-blue-500">VISION</span>
                </h2>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed font-semibold">
                Through sport we UNITE, CHALLENGE, INSPIRE, INNOVATE, AND
                ACHIEVE our nonprofit Mission.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our competition series is open to all firefighters regardless of
                where they are on their fitness journey, offering a variety of
                sporting events for as a sport for junior, explorer, cadet,
                rookie, veteran, retired, volunteer, military, or career fire-
                fighters. We are honored to have SERVPRO and their 2,500+
                franchises serving as our league's inaugural title sponsor and
                growth ambassador in the United States.
              </p>

              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md">
                Learn More
              </Button>
            </div>

            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
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
    <section className="w-full py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 font-euclid-circular lg:grid-cols-2">
          <div
            className="flex min-h-[400px] flex-col justify-center rounded-2xl p-8 text-white lg:rounded-3xl lg:p-12"
            style={{
              backgroundImage: "url('/images/About/img-1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-2xl font-bold leading-tight lg:text-3xl xl:text-4xl mb-6">
              THE TOUGHEST TWO MINUTES IN SPORTS BEGAN HERE
            </h2>
            <p className="text-base leading-relaxed opacity-95 lg:text-lg mb-8">
              Proud of the toughest two minutes in sports? That's all! The
              Firefighter Challenge Championship Series is our signature sport,
              and we are proud to be the original founding body and creator of
              this competition. The FCL is the legal owner globally of all
              intellectual property rights, copyright, and trademarks. Some
              still call it the Firefighter...
            </p>
            <Button
              variant="outline"
              className="w-fit border-white bg-transparent px-6 py-2 text-white hover:bg-white hover:text-red-600"
            >
              Learn More
            </Button>
          </div>

          <div
            className="flex min-h-[400px] flex-col justify-center rounded-2xl p-8 text-white lg:rounded-3xl lg:p-12"
            style={{
              backgroundImage: "url('/images/About/img-2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-2xl font-bold leading-tight lg:text-3xl xl:text-4xl mb-6">
              WE ARE THE OFFICIAL INTERNATIONAL GOVERNING BODY
            </h2>
            <p className="text-base leading-relaxed opacity-95 lg:text-lg mb-8">
              Commissioners for the FCL establish the rules, regulations and
              play enforced by our legally granted licensees around the world.
              We ensure our licensees deliver consistent experiences for our
              athletes, while upholding fair play, integrity, and the overall
              development of our respective sports in the named up licensed
              area.
            </p>
            <Button
              variant="outline"
              className="w-fit border-white bg-transparent px-6 py-2 text-white hover:bg-white hover:text-blue-600"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
