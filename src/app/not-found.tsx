import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 bg-white text-center">
      <div className="container mx-auto px-4 max-w-lg">
        <p className="text-6xl font-heading font-bold text-accent mb-4">404</p>
        <h1 className="font-heading text-3xl font-bold text-primary mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
