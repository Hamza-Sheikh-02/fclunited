import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { NewsletterSection } from "@/components/HomePage";
import { Filter } from "lucide-react";

function LeagueInfoPage() {
  return (
    <>
      <section className="w-full">
        <div
          className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] w-full bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/League Info/info.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-4 md:mb-6">
              LEAGUE <span className="text-red-500">INFO</span>
            </h2>
            <p className="text-white/95 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-4xl mx-auto leading-relaxed">
              The FCL welcomes firefighters, departments, training centers, and
              approved agencies to create officially sanctioned local FCL
              leagues in their community to offer training for FCL sanctioned
              sporting events. community.
            </p>
          </div>
        </div>
      </section>

      <LeagueFinderSection />

      <NewsletterSection />
    </>
  );
}

function LeagueFinderSection() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container font-euclid-circular mx-auto max-w-7xl px-4">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 sm:mb-12">
          LEAGUE <span className="text-blue-600">FINDER</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex justify-between items-center gap-2 sm:gap-4">
              <div className="flex gap-2 flex-1">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Search League..."
                    className="pr-4 py-2 sm:py-3 rounded-3xl text-sm sm:text-base"
                  />
                </div>
                <Button className="bg-red-600 rounded-2xl hover:bg-red-700 px-3 sm:px-4">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/League Info/lf-1.png"
                alt="Firefighter Challenge"
                width={600}
                height={550}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[550px] object-cover"
              />
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 sm:py-3 text-sm sm:text-base">
                  JOIN NOW
                </Button>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl p-4 sm:p-6 w-full max-w-7xl mx-auto">
            <div className="flex justify-end items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="font-semibold text-gray-600">Filter:</span>
              <span className="font-medium text-gray-400">City</span>
              <span className="text-gray-400">•</span>
              <span className="font-medium text-gray-400">State</span>
              <span className="text-gray-400">•</span>
              <span className="font-medium text-gray-400">Zip Code</span>
            </div>

            <div className="relative w-full h-72 sm:h-96 md:h-[500px] lg:h-[600px]">
              <Image
                src="/images/League Info/map.png"
                alt="World map"
                width={500}
                height={500}
                layout="responsive"
                className="select-none"
                priority
              />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 sm:w-48 md:w-56 bg-white rounded-2xl shadow-2xl ring-1 ring-gray-100 overflow-hidden">
                  <div className="relative h-36 sm:h-44">
                    <Image
                      src="/images/League Info/lf-1.png"
                      alt="A firefighter in action."
                      layout="fill"
                      objectFit="cover"
                      className="select-none"
                      priority
                    />
                  </div>
                  <div className="px-4 py-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      Find your FCL sport
                    </h3>
                    <div className="mt-3 flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                      </svg>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        425 Rice Street St. Paul,
                        <br />
                        Minnesota, 55103
                      </p>
                    </div>
                    <button
                      type="button"
                      className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase text-sm py-3 rounded-lg shadow-sm transition"
                    >
                      CONTACT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full font-euclid-circular mt-6 sm:mt-8 py-8 sm:py-12 md:py-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/League Info/contact.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center text-white">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                READY TO COMPETE?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-extralight font-euclid-circular-regular opacity-95 mb-6 sm:mb-8">
                Step up and put your skills to the test. The Firefighter
                Challenge League gives you the chance to train like an athlete,
                compete alongside your brothers and sisters, and represent your
                department with pride. Whether you&apos;re joining an existing
                league or starting one in your own community, the FCL is your
                path to challenge yourself, push your limits.
              </p>
              <Button className="w-fit bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg">
                JOIN NOW
              </Button>
            </div>

            <div className="bg-transparent rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg">
              <form className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="border-gray-300 bg-white text-sm sm:text-base"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="border-gray-300 bg-white text-sm sm:text-base"
                  />
                </div>
                <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
                  <Input
                    type="text"
                    placeholder="Department"
                    className="border-gray-300 bg-white text-sm sm:text-base"
                  />
                  <Input
                    type="text"
                    placeholder="Location"
                    className="border-gray-300 bg-white text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Language Selection"
                    className="border-gray-300 bg-white text-sm sm:text-base"
                  />
                </div>
                <Textarea
                  placeholder="Message"
                  rows={4}
                  className="border-gray-300 bg-white resize-none text-sm sm:text-base"
                />
                <Button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white py-2 sm:py-3 text-base sm:text-lg justify-center items-center"
                >
                  SUBMIT NOW
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full font-euclid-circular py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 sm:mb-12">
            START A LOCAL <span className="text-red-600">LEAGUE</span>
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mb-8 sm:mb-12">
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-gray-200 relative">
              <Image
                src={"/images/League Info/1.png"}
                width={100}
                height={100}
                alt="1"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb">
                Apply to be a League Organizer
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-extralight leading-relaxed">
                Bring the Firefighter Challenge League to your community. As a
                League Organizer, you&apos;ll lead the way in creating a local
                hub where firefighters can train, compete, and connect through
                officially sanctioned FCL events.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-gray-200 relative">
              <Image
                src={"/images/League Info/2.png"}
                width={100}
                height={100}
                alt="2"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                Meet FCL Requirements
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-extralight leading-relaxed">
                To ensure every league maintains the highest standards of
                safety, fairness, and professionalism, all organizers must meet
                specific FCL requirements. These guidelines are designed to
                provide consistency across every community, protect
                participants, & uphold the integrity of the firefighter...
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-gray-200 md:col-span-2 lg:col-span-1">
              <Image
                src={"/images/League Info/3.png"}
                width={100}
                height={100}
                alt="3"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                Get Official Approval
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-extralight leading-relaxed">
                Once your application and requirements are reviewed, the FCL
                team will grant official approval to launch your league. This
                recognition gives your organization the prestige and credibility
                of being part of the national Firefighter Challenge League
                network and access to the resources needed...
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold">
              DOWNLOADABLE PDF GUIDE
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full py-8 sm:py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div
            className="relative rounded-2xl overflow-hidden bg-cover bg-center min-h-[250px] sm:min-h-[300px] flex items-center justify-center"
            style={{
              backgroundImage: "url('/images/League Info/part.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 text-center w-full px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
                  BECOME PART OF THE FCL MOVEMENT.
                </h2>
                <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 font-light font-euclid-circular-regular">
                  Join thousands of firefighters nationwide who are training,
                  competing, and building bonds through the Firefighter
                  Challenge League. Together, we&apos;re creating more than just
                  events...
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold">
                  START YOUR LEAGUE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeagueInfoPage;
