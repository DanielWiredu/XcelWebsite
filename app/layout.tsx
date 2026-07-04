import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://www.xcelisolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Xcel iSolutions — Custom Software, Web & Mobile Development",
    template: "%s | Xcel iSolutions",
  },
  description:
    "Xcel iSolutions is a Ghanaian-owned technology partner building secure, bespoke web applications, mobile apps, and enterprise software for healthcare, insurance, finance, and the public sector. Driven by Care. Powered by Innovation.",
  keywords: [
    "custom software development",
    "web application development",
    "mobile app development",
    "enterprise software",
    "healthcare claims management",
    "fintech Ghana",
    "digital transformation",
    "API integration",
    "Xcel iSolutions",
  ],
  authors: [{ name: "Xcel iSolutions Company Limited" }],
  creator: "Xcel iSolutions Company Limited",
  applicationName: "Xcel iSolutions",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Xcel iSolutions",
    title: "Xcel iSolutions — Custom Software, Web & Mobile Development",
    description:
      "Secure, bespoke web, mobile, and enterprise software for regulated industries. Driven by Care. Powered by Innovation.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xcel iSolutions — Custom Software Development",
    description:
      "Secure, bespoke web, mobile, and enterprise software for regulated industries.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#141a3c",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Xcel iSolutions Company Limited",
  url: siteUrl,
  slogan: "Driven by Care. Powered by Innovation.",
  description:
    "Ghanaian-owned technology solutions provider specializing in custom web applications, mobile apps, and enterprise software for regulated industries.",
  email: "info@xcelisolutions.com",
  telephone: "+233243434870",
  address: {
    "@type": "PostalAddress",
    streetAddress: "P. O. Box AD961, Adabraka",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+233243434870",
    contactType: "sales",
    email: "info@xcelisolutions.com",
    areaServed: "GH",
  },
  areaServed: "GH",
  knowsAbout: [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "Enterprise Software",
    "Healthcare Claims Management",
    "Financial Systems",
    "API Integration",
    "Cybersecurity",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-white font-sans text-navy-900 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
