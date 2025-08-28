"use client";

import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Facebook, Youtube, Instagram } from "lucide-react";

type CardData = {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  imageLink: string;
};

export default function HomePage() {
  const cardsData: CardData[] = [
    {
      id: 1,
      title: "FIND YOUR FCL SPORT",
      subtitle: "Check out our many types of FCL competitions!",
      buttonText: "Learn More",
      imageLink: "/images/Hero/card-1.png",
    },
    {
      id: 2,
      title: "JOIN THE FCL",
      subtitle:
        "Get started by joining the FCL, forming a local league, or becoming the exclusive licensee for a state or country.",
      buttonText: "Learn More",
      imageLink: "/images/Hero/card-2.png",
    },
    {
      id: 3,
      title: "CHECK OUT THE ACTION",
      subtitle: "See the many FCL Sports in action on our YouTube Channel.",
      buttonText: "Visit FCL Network",
      imageLink: "/images/Hero/card-3.png",
    },
    {
      id: 4,
      title: "GET YOUR FCL GEAR",
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
              <p className="text-gray-300 text-sm sm:text-base md:text-md max-w-md leading-relaxed font-light">
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
      <div className="px-6 py-10 -mt-50">
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
      <div className="flex w-full items-center justify-center">
        <Image
          src="/images/Hero/download.png"
          width={1920}
          height={720}
          alt="last"
        />
      </div>
      <ShopSection />
      <NewsletterSection />
      <SponsorsSection />
    </>
  );
}

function Caard({ card, index }: { card: CardData; index: number }) {
  const stagger = index % 2 === 0 ? "mt-0" : "mt-4";

  return (
    <>
      <Card
        className={`${stagger} relative h-[460px] sm:h-80 md:h-[460px] rounded-2xl overflow-hidden shadow-lg`}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${card.imageLink})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/20" />
        <CardContent className="relative z-10 h-full p-4 flex flex-col justify-between bg-transparent">
          <div>
            <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-extrabold leading-tight uppercase">
              {card.title}
            </h3>
            <p className="text-white/90 text-sm sm:text-base mt-2 max-w-[260px] font-light">
              {card.subtitle}
            </p>
          </div>
          <div className="w-full">
            <Button className="w-full rounded-full py-2.5 text-sm font-semibold bg-red-600 hover:bg-red-700 text-white shadow-md">
              {card.buttonText}
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

import { ChevronLeft, ChevronRight } from "lucide-react";

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

function ScheduleSection() {
  return (
    <div className="font-euclid-circular w-full max-w-7xl mx-auto bg-white px-4 py-12 mt-8">
      <div className="flex items-center gap-24">
        <div className="flex-shrink-0 flex flex-col justify-center">
          <div className="mb-4">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              NEXT UP ON THE
            </h2>
            <h2 className="text-4xl font-bold text-blue-600 leading-tight">
              SCHEDULE
            </h2>
          </div>
          <Button
            variant="destructive"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded text-base font-medium"
          >
            Full Schedule
          </Button>
        </div>

        <div className="flex-1"></div>

        <div className="flex-shrink-0">
          <div className="flex gap-4 mb-4">
            {events.map((event) => (
              <Card
                key={event.id}
                className={`${event.bgColor} text-white rounded-lg overflow-hidden shadow-lg w-56 h-64`}
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
                    <div className="w-20 h-20 relative">
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

          <div className="relative">
            <div className="h-1 bg-gray-200 rounded-full mb-3">
              <div className="h-1 bg-red-600 rounded-full w-1/3"></div>
            </div>
            <div className="flex justify-end">
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-8 h-8 rounded border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-8 h-8 rounded border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section
      className="py-16 mt-12 bg-gray-100"
      style={{
        backgroundImage: "url('/images/Hero/bg-grey.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="font-euclid-circular container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-lg">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/QS4WdFq2j3k"
                title="Firefighter Challenge Championship Series"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex-1 max-w-lg">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              SEE WHAT WE&apos;RE
              <br />
              <span className="text-red-600">ALL ABOUT</span>
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
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
                have SERVPRO® serving as our league&apos;s inaugural title sponsor in
                the United States.
              </p>
            </div>

            <Button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

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

function FeatureSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 font-euclid-circular bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={`${post.name} - ${post.department}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {post.date}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 line-clamp-2">
                  {post.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.department}
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

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

function VideoNewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="font-euclid-circular container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">VIDEO</h2>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
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
                  className="flex gap-4 items-start bg-gray-100 p-4 rounded-lg"
                >
                  <div className="flex-shrink-0 w-20 h-16 relative rounded overflow-hidden">
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
                    <button className="text-red-600 text-sm font-semibold hover:text-red-700 transition-colors">
                      Read More →
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
    <section className="font-euclid-circular py-8 sm:py-12 lg:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            SHOP <span className="text-blue-600">FCL</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full bg-gray-100 rounded-lg p-4 sm:p-6 flex items-center justify-center">
                <div className="relative w-full max-w-[220px] h-40 sm:h-48">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 220px"
                  />
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-black mt-4 mb-2 uppercase">
                {product.category}
              </h3>

              <p className="text-gray-600 text-sm mb-4 px-2">
                {product.description}
              </p>

              <div className="text-2xl font-bold text-red-600 mb-4">
                {product.price}
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded w-full sm:w-auto">
                Add to Cart
              </Button>
            </div>
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
              <div className="w-10 h-10 rounded-4xl flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-4xl flex items-center justify-center bg-red-600 backdrop-blur-sm hover:bg-red-800 transition-colors cursor-pointer">
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

function SponsorsSection() {
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
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          SPONSORS
        </h2>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-20 lg:gap-24">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.alt}
                  width={400}
                  height={400}
                  className="max-h-40 w-auto object-contain hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
