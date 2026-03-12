import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t bg-secondary py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Global Infinity Foundation</h3>
          <p className="text-sm text-muted-foreground">
            Empowering communities through music, craftsmanship, and cultural events.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/music-education">Music Education</Link></li>
            <li><Link href="/instrument-production">Instrument Production</Link></li>
            <li><Link href="/events-fundraising">Events</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Get Involved</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/get-involved">Donate</Link></li>
            <li><Link href="/get-involved">Volunteer</Link></li>
            <li><Link href="/get-involved">Partner</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>info@globalinfinityfoundation.org</li>
            <li>+91 12345 67890</li>
            <li>India</li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Global Infinity Foundation. All rights reserved.
      </div>
    </footer>
  )
}