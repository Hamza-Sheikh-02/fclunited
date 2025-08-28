import Image from "next/image";
import { NewsletterSection } from "./HomePage";

export default function LicenseeInfoPage() {
  return (
    <>
      <section className="w-full">
        <div
          className="relative h-32 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/License Info/info.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <h2 className="relative z-10 text-2xl font-bold text-white lg:text-3xl">
            LICENSEE <span className="text-red-500">INFO</span>
          </h2>
        </div>

        <div className="bg-gray-100 py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                AUTHORIZED FCL LICENSEE PROGRAM
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The FCL is proud to grant licensing rights to certain
                individuals or organizations to conduct FCL activities within
                their jurisdiction.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-red-600 mb-6">
                CURRENT LICENSEES
              </h4>

              <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
                <div className="relative">
                  <Image
                    src="/images/License Info/l.png"
                    width={300}
                    height={300}
                    alt="Licensee Badge"
                  />
                </div>
              </div>
            </div>

            <div className="text-gray-600 leading-relaxed">
              <p>
                If you are interested in becoming a licensee of a municipality,
                state, region or country please email us at{" "}
                <strong>XXXXXXXXXX</strong>. Your name will be added onto our
                interested party list, and more information will be provided on
                our league attorneys finalize our licensing program.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />``
    </>
  );
}
