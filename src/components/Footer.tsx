"use client";
import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { BUSINESS } from "@/lib/business";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12">
          <div>
            <Image
              src="/logo/logo_malayalam.svg"
              width={80}
              height={60}
              alt={BUSINESS.name}
              className="brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Your one-stop shop for fresh groceries, household essentials, and
              more — at affordable prices.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { title: "Products", link: "#products" },
                { title: "About Us", link: "#about" },
                { title: "Reviews", link: "#reviews" },
                { title: "Contact", link: "#contact" },
              ].map((item) => (
                <li key={item.title}>
                  <a href={item.link} className="hover:text-white transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BUSINESS.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-400 hover:text-brand-300 transition-colors"
                >
                  Order Online →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-brand-400" />
                {BUSINESS.address}
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 shrink-0 mt-0.5 text-brand-400" />
                {BUSINESS.openDays}, {BUSINESS.hours}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-brand-400" />
                <a href={BUSINESS.phoneHref} className="hover:text-white">
                  {BUSINESS.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
