"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroLogoBillboard from "@/components/sections/hero/HeroLogoBillboard";
import ProductCardSix from "@/components/sections/product/ProductCardSix";
import SplitAbout from "@/components/sections/about/SplitAbout";
import TestimonialCardFourteen from "@/components/sections/testimonial/TestimonialCardFourteen";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Award, Flame, Leaf } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSizeMediumTitles"
      background="radialGradient"
      cardStyle="neon-glow"
      primaryButtonStyle="outline"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Coffee Artisan"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Hours", id: "hours" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Coffee Artisan"
          description="Handcrafted specialty coffee and pastries in a warm, welcoming atmosphere. Experience the perfect blend of quality, tradition, and innovation."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765131923809-th5gx0f0.jpg"
          imageAlt="Coffee shop interior with cozy seating and warm lighting"
          frameStyle="card"
          ariaLabel="Hero section for Coffee Artisan coffee shop"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardSix
          title="Our Signature Blends"
          description="Discover our carefully curated selection of premium coffee beverages and fresh pastries"
          tag="Menu"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              name: "House Espresso",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765131924948-1xw2j6an.jpg",
              imageAlt: "Rich dark roast espresso shot"
            },
            {
              id: "2",
              name: "Silky Latte",
              price: "$4.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765131926475-azl8cxkt.jpg",
              imageAlt: "Creamy latte with latte art"
            },
            {
              id: "3",
              name: "Single Origin",
              price: "$4.25",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765131927951-jj1keyzk.jpg",
              imageAlt: "Premium single origin coffee beans"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Coffee Story"
          description="Founded in 2015, Coffee Artisan began with a simple mission: to bring exceptional coffee to our community. We source our beans from sustainable farms across the globe and roast them fresh daily in-house."
          tag="About Us"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          bulletPoints={[
            {
              title: "Ethically Sourced",
              description: "We partner with fair-trade coffee farms to ensure quality and sustainability",
              icon: Leaf
            },
            {
              title: "Fresh Roasted",
              description: "Our beans are roasted daily to guarantee the freshest flavor in every cup",
              icon: Flame
            },
            {
              title: "Expert Baristas",
              description: "Our team brings years of experience and passion for the craft",
              icon: Award
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765131928964-brwvd3q5.jpg"
          imageAlt="Cozy coffee shop interior"
          imagePosition="right"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFourteen
          title="What Our Customers Say"
          description="Real stories from coffee lovers who visit us daily"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Martinez",
              handle: "@sarahcoffelover",
              testimonial: "The best espresso in town! The baristas really know their craft and the atmosphere is so welcoming.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765131930378-4mnm787o.jpg",
              imageAlt: "Sarah Martinez"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@jamesmornings",
              testimonial: "I've tried coffee everywhere and this is consistently excellent. Their single origin beans are exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765131931332-0jp32uyr.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Wilson",
              handle: "@emmaeats",
              testimonial: "Perfect spot for morning meetings. Great coffee, amazing pastries, and such a cozy vibe!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765131932274-lso7q1op.jpg",
              imageAlt: "Emma Wilson"
            },
            {
              id: "4",
              name: "Michael Rodriguez",
              handle: "@michaelcoffee",
              testimonial: "Supporting local has never tasted so good. These guys really care about quality and sustainability.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765131933559-zrl16g6k.jpg",
              imageAlt: "Michael Rodriguez"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated"
          description="Subscribe to our newsletter for new menu items, special promotions, and exclusive coffee tips delivered to your inbox."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765131923809-th5gx0f0.jpg"
          imageAlt="Coffee shop ambiance"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Coffee Artisan"
          copyrightText="© 2025 Coffee Artisan. All rights reserved."
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Monday - Friday: 6am - 9pm", href: "#" },
                { label: "Saturday - Sunday: 8am - 8pm", href: "#" }
              ]
            },
            {
              title: "Location",
              items: [
                { label: "123 Main Street", href: "#" },
                { label: "Phone: (555) 123-4567", href: "#" }
              ]
            },
            {
              title: "Follow",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}