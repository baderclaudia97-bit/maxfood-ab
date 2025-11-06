export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-brand-light">
          About MaxFood AB
        </h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-brand-accent mb-4">Our Mission</h2>
            <p className="text-brand-light/70">
              To provide premium quality food products that meet international standards.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
