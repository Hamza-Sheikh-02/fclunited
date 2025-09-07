import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <h1 className="text-9xl font-extrabold text-red-600 tracking-widest">
        404
      </h1>

      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>

      <p className="mt-4 text-gray-600 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      <div className="mt-8 flex">
        <Link
          href="/"
          className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
