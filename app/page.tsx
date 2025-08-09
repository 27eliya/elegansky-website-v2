"use client"
import {useState} from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Typewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import CountUp from 'react-countup';
import {
  Bike,
  Smartphone,
  CheckCircle,
  Users,
  Clock,
  Shield,
  MapPin,
  Phone,
  Mail,
  Star,
  ArrowRight,
  Zap,
  Heart,
  HandCoins, DollarSign,
  ChevronLeft, ChevronRight, Quote
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// [
//               'Empowering Dreams, One iPhone at a Time.',
//               'Get a Motorcycle. Pay Daily. Own it.',
//               'Secure Instant Loans with Your iCloud Account.',
//               'Elegansky Microfinance – Lending Simplified.',
//             ]

const stats = [
  {
    icon: <HandCoins className="h-8 w-8 text-blue-600 mb-3" />,
    label: 'Loans Disbursed',
    value: 3250,
  },
  {
    icon: <DollarSign className="h-8 w-8 text-green-600 mb-3" />,
    label: 'Total Loan Value',
    value: 5400000,
    prefix: '$',
  },
  {
    icon: <Users className="h-8 w-8 text-purple-600 mb-3" />,
    label: 'Families Impacted',
    value: 1800,
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-teal-600 mb-3" />,
    label: 'Active Clients',
    value: 1225,
  },
];

export default function EleganskyMicrofinance() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      comment: "Elegansky gave me the motorbike I needed to start my food delivery service. Now I'm earning 3x more than my previous job and supporting my family better. The repayment terms were so flexible!",
      name: "Amina Hassan",
      location: "Kariakoo, Dar es Salaam",
      avatar: "/images/testimonials/lady comment pic2.png", // Your custom framed image
      role: "Food Delivery Entrepreneur"
    },
    {
      id: 2,
      comment: "The iPhone loan with iCloud security was revolutionary! No paperwork hassle, got approved in hours. Now I'm creating content and building my online business. Asante sana Elegansky!",
      name: "John Mwalimu", 
      location: "Masaki, Dar es Salaam",
      avatar: "/images/testimonials/boda guy 4.svg", // Your custom framed image
      role: "Digital Content Creator"
    },
    {
      id: 3,
      comment: "Started with one motorbike from Elegansky, now I have a fleet of 5! Their mentorship program helped me scale my business. They truly understand local entrepreneurs.",
      name: "Grace Kimaro",
      location: "Sinza, Dar es Salaam", 
      avatar: "/images/testimonials/boda guy.svg", // Your custom framed image
      role: "Transport Business Owner"
    },
    {
      id: 4,
      comment: "Elegansky gave me the motorbike I needed to start my food delivery service. Now I'm earning 3x more than my previous job and supporting my family better. The repayment terms were so flexible!",
      name: "Amina Hassan",
      location: "Kariakoo, Dar es Salaam",
      avatar: "/images/testimonials/boda guy 2.svg", // Your custom framed image
      role: "Food Delivery Entrepreneur"
    },
    {
      id: 5,
      comment: "The iPhone loan with iCloud security was revolutionary! No paperwork hassle, got approved in hours. Now I'm creating content and building my online business. Asante sana Elegansky!",
      name: "John Mwalimu", 
      location: "Masaki, Dar es Salaam",
      avatar: "/images/testimonials/boda guy 3.svg", // Your custom framed image
      role: "Digital Content Creator"
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            
            <div className="w-14 h-14 bg-gradient-to-r  rounded-lg flex items-center justify-center  overflow-hidden">
              <img 
                src="/elegansky/emblem_blue_no_bg.png" 
                alt="Elegansky microfinance Logo" 
                className="w-13 h-13 object-contain"
              />
            </div>
            <div>
              <span className="font-bold text-xl text-[#0f172a]">Elegansky</span>
              <p className="text-xs text-[#0f172a]">Microfinance</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="#products" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Loans
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Stories
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
           <Button className="bg-[#0f172a] hover:bg-[#173459] text-white shadow-lg px-6 py-2 rounded-full">
             Apply Now
          </Button>

          </div>
        </div>
      </nav> */}

      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">E</span>
            </div> */}
            <div className="w-14 h-14 bg-gradient-to-r  rounded-lg flex items-center justify-center  overflow-hidden">
              <img 
                src="/elegansky/emblem_blue_no_bg.png" 
                alt="Elegansky microfinance Logo" 
                className="w-13 h-13 object-contain"
              />
            </div>
            <div>
              <span className="font-bold text-xl text-[#0f172a]">Elegansky</span>
              <p className="text-xs text-[#0f172a]">Microfinance</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="#products" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Loans
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Stories
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
           <Button className="bg-[#0f172a] hover:bg-[#173459] text-white shadow-lg px-6 py-2 rounded-full">
             Apply Now
          </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 z-51 backdrop-blur-sm border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              href="#about" 
              className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#products" 
              className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Loans
            </Link>
            <Link 
              href="#testimonials" 
              className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Stories
            </Link>
            <Link 
              href="#contact" 
              className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="w-full bg-[#0f172a] hover:bg-[#173459] text-white shadow-lg py-3 rounded-lg mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </nav>

     {/* Banner Section - Starts after nav with proper spacing */}
     <section className="relative min-h-screen flex flex-col md:flex-row bg-[#0f172a] overflow-hidden mt-20">
      {/* Left: Text Content */}
      <div className="md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          <Typewriter
            words={[
              'Empowering Dreams,',
              'Get a Motorcycle.',
              'Secure Instant Loans',
              'Elegansky Microfinance',
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          We offer fast, secure loans backed by the tools you already use. Whether it's an iPhone loan using iCloud or owning a motorcycle through small daily payments — we've got you covered.
        </p>
        
        {/* <div className="flex flex-wrap gap-4">
          <button className="bg-white hover:bg-gray-100 text-[#0f172a] px-8 py-4 rounded-full text-lg sm:te font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            Apply Now
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg sm:text-md font-medium hover:bg-white hover:text-[#0f172a] transition-all hover:shadow-lg transform hover:scale-105">
            Learn More
          </button>
        </div> */}
         <div className="flex flex-wrap gap-4">
          <button className="bg-white hover:bg-gray-100 text-[#0f172a] px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            Apply Now
          </button>
          <button className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-white hover:text-[#0f172a] transition-all hover:shadow-lg transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Right: Full-width Image Slider without padding */}
      <div className="md:w-1/2 w-full relative h-[400px] md:h-auto">
        <div className="absolute inset-0 clip-slant z-0 w-full h-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000 }}
            className="w-full h-full"
          >
            {[
              'iphone man 1.1.png',
              'boda image 1.jpg',
              'iphone man 2.jpg',
              'boda image 5.jpg',
              'iphone man 3.1.png',
              'boda image 3.jpg',
              'iphone man 4.jpg',
              'boda image 4.jpg',
              'iphone man 5.jpg'
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={`/images/banner/${img}`}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover w-full h-full"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>


    <section id="about" className="py-20 bg-gradient-to-br from-[#53677a]/5 to-[#3e5165]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main heading section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#042a4c] mb-8 leading-tight">
              Empowering the future of<br />
              <span className="text-[#3e5165]">mobility in Tanzania</span>
            </h2>
            
            {/* Decorative line with colors */}
            {/* <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-3 h-3 bg-[#53677a] rounded-full"></div>
              <div className="w-3 h-3 bg-[#3e5165] rounded-full"></div>
              <div className="w-3 h-3 bg-[#475d6a] rounded-full"></div>
              <div className="w-8 h-3 bg-[#2f475a] rounded-full"></div>
              <div className="w-6 h-3 bg-[#253a4f] rounded-full"></div>
              <div className="w-4 h-3 bg-[#1c3c64] rounded-full"></div>
              <div className="w-3 h-3 bg-[#041c32] rounded-full"></div>
              <div className="w-3 h-3 bg-[#04132e] rounded-full"></div>
            </div> */}

            <div className="flex justify-center items-center space-x-2 mb-8"> 
              <div className="w-3 h-3 bg-[#A5BE00] rounded-full"></div> {/* Greenish */}
              <div className="w-3 h-3 bg-[#FB6107] rounded-full"></div> {/* Orange */}
              <div className="w-3 h-3 bg-[#53677a] rounded-full"></div>
              <div className="w-3 h-3 bg-[#3e5165] rounded-full"></div>
              <div className="w-8 h-3 bg-[#2f475a] rounded-full"></div>
              <div className="w-6 h-3 bg-[#A5BE00] rounded-full"></div> {/* Reuse green */}
              <div className="w-4 h-3 bg-[#FB6107] rounded-full"></div> {/* Reuse orange */}
              <div className="w-3 h-3 bg-[#1c3c64] rounded-full"></div>
              <div className="w-3 h-3 bg-[#041c32] rounded-full"></div>
            </div>

            
            <p className="text-xl text-[#53677a] max-w-4xl mx-auto font-medium leading-relaxed">
              Elegansky offers asset financing to meaningfully improve employment and 
              opportunities for those with the greatest barriers to access financial services.
            </p>
          </div>

          {/* Statistics section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
            <div className="space-y-2">
              
              <div className="text-5xl md:text-6xl font-bold text-[#3e5165]">
                <CountUp end={3} duration={2.5} suffix="+" />
              </div>
              <div className="text-[#042a4c] font-semibold text-lg">Regions & growing</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-[#3e5165]">
                <CountUp end={150} duration={2.5} suffix="+" />
              </div>
              <div className="text-[#042a4c] font-semibold text-lg">Entrepreneurs</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-[#3e5165]">
                <CountUp end={500} duration={2.5} suffix="+" />
              </div>
              <div className="text-[#042a4c] font-semibold text-lg">Loans</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-[#3e5165]">
                <CountUp end={2000} duration={2.5} suffix="+" />
              </div>
              <div className="text-[#042a4c] font-semibold text-lg">Lives impacted</div>
            </div>
          </div>

          {/* Story section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/elegansky/frame_office_v4.png"
                //src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Elegansky office in Kijichi"
                width={600}
                height={400}
                //className="rounded-lg shadow-xl border border-[#53677a]/20"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-[#042a4c] mb-4">Our Story</h3>
                <p className="text-[#53677a] leading-relaxed text-lg">
                  Founded in the heart of Kijichi, Mbagala Kuu, Elegansky Microfinance was born from a simple belief:
                  every Tanzanian entrepreneur deserves access to the tools they need to succeed. We've revolutionized
                  microfinance by combining traditional community values with cutting-edge technology.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#042a4c] mb-4">Innovation Meets Tradition</h3>
                <p className="text-[#53677a] leading-relaxed text-lg">
                  Our groundbreaking iCloud-based loan model for smartphones eliminates traditional paperwork
                  barriers. By leveraging technology that's already in your pocket, we make financing accessible,
                  fast, and secure for the digital generation of Tanzanian entrepreneurs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#53677a]/10 to-[#3e5165]/10 p-8 rounded-xl border border-[#53677a]/20">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-[#3e5165] mr-3" />
                  <span className="font-bold text-[#042a4c] text-xl">Based in Kijichi, Mbagala Kuu</span>
                </div>
                <p className="text-[#53677a] text-lg font-medium">
                  Rooted in our community, we understand the unique challenges and opportunities facing Dar es Salaam
                  entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="w-full bg-[#0f172a]">
  {/* Motorcycle Loan Row */}
  <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-[#0f172a]">
    {/* Left: Transparent Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        //src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
        src="/images/motorcycle image blue.png" // use transparent PNG
        alt="Motorcycle Loan"
        width={600}
        height={600}
        className="object-contain"
      />
    </div>

    {/* Right: Text #e0f2f1*/}
    <div className="w-full md:w-1/2 space-y-6 mt-10 md:mt-0 text-center md:text-left">
      <Bike className="text-[#A5BE00] h-10 w-10 mx-auto md:mx-0" />
      <h2 className="text-4xl font-bold text-gray-300">2-Wheeler Loans for Entrepreneurs</h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        Empowering youth in Tanzania with flexible, daily-pay motorcycle loans. Kickstart your journey to independence and income today.
      </p>
      <div className="flex justify-center md:justify-start gap-4">
        <Button className="bg-[#042a4c] text-white px-6 py-3 rounded-full">Apply Now</Button>
        <Button variant="outline" className="border-[#042a4c] text-[#042a4c] px-6 py-3 rounded-full">Learn More</Button>
      </div>
    </div>
  </div>

  {/* iPhone Loan Row (Reverse) */}
  <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-[#dceff6]">
    {/* Left: Text */}
    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mt-10 md:mt-0">
      
      <Smartphone className="text-[#FB6107] h-10 w-10 mx-auto md:mx-0" />
      <h2 className="text-4xl font-bold text-[#2f475a]">iPhone iCloud-Secured Loans</h2>
      <p className="text-lg text-[#3e5165] leading-relaxed">
        Use your iPhone’s iCloud account as collateral. No paperwork. Just fast, secure access to financing for Tanzania’s digital entrepreneurs.
      </p>
      <div className="flex justify-center md:justify-start gap-4">
        <Button className="bg-[#2f475a] text-white px-6 py-3 rounded-full">Apply Now</Button>
        <Button variant="outline" className="border-[#2f475a] text-[#2f475a] px-6 py-3 rounded-full">Learn More</Button>
      </div>
    </div>

    {/* Right: Transparent Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        //src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
        src="/images/iphone image.png" // use transparent PNG
        alt="iPhone Loan"
        width={500}
        height={500}
        className="object-contain"
      />
    </div>
  </div>
</section>

 <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real entrepreneurs, real success stories from across Dar es Salaam
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-[#0f172a]" />
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-white">
                    <img
                      src={currentData.avatar}
                      alt={currentData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex-1 text-center md:text-left">
                  {/* Comment */}
                  <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
                    "{currentData.comment}"
                  </p>
                  
                  {/* Person Details */}
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-1">
                      {currentData.name}
                    </h4>
                    <p className="text-gray-500 text-sm md:text-base mb-1">
                      {currentData.role}
                    </p>
                    <p className="text-gray-400 text-sm">
                      📍 {currentData.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center md:justify-end gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-[#0f172a] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-[#0f172a] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-[#0f172a] w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Elegansky?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just a lender – we're your partner in entrepreneurial success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Approvals</h3>
                <p className="text-gray-600">
                  Get approved in hours, not weeks. Our streamlined process gets you funded quickly.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community-Rooted</h3>
                <p className="text-gray-600">
                  Based in Kijichi, we understand local challenges and opportunities intimately.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovative Technology</h3>
                <p className="text-gray-600">
                  Our iCloud-based loan model eliminates paperwork and speeds up the process.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Terms</h3>
                <p className="text-gray-600">
                  No hidden fees, clear repayment schedules, and honest communication always.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#042a4c] via-[#041c32] to-[#04132e] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#53677a]/10 to-[#2f475a]/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-[#53677a] font-medium">
              Join thousands of successful entrepreneurs who started with Elegansky Microfinance. Your business dreams
              are just one application away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#3e5165] to-[#475d6a] hover:from-[#2f475a] hover:to-[#3e5165] text-white px-8 py-4 text-lg shadow-lg transition-all duration-300">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#53677a] text-white hover:bg-[#53677a] hover:text-white px-8 py-4 text-lg bg-transparent transition-all duration-300"
              >
                Call Us: +255 123 456 789
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
        <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#042a4c] mb-6">Contact & Location</h2>
            <p className="text-xl text-[#53677a] max-w-3xl mx-auto font-medium">
              Visit us in Kijichi or get in touch – we're here to help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#042a4c] mb-6">Get In Touch</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#53677a]/20 to-[#3e5165]/20 rounded-lg flex items-center justify-center border border-[#53677a]/30">
                      <MapPin className="h-6 w-6 text-[#3e5165]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#042a4c]">Our Office</p>
                      <p className="text-[#53677a]">Kijichi, Mbagala Kuu, Dar es Salaam, Tanzania</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#475d6a]/20 to-[#2f475a]/20 rounded-lg flex items-center justify-center border border-[#475d6a]/30">
                      <Phone className="h-6 w-6 text-[#2f475a]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#042a4c]">Phone & WhatsApp</p>
                      <p className="text-[#53677a]">+255 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1c3c64]/20 to-[#253a4f]/20 rounded-lg flex items-center justify-center border border-[#1c3c64]/30">
                      <Mail className="h-6 w-6 text-[#253a4f]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#042a4c]">Email</p>
                      <p className="text-[#53677a]">info@elegansky.co.tz</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-[#53677a]/10 to-[#3e5165]/10 rounded-lg overflow-hidden border border-[#53677a]/20">
                {/* <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
                  alt="Map showing Elegansky office location in Kijichi"
                  width={400}
                  height={250}
                  className="w-full"
                /> */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2030163.9381014358!2d34.9899!3d-6.372825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x55d3d69e8786c6f%3A0x47aeaea59ecb0eff!2sELEGANSKY%20MICROFINCE!5e0!3m2!1sen!2stz!4v1754378937512!5m2!1sen!2stz"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                 // allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-[#53677a]/5 to-[#3e5165]/5 p-6 rounded-lg border border-[#53677a]/20">
                <h4 className="font-semibold text-[#042a4c] mb-4">Office Hours</h4>
                <div className="space-y-2 text-sm text-[#53677a]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-[#3e5165]">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-[#042a4c] mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#042a4c] mb-2">First Name</label>
                    <Input 
                      placeholder="Your first name" 
                      className="border-[#53677a]/30 focus:border-[#3e5165] focus:ring-[#3e5165]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#042a4c] mb-2">Last Name</label>
                    <Input 
                      placeholder="Your last name" 
                      className="border-[#53677a]/30 focus:border-[#3e5165] focus:ring-[#3e5165]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#042a4c] mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="border-[#53677a]/30 focus:border-[#3e5165] focus:ring-[#3e5165]/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#042a4c] mb-2">Phone</label>
                  <Input 
                    placeholder="+255 123 456 789" 
                    className="border-[#53677a]/30 focus:border-[#3e5165] focus:ring-[#3e5165]/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#042a4c] mb-2">Loan Interest</label>
                  <select className="w-full p-3 border border-[#53677a]/30 rounded-md focus:ring-2 focus:ring-[#3e5165]/20 focus:border-[#3e5165] text-[#53677a]">
                    <option>Select loan type</option>
                    <option>2-Wheeler Asset Loan</option>
                    <option>iPhone Loan (iCloud-secured)</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#042a4c] mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your business plans or ask any questions..." 
                    rows={4} 
                    className="border-[#53677a]/30 focus:border-[#3e5165] focus:ring-[#3e5165]/20"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-[#3e5165] to-[#475d6a] hover:from-[#2f475a] hover:to-[#3e5165] text-white shadow-lg transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Footer 
      <footer className="bg-gray-900 text-white py-12">*/}
      <footer className="bg-gray-900 text-white py-12 relative z-10 slanted-top">

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              
              {/* <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-23 h-23 bg-gradient-to-r  rounded-lg flex items-center justify-center  overflow-hidden">
                    <img 
                      src="/elegansky/logo_no_bg.png" 
                      alt="Elegansky microfinance Logo" 
                      className="w-20 h-20"
                    />
                  </div>
                  
                </div>
                <p className="text-gray-200 mb-4 max-w-md">
                  Empowering Tanzanian entrepreneurs with innovative microfinance solutions. Based in Kijichi, Mbagala
                  Kuu, rooted in our community.
                </p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                      f
                    </div>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                      t
                    </div>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                      i
                    </div>
                  </Link>
                </div>
              </div> */}

            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 pt-4">
                {/* Logo */}
                <div className="w-[120px] h-[120px] rounded-lg overflow-hidden shrink-0">
                  <img 
                    src="/elegansky/logo_no_bg.png" 
                    alt="Elegansky Microfinance Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Description + Socials */}
                <div className="flex-1">
                  <p className="text-gray-200 mb-4 max-w-md">
                    Empowering Tanzanian entrepreneurs with innovative microfinance solutions. Based in Kijichi, Mbagala
                    Kuu, rooted in our community.
                  </p>

                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <FaFacebookF className="text-white w-4 h-4" />
                    </div>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                      <FaTwitter className="text-white w-4 h-4" />
                    </div>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                      <FaInstagram className="text-white w-4 h-4" />
                    </div>
                  </Link>
                </div>

                </div>
              </div>
            </div>


              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#products" className="hover:text-white transition-colors">
                      Loan Products
                    </Link>
                  </li>
                  <li>
                    <Link href="#testimonials" className="hover:text-white transition-colors">
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Loan Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Complaints
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} Elegansky Microfinance. All rights reserved. | Licensed by Bank of
                Tanzania
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
