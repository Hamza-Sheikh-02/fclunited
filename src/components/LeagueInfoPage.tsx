import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { NewsletterSection } from "@/components/HomePage";

function LeagueInfoPage() {
  return (
    <>
      <section className="relative font-euclid-circular min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/League Info/info.png')",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 text-balance drop-shadow-2xl">
            LEAGUE <span className="text-red-500">INFO</span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed text-pretty drop-shadow-lg">
              The FCL welcomes firefighters, departments, training centers, and
              approved agencies to create officially sanctioned local FCL
              leagues in their community to offer training for FCL sanctioned
              sporting events.
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
    <section className="w-full py-16 bg-gray-50">
      <div className="container font-euclid-circular mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12 lg:text-4xl">
          LEAGUE <span className="text-blue-600">FINDER</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex justify-between items-center gap-4">
              <div className="flex gap-2 flex-1">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="pr-4 py-3 text-base"
                  />
                </div>
                <Button className="bg-red-600 hover:bg-red-700 px-4">
                  <Search className="h-5 w-5 text-white" />
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/League Info/lf-1.png"
                alt="Firefighter Challenge"
                width={600}
                height={550}
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3">
                  JOIN NOW
                </Button>
              </div>
            </div>
          </div>

          <div className="relative bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="font-medium">Filter:</span>
              <span className="font-medium">City</span>
              <span>•</span>
              <span className="font-medium">State</span>
              <span>•</span>
              <span className="font-medium">Zip Code</span>
            </div>
            <div className="relative h-[550px] mb-4">
              <Image
                src="/images/League Info/map.png"
                alt="World Map"
                width={600}
                height={550}
                className="w-full h-[550px] object-contain"
              />

              <Card className="absolute top-4 right-4 w-40 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <Image
                      src="/images/League Info/lf-1.png"
                      alt="Firefighter"
                      width={120}
                      height={120}
                      className="w-32 h-32 rounded object-cover"
                    />
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-800">
                        Find your FCL sport
                      </p>
                      <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>St. Paul, Minnesota, 55103</span>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1">
                        CONTACT
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <section
        className="w-full font-euclid-circular mt-8 py-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/League Info/contact.png')",
        }}
      >
        <div className="absolute inset-0"></div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left side - Content */}
            <div className="flex flex-col justify-center text-white">
              <h2 className="text-3xl font-bold leading-tight lg:text-4xl xl:text-5xl mb-6">
                READY TO COMPETE?
              </h2>
              <p className="text-base leading-relaxed opacity-95 lg:text-lg mb-8">
                Step up and put your skills to the test. The Firefighter
                Challenge League gives you the chance to train like an athlete,
                compete alongside your brothers and sisters, and represent your
                department with pride. Whether you're joining an existing league
                or starting one in your own community, the FCL is your path to
                challenge yourself, push your limits.
              </p>
              <Button className="w-fit bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold">
                JOIN NOW
              </Button>
            </div>

            {/* Right side - Contact Form */}
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="border-gray-300"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="border-gray-300"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="border-gray-300"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone"
                    className="border-gray-300"
                  />
                </div>
                <Textarea
                  placeholder="Message"
                  rows={4}
                  className="border-gray-300 resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                >
                  SUBMIT NOW
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full font-euclid-circular py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-12 lg:text-4xl">
            START A LOCAL <span className="text-red-600">LEAGUE</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200 relative">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 10.1 14.1 11 13 11V22H11V16H9V22H7V11C5.9 11 5 10.1 5 9V7H3V9C3 11.2 4.8 13 7 13V22H17V13C19.2 13 21 11.2 21 9Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Apply to be a League Organizer
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Bring the Firefighter Challenge League to your community. As a
                League Organizer, you'll lead the way in creating a local hub
                where firefighters can train, compete, and connect through
                officially sanctioned FCL events.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200 relative">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Meet FCL Requirements
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To ensure every league maintains the highest standards of
                safety, fairness, and professionalism, all organizers must meet
                specific FCL requirements. These guidelines are designed to
                provide consistency across every community, protect
                participants, & uphold the integrity of the firefighter...
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Get Official Approval
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Once your application and requirements are reviewed, the FCL
                team will grant official approval to launch your league. This
                recognition gives your organization the prestige and credibility
                of being part of the national Firefighter Challenge League
                network and access to the resources needed...
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
              DOWNLOADABLE PDF GUIDE
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div
            className="relative rounded-2xl overflow-hidden bg-cover bg-center min-h-[300px] flex items-center justify-center"
            style={{
              backgroundImage: "url('/images/League Info/part.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 text-center w-full px-8 lg:px-16 py-12">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white leading-tight lg:text-4xl xl:text-5xl mb-6">
                  BECOME PART OF THE FCL MOVEMENT.
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  Join thousands of firefighters nationwide who are training,
                  competing, and building bonds through the Firefighter
                  Challenge League. Together, we're creating more than just
                  events...
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold">
                  START YOUR LEAGUE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default LeagueInfoPage;
