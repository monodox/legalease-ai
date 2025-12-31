import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          AI-Powered Legal Assistant for Indian Business Law
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Instant legal guidance for startups and small businesses. Generate documents, get compliance advice, and make informed decisions with confidence.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/auth/signup">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/site/features">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}