import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Facebook,
  Youtube,
  Instagram,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  CircleArrowRight,
} from "lucide-react";

type CardData = {
  id: number;
  title: string;
  titleClass: string;
  subtitle: string;
  buttonText: string;
  imageLink: string;
};

export default function HomePage() {
  const cardsData: CardData[] = [
    {
      id: 1,
      title: "FIND YOUR",
      titleClass: "FCL SPORT",
      subtitle: "Check out our many types of FCL competitions!",
      buttonText: "Learn More",
      imageLink: "/images/Hero/card-1.png",
    },
    {
      id: 2,
      title: "JOIN THE",
      titleClass: "FCL",
      subtitle:
        "Get started by joining the FCL, forming a local league, or becoming the exclusive licensee for a state or country.",
      buttonText: "Learn More",
      imageLink: "/images/Hero/card-2.png",
    },
    {
      id: 3,
      title: "CHECK OUT",
      titleClass: "THE ACTION",
      subtitle: "See the many FCL Sports in action on our YouTube Channel.",
      buttonText: "Visit FCL Network",
      imageLink: "/images/Hero/card-3.png",
    },
    {
      id: 4,
      title: "GET YOUR",
      titleClass: "FCL GEAR",
      subtitle:
        "Shop Fan Gear, Athlete Gear, Athlete Training Equipment, and more!",
      buttonText: "Shop FCL",
      imageLink: "/images/Hero/card-4.png",
    },
  ];

  return (
    <>
      <section
        className="relative h-screen w-full flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/Hero/hero.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="font-euclid-circular relative z-10 ml-8 w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center min-h-[75vh] py-12 sm:py-8 lg:py-0">
            <div className="text-white space-y-2 sm:space-y-2 md:space-y-3 order-1 lg:order-1 text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-white leading-[0.95] tracking-tight uppercase">
                Unite, Compete Conquer: Your Challenge Awaits
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-md max-w-md leading-relaxed font-light font-euclid-circular-regular">
                The Firefighter Challenge League (FCL) is the first official
                sporting league of its kind designed exclusively for junior,
                explorer, cadet, rookie, veteran...
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Button className="bg-red-600 hover:bg-red-800 px-6 py-2">
                  Get Involved
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-800 px-6 py-2">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative order-2 lg:order-2 hidden lg:block"></div>
          </div>
        </div>
      </section>
      <div className="px-6 py-10 -mt-38">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            {cardsData.map((card, idx) => (
              <Caard key={card.id} card={card} index={idx} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/images/Hero/last.png"
          width={1080}
          height={4720}
          alt="last"
        />
      </div>
      <ScheduleSection />
      <div className="flex items-center justify-center">
        <Image
          src="/images/Hero/events.png"
          width={1080}
          height={720}
          alt="last"
        />
      </div>
      <AboutSection />
      <FeatureSection />
      <VideoNewsSection />
      <DownloadFCL />
      <ShopSection />
      <NewsletterSection />
      <SponsorsSection />
    </>
  );
}

function Caard({ card, index }: { card: CardData; index: number }) {
  const stagger = index % 2 === 0 ? "mt-0" : "mt-4";

  return (
    <section
      className={`${stagger} w-full max-w-sm rounded-2xl h-[460px] sm:h-80 md:h-[460px] overflow-hidden relative shadow-lg`}
      style={{
        backgroundImage: `url(${card.imageLink})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="relative z-10 h-full p-4 sm:p-6 flex flex-col justify-between">
        <div className="space-y-1">
          <h3 className="text-white text-sm sm:text-base md:text-lg font-bold uppercase tracking-tight">
            {card.title}
          </h3>

          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold uppercase leading-tight">
            {card.titleClass}
          </h2>

          <p className="text-white/90 text-xs sm:text-sm mt-2 max-w-[260px] font-light">
            {card.subtitle}
          </p>
        </div>

        <div className="flex-shrink-0">
          <button className="rounded-full py-2.5 px-5 text-xs sm:text-sm font-semibold bg-gradient-to-b from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white shadow-md ring-1 ring-red-900/8">
            {card.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

function ScheduleSection() {
  const events = [
    {
      id: 1,
      location: "FDIC: Indianapolis,",
      date: "April 8-11, 2025",
      bgColor: "bg-gradient-to-br from-blue-700 to-blue-500",
      logo: "/images/Hero/c-1.png",
      logoAlt: "Season Opener Premiere Challenge",
    },
    {
      id: 2,
      location: "Salt Lake City, Utah",
      date: "April 24-26, 2025",
      bgColor: "bg-gray-200",
      logo: "/images/Hero/c-2.png",
      logoAlt: "West Regional Premiere Challenge",
    },
    {
      id: 3,
      location: "Baton Rouge, Louisiana",
      date: "May 15-17, 2025",
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-700",
      logo: "/images/Hero/c-3.png",
      logoAlt: "Southwest Regional Premiere Challenge",
    },
  ];

  const progressPercent = 33;

  return (
    <div className="font-euclid-circular w-full max-w-7xl mx-auto bg-white px-4 py-12 mt-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-24">
        <div className="flex-shrink-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              NEXT UP ON THE
            </h2>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 leading-tight">
              SCHEDULE
            </h2>
          </div>

          <Button
            variant="destructive"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded text-base font-medium mt-2"
          >
            Full Schedule
          </Button>
        </div>

        <div className="hidden lg:block flex-1" />

        <div className="flex-shrink-0 w-full lg:w-auto">
          <div className="flex gap-4 mb-4 overflow-x-auto lg:overflow-visible px-2 lg:px-0 -mx-2 lg:mx-0">
            {events.map((event) => (
              <Card
                key={event.id}
                className={`${event.bgColor} text-white rounded-lg overflow-hidden shadow-lg flex-shrink-0 w-44 sm:w-56 lg:w-56 h-48 sm:h-64 lg:h-64`}
              >
                <div className="p-4 h-full flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-sm font-bold mb-1 text-balance leading-tight">
                      {event.location}
                    </h3>
                    <p className="text-sm opacity-90">{event.date}</p>
                  </div>

                  <Button
                    variant="secondary"
                    className="bg-white text-gray-800 hover:bg-gray-100 px-3 py-2 rounded text-sm font-semibold mb-3"
                  >
                    Event Info
                  </Button>

                  <div className="flex justify-center flex-1 items-center">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 relative">
                      <Image
                        src={event.logo || "/placeholder.svg"}
                        alt={event.logoAlt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="relative mt-4 px-2 lg:pr-25">
        <div className="h-1 bg-gray-200 rounded-full mb-3 relative">
          <div className="relative h-full">
            <div
              className="h-1 bg-red-600 rounded-full absolute left-0 top-0"
              style={{ width: `calc(${progressPercent}% - 1rem)` }}
            />
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-end gap-2 absolute right-2 -top-2">
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded border-red-600 text-red-600 hover:bg-red-50 bg-white shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded border-red-600 text-red-600 hover:bg-red-50 bg-white shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  const videoSrc =
    "https://www.youtube.com/embed/KXbvSg-BE9A?si=lzq1amzCxewPboK3";

  return (
    <section
      className="py-16 mt-12 bg-gray-100 relative"
      style={{
        backgroundImage: "url('/images/Hero/bg-grey.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="font-euclid-circular max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="w-full flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-[750px] aspect-[370/255]">
              <iframe
                src={videoSrc}
                title="Firefighter Challenge Championship Series"
                className="w-full h-full block"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-white/90 p-2 shadow-md">
                  <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-5 h-5"
                    >
                      <path d="M4.5 3.5v17l15-8.5-15-8.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-2 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              SEE WHAT WE&apos;RE
              <br />
              <span className="block text-red-600">ALL ABOUT</span>
            </h2>

            <div className="mt-6 font-euclid-circular-regular leading-relaxed space-y-4 text-sm md:text-base max-w-xl ml-auto">
              <p>
                The Firefighter Challenge League (FCL) is the first official
                sporting league of its kind designed exclusively for junior,
                explorer, cadet, rookie/veteran, retired, volunteer, military,
                or career firefighters, fire departments, and firefighter
                training centers interested in our exciting competition style
                programs.
              </p>

              <p>
                Our competition series is open to all firefighters regardless of
                where they are in their fitness journey, offering entry points
                that allow them to grow at their own pace and with the
                encouragement of their fellow competitors. We are honored to
                have SERVPRO® serving as our league&apos;s inaugural title
                sponsor in the United States.
              </p>
            </div>

            <div className="mt-8 flex">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  const featuredPosts = [
    {
      id: 1,
      date: "Nov 18, 2025",
      name: "Quinlan Roe",
      department: "Mesquite Fire Department",
      image: "/images/Hero/f-1.png",
    },
    {
      id: 2,
      date: "Nov 18, 2025",
      name: "Taylor Ward",
      department: "Murray City UT Fire Department",
      image: "/images/Hero/f-2.png",
    },
    {
      id: 3,
      date: "Nov 18, 2025",
      name: "Jared Johnson",
      department: "Austin TX Fire Department",
      image: "/images/Hero/f-3.png",
    },
    {
      id: 4,
      date: "Nov 18, 2025",
      name: "Christina Hubacek",
      department: "Irving TX Fire Department",
      image: "/images/Hero/f-4.png",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 font-euclid-circular bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-8 gap-4">
          <div className="w-full sm:w-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              MORE FROM <span className="text-blue-600">THE FCL</span>
            </h2>
          </div>
          <div className="w-full sm:w-auto flex justify-start sm:justify-end">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded w-full sm:w-auto">
              All Post
            </Button>
          </div>
        </div>

        <Separator />

        <p className="text-red-600 mt-4 mb-4 font-bold text-lg sm:text-2xl uppercase tracking-wide">
          FEATURED
        </p>

        <section className="py-8 sm:py-12 lg:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="w-full flex flex-col items-start text-left rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <Image
                      src={post.image}
                      alt={`${post.name} - ${post.department}`}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-300 will-change-transform hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={false}
                    />
                  </div>

                  <div className="w-full px-4 sm:px-6 pt-3 pb-4 rounded-b-2xl flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <CalendarDays className="w-4 h-4" />
                      <time dateTime={post.date}>{post.date}</time>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 text-left line-clamp-2">
                      {post.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3 text-left line-clamp-2">
                      {post.department}
                    </p>

                    <div className="mt-auto mb-4 w-full">
                      <button
                        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 text-white px-5 py-2 rounded-md text-sm inline-block transition-colors"
                        aria-label={`Read more about ${post.name}`}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function VideoNewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "FCL Expands Globally with New Regional Leagues",
      image: "/images/Hero/news-1.png",
    },
    {
      id: 2,
      title: "FCL Nationals Set for October in Dallas, TX",
      image: "/images/Hero/news-2.png",
    },
    {
      id: 3,
      title: "New Event Format: The Iron Hose Gauntlet is Here",
      image: "/images/Hero/news-3.png",
    },
    {
      id: 4,
      title: "FCL Expands Globally with New Regional Leagues",
      image: "/images/Hero/news-4.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="font-euclid-circular container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">VIDEO</h2>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-[750px] aspect-[385/340]">
              <iframe
                src="https://www.youtube.com/embed/QS4WdFq2j3k"
                title="Firefighter Challenge Championship Series"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-600 mb-6">
              RECENT NEWS
            </h2>
            <div className="space-y-6">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-start bg-white p-4 rounded-lg"
                >
                  <div className="flex-shrink-0 w-20 h-20 relative rounded overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <button className="inline-flex items-center gap-2 whitespace-nowrap text-red-600 text-sm font-semibold hover:text-red-700 transition-colors">
                      Read More <CircleArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadFCL() {
  return (
    <div className="bg-gray-100">
      <Image
        src={"/images/Hero/download.png"}
        alt="Download FCL"
        width="1920"
        height="1080"
      />
    </div>
  );
}

function ShopSection() {
  const products = [
    {
      id: 1,
      category: "COURSE EQUIPMENT",
      title: "Professional Training Gear",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      price: "$59.99",
      image: "/images/Hero/shop-1.png",
    },
    {
      id: 2,
      category: "ATHLETE MERCH",
      title: "Official FCL Apparel",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      price: "$59.99",
      image: "/images/Hero/shop-2.png",
    },
    {
      id: 3,
      category: "ATHLETE EQUIPMENT",
      title: "Competition Ready Gear",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      price: "$59.99",
      image: "/images/Hero/shop-3.png",
    },
    {
      id: 4,
      category: "FAN MERCH",
      title: "FCL Fan Collection",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      price: "$59.99",
      image: "/images/Hero/shop-4.png",
    },
  ];

  return (
    <section className="font-euclid-circular bg-gray-200 py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            SHOP <span className="text-blue-600">FCL</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="w-full flex flex-col items-center text-center rounded-2xl overflow-hidden bg-white shadow-sm"
              aria-labelledby={`product-${product.id}-title`}
            >
              <div className="w-full rounded-t-2xl overflow-hidden relative">
                <div className="relative w-full h-44 sm:h-52 lg:h-60">
                  <Image
                    src={product.image}
                    alt={product.category}
                    fill
                    className="object-cover object-center block"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={false}
                  />
                </div>
              </div>

              <div className="w-full px-4 sm:px-6 pt-3 pb-3 rounded-b-2xl flex flex-col">
                <h3
                  id={`product-${product.id}-title`}
                  className="text-sm sm:text-base font-bold text-black mt-0.5 mb-1 uppercase"
                >
                  {product.category}
                </h3>

                <p className="text-gray-600 text-sm mb-2 px-1 sm:px-2 line-clamp-2">
                  {product.description}
                </p>

                <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-0">
                  {product.price}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-24 h-20">
              <Image
                src="/images/Hero/logo.png"
                alt="FCL Logo"
                width={96}
                height={76}
                className="object-contain"
              />
            </div>

            <p className="text-white text-sm leading-relaxed max-w-md mx-auto">
              The Firefighter Challenge League (FCL) is the first official
              sporting league of its kind designed exclusively for junior,
              explorer, cadet, rookie, veteran, military, or career
              firefighters.
            </p>

            <div className="flex space-x-4 justify-center">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-red-600 backdrop-blur-sm hover:bg-red-800 transition-colors cursor-pointer">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-4xl flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <Separator orientation="vertical" className="h-40" />
          </div>

          <div className="space-y-6">
            <div className="text-center md:text-left">
              <p className="text-white text-sm font-medium mb-2">
                SUBSCRIBE TO THE
              </p>
              <h2 className="text-3xl font-bold">
                FCL <span className="text-red-500">NEWSLETTER</span>
              </h2>
            </div>

            <div className="space-y-4 max-w-md mx-auto md:mx-0">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black border-0 h-12 text-base"
              />
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white h-12 text-base font-medium">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SponsorsSection() {
  const sponsors = [
    {
      name: "WHP",
      logo: "/images/Hero/sponsors-1.png",
      alt: "WHP Logo",
    },
    {
      name: "Snap-Tite",
      logo: "/images/Hero/sponsors-2.png",
      alt: "Snap-Tite Hoses Logo",
    },
    {
      name: "SRB",
      logo: "/images/Hero/sponsors-3.png",
      alt: "SRB Logo",
    },
    {
      name: "Activote",
      logo: "/images/Hero/sponsors-4.png",
      alt: "Activote Logo",
    },
    {
      name: "Nasco Healthcare",
      logo: "/images/Hero/sponsors-5.png",
      alt: "Nasco Healthcare Logo",
    },
    {
      name: "Imagin8 Creations",
      logo: "/images/Hero/sponsors-6.png",
      alt: "Imagin8 Creations Logo",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          SPONSORS
        </h2>

        <div className="w-full py-4">
          <div className="block md:hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-2">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-2 bg-white rounded"
                >
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.alt || "sponsor logo"}
                    width={220}
                    height={120}
                    className="max-h-24 w-auto object-contain filter transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-full overflow-x-auto py-4">
              <div className="flex justify-center items-center space-x-4 min-w-max px-4">
                {sponsors.map((sponsor, index) => (
                  <div key={index} className="flex-shrink-0">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.alt || "sponsor logo"}
                      width={180}
                      height={100}
                      className="h-44 w-auto object-contain transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
