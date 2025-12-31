export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. What Are Cookies</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. How We Use Cookies</h2>
          <p className="mb-4">
            We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Managing Cookies</h2>
          <p className="mb-4">
            You can control and manage cookies in various ways. Most browsers allow you to refuse or accept cookies.
          </p>
        </section>
      </div>
    </div>
  )
}