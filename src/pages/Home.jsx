import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Categories from '../components/Categories';
import Pricing from '../components/Pricing';
import Trust from '../components/Trust';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Credzo — Smart Expense Tracking</title>
        <meta name="description" content="Credzo helps you track daily expenses, manage credit cards, set budgets, and gain insights into your spending — all in one place." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="expense tracker, credit card tracker, budget app, personal finance app, spending tracker, SMS auto-import, Android finance app, budget manager India" />
        <link rel="canonical" href="https://credzoapp.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://credzoapp.com/" />
        <meta property="og:title" content="Credzo — Smart Expense Tracking" />
        <meta property="og:description" content="Credzo helps you track daily expenses, manage credit cards, set budgets, and gain insights into your spending — all in one place." />
        <meta property="og:image" content="https://credzoapp.com/CredzoLogo1.png" />
        <meta property="og:site_name" content="Credzo" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Credzo — Smart Expense Tracking" />
        <meta name="twitter:description" content="Credzo helps you track daily expenses, manage credit cards, set budgets, and gain insights into your spending — all in one place." />
        <meta name="twitter:image" content="https://credzoapp.com/CredzoLogo1.png" />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://credzoapp.com/#organization",
              "name": "Credzo",
              "url": "https://credzoapp.com/",
              "logo": "https://credzoapp.com/CredzoLogo1.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@credzoapp.com",
                "contactType": "customer support",
                "areaServed": "IN"
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://credzoapp.com/#website",
              "url": "https://credzoapp.com/",
              "name": "Credzo",
              "publisher": { "@id": "https://credzoapp.com/#organization" }
            },
            {
              "@type": "MobileApplication",
              "name": "Credzo",
              "description": "Credzo helps you track daily expenses, manage credit cards, set budgets, and gain insights into your spending — all in one place.",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Android, iOS",
              "publisher": { "@id": "https://credzoapp.com/#organization" },
              "offers": [
                { "@type": "Offer", "name": "Starter", "price": "0", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "Pro", "price": "250", "priceCurrency": "INR" },
                { "@type": "Offer", "name": "Elite", "price": "500", "priceCurrency": "INR" }
              ]
            }
          ]
        })}</script>
      </Helmet>

      <Hero />
      <Features />
      <HowItWorks />
      <Categories />
      <Pricing />
      <Trust />
      <Contact />
    </>
  );
}
