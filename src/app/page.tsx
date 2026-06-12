"use client";
import GoogleReview from "@/components/GoogleReview";
import Map from "@/components/Map";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Product from "@/components/Product";
import googleReview from "../lib/reviews.json";
import Image from "next/image";
import {
  Clock,
  Leaf,
  MapPin,
  ParkingCircle,
  Phone,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { BUSINESS } from "@/lib/business";

const products = [
  {
    title: "Fresh Meat",
    img: "/imgs/products/1.png",
    description: "Premium quality fresh meat for your favorite dishes.",
  },
  {
    title: "Vegetables",
    img: "/imgs/products/2.png",
    description: "A wide selection of fresh vegetables to enhance your meals.",
  },
  {
    title: "Dairy Products",
    img: "/imgs/products/4.png",
    description: "Enjoy fresh milk, cheese, and yogurt every day.",
  },
  {
    title: "Bakery Items",
    img: "/imgs/products/5.png",
    description: "Delicious bread, pastries, and cakes baked fresh daily.",
  },
  {
    title: "Frozen Foods",
    img: "/imgs/products/6.png",
    description: "Quick and easy meal solutions with our frozen food range.",
  },
  {
    title: "Beverages",
    img: "/imgs/products/7.png",
    description: "A variety of drinks including juices, sodas, and water.",
  },
  {
    title: "Kitchen Appliances",
    img: "/imgs/products/8.png",
    description: "Essential appliances to make your kitchen more efficient.",
  },
  {
    title: "Cake Baking Essentials",
    img: "/imgs/products/9.png",
    description: "Everything you need to bake the perfect cake.",
  },
];

const highlights: {
  icon: React.ElementType;
  title: string;
  text: string;
  link?: { href: string; label: string };
}[] = [
  {
    icon: Leaf,
    title: "Fresh Every Day",
    text: "Produce, meat, and bakery items stocked fresh daily.",
  },
  {
    icon: Clock,
    title: BUSINESS.openDays,
    text: `Shop at your convenience, ${BUSINESS.hours}.`,
  },
  {
    icon: ParkingCircle,
    title: "Free Parking",
    text: "Free customer parking available in front of the Hypermarket.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    text: "Order online and get groceries delivered to your doorstep.",
    link: { href: BUSINESS.shopUrl, label: "Shop now" },
  },
];

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center mb-8 sm:mb-12">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
    {subtitle && (
      <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
        {subtitle}
      </p>
    )}
    <div className="mt-3 mx-auto h-1 w-14 rounded-full bg-brand-500" />
  </div>
);

export default function Home() {
  return (
    <div id="Homepage" className="pt-[100px] bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white overflow-hidden">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center py-12 sm:py-16 lg:py-20">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs sm:text-sm font-semibold">
                <Truck className="h-4 w-4" /> Now delivering across Anchal
              </span>
              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight text-balance">
                Fresh Groceries &amp; Daily Essentials,{" "}
                <span className="text-brand-600">All Under One Roof</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                Farm-fresh produce, quality meat, bakery, and household
                essentials at {BUSINESS.name} — shop in store or get it
                delivered to your doorstep.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href={BUSINESS.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors shadow-md shadow-brand-500/25"
                >
                  <ShoppingBag className="h-5 w-5" /> Order Online
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-brand-500 hover:text-brand-700 transition-colors"
                >
                  Browse Products
                </a>
              </div>
              <p className="mt-6 flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4 text-brand-600" />
                {BUSINESS.openDays}, {BUSINESS.hours}
              </p>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/imgs/vegitables.webp"
                  alt="Fresh fruits and vegetables at Anchal Hypermarket"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating delivery badge */}
              <div className="absolute -bottom-4 left-4 sm:left-8 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-100 text-brand-700">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Home Delivery
                  </p>
                  <p className="text-xs text-gray-500">
                    Order online, delivered to your door
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Highlights strip */}
      <section className="bg-brand-50/60 border-y border-brand-100">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 sm:py-10">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="shrink-0 p-3 rounded-xl bg-white text-brand-600 shadow-sm">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.text}</p>
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700 hover:underline"
                    >
                      {item.link.label} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Products */}
      <section id="products" className="py-14 sm:py-20">
        <MaxWidthWrapper>
          <SectionHeading
            title="What We Offer"
            subtitle="Everything you need under one roof — from farm-fresh produce to household essentials."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <Product key={product.title} {...product} />
            ))}
          </div>

          {/* Order online CTA */}
          <div className="mt-10 sm:mt-14 rounded-2xl bg-brand-500 px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Can&apos;t make it to the store?
              </h3>
              <p className="mt-1.5 text-sm sm:text-base text-brand-50">
                Shop all of this online and get it delivered to your doorstep.
              </p>
            </div>
            <a
              href={BUSINESS.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors shadow-sm"
            >
              <ShoppingBag className="h-5 w-5" /> Order Online
            </a>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* About */}
      <section id="about" className="py-14 sm:py-20 bg-gray-50">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md order-last md:order-first">
              <Image
                src="/imgs/vegitables.webp"
                alt="Fresh vegetables at Anchal Hypermarket"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                About {BUSINESS.name}
              </h2>
              <div className="mt-3 h-1 w-14 rounded-full bg-brand-500" />
              <p className="mt-5 text-gray-600 leading-relaxed">
                {BUSINESS.name} is dedicated to providing customers with
                high-quality products at affordable prices, a safe shopping
                environment, and readily available parking in the back. We
                offer a wide variety of groceries — from fresh produce, meat,
                and seafood to packaged goods and snacks.
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Thank you for choosing us as your one-stop shop for all your
                grocery needs!
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors shadow-sm"
              >
                <MapPin className="h-4 w-4" /> Visit Our Store
              </a>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-14 sm:py-20">
        <MaxWidthWrapper>
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Real reviews from our customers on Google."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {googleReview.reviews.map((review) => (
              <GoogleReview
                key={review.author_name}
                img={review.profile_photo_url}
                name={review.author_name}
                review={review.text}
                date={review.relative_time_description}
                rating={review.rating}
              />
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Visit us / Contact */}
      <section id="contact" className="py-14 sm:py-20 bg-gray-50">
        <MaxWidthWrapper>
          <SectionHeading
            title="Visit Us"
            subtitle="Find us at Market Junction, Anchal — free parking available at the back."
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-10 items-stretch">
            <div className="md:col-span-3 rounded-2xl overflow-hidden shadow-md min-h-[300px]">
              <Map />
            </div>
            <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-center">
              <Image
                src="/logo/logo_malayalam.svg"
                width={90}
                height={68}
                alt={BUSINESS.name}
              />
              <div className="mt-5 space-y-4 text-sm text-gray-600">
                <p className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                  {BUSINESS.address}
                </p>
                <p className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>
                    {BUSINESS.openDays}
                    <br />
                    {BUSINESS.hours} · Free parking in back
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>
                    <a href={BUSINESS.phoneHref} className="hover:text-brand-700">
                      {BUSINESS.phone}
                    </a>
                    <br />
                    <a
                      href={BUSINESS.landlineHref}
                      className="hover:text-brand-700"
                    >
                      {BUSINESS.landline}
                    </a>
                  </span>
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-brand-500 text-brand-700 font-semibold hover:bg-brand-50 transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors"
                >
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
