"use client";

import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const allAlumni = [
  {
    id: 1,
    name: "Major Mohammad Naim Uddin",
    designation: "Faculty, MIST",
    company: "",
    graduationYear: "2018",
    image: "/alumni/Major Mohammad Naim Uddin.jpeg",
  },
  {
    id: 2,
    name: "Humayun Kabir Raju",
    designation: "MD, Unipolar Automation Technologies Ltd",
    company: "",
    graduationYear: "2019",
    image: "/alumni/Humayun Kabir Raju.jpeg",
  },
  {
    id: 3,
    name: "Himadri Deb",
    designation: "SDE, RHD",
    company: "",
    graduationYear: "2017",
    image: "/alumni/Himadri Deb.jpeg",
  },
  {
    id: 4,
    name: "Zeeshan Haque",
    designation: "SWE, Ex-Google",
    company: "",
    graduationYear: "2020",
    image: "/alumni/Zeeshan Haque.jpeg",
  },
  {
    id: 5,
    name: "Mahmudul Russel",
    designation: "KTH Royal Institute of Technology",
    company: "",
    graduationYear: "2020",
    image: "/alumni/Mahmudul Russel.jpg",
  },
  {
    id: 6,
    name: "Ashif Newaz",
    designation: "Manager, Syngenta",
    company: "",
    graduationYear: "2020",
    image: "/alumni/Ashif Newaz.jpg",
  },
  {
    id: 7,
    name: "Pradipta Saha",
    designation: "Syngenta",
    company: "",
    graduationYear: "2020",
    image: "/alumni/Pradipta Saha.jpg",
  },
  {
    id: 8,
    name: "A. M. Atik",
    designation: "University of Agder",
    company: "",
    graduationYear: "2021",
    image: "/alumni/A. M. Atik.jpg",
  },
  {
    id: 9,
    name: "Sharowar Hassan Ratul",
    designation: "Manager, BDDE",
    company: "",
    graduationYear: "2021",
    image: "/alumni/Sharowar Hassan Ratul.jpg",
  },
  {
    id: 10,
    name: "Syed Rezaul Haque Pidim",
    designation: "Nestle",
    company: "",
    graduationYear: "2021",
    image: "/alumni/Syed Rezaul Haque Pidim.jpg",
  },
  {
    id: 11,
    name: "Ahamed Nasif Hossain Aoyon",
    designation: "System Engineering Ltd.",
    company: "",
    graduationYear: "2022",
    image: "/alumni/Ahamed Nasif Hossain Aoyon.jpg",
  },
  {
    id: 12,
    name: "Reshad Ibn Momin",
    designation: "Ex-President, RMA",
    company: "",
    graduationYear: "2022",
    image: "/alumni/Reshad Ibn Momin.jpg",
  },
  {
    id: 13,
    name: "Shahed Mehbub",
    designation: "Manager, Intercloud Ltd",
    company: "",
    graduationYear: "2022",
    image: "/alumni/Shahed Mehbub.jpg",
  },
  {
    id: 14,
    name: "Asif Sabir",
    designation: "NexGen Cloud",
    company: "",
    graduationYear: "2022",
    image: "/alumni/Asif Sabir.jpg",
  },
  {
    id: 15,
    name: "Arnab Paul",
    designation: "Ex-President, RMA",
    company: "",
    graduationYear: "2022",
    image: "",
  },
  {
    id: 16,
    name: "Shafin Hasnat",
    company: "",
    designation: "Brac-IT",
    graduationYear: "2022",
    image: "/alumni/Shafin Hasnat.jpg",
  },
  {
    id: 17,
    name: "Alvi Ahmmed",
    company: "",
    designation: "The University of Texas at Arlington",
    graduationYear: "2022",
    image: "/alumni/Alvi Ahmmed.jpg",
  },
  {
    id: 18,
    name: "Adittya Barua",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Adittya Barua.png",
  },
  {
    id: 19,
    name: "Adittya Chowdhury Joy",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Adittya Chowdhury Joy.png",
  },
  {
    id: 20,
    name: "Ariful Islam",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Ariful Islam.png",
  },
  {
    id: 21,
    name: "Arka Chakrabarty",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Arka Chakrabarty.png",
  },
  {
    id: 22,
    name: "Arnab Das Anik",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Arnab Das Anik.png",
  },
  {
    id: 23,
    name: "Asher Inthezam Tahbir",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Asher Inthezam Tahbir.png",
  },
  {
    id: 24,
    name: "Ashfaque Uddin Ahmed",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Ashfaque Uddin Ahmed.png",
  },
  {
    id: 25,
    name: "Avishak Talukdar",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Avishak Talukdar.png",
  },
  {
    id: 26,
    name: "Durgesh Das",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Durgesh Das.png",
  },
  {
    id: 27,
    name: "Gazi Md. Safi Rayhan",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Gazi Md. Safi Rayhan.png",
  },
  {
    id: 28,
    name: "Imnul Haque Ruman Talukder",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Imnul Haque Ruman Talukder.png",
  },
  {
    id: 29,
    name: "Jamil Hossain",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Jamil Hossain.png",
  },
  {
    id: 30,
    name: "Joy Barman Sagar",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Joy Barman Sagar.png",
  },
  {
    id: 31,
    name: "K.M. Nafi Asib",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/K.M. Nafi Asib.png",
  },
  {
    id: 32,
    name: "Khowshik Dey",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Khowshik Dey.png",
  },
  {
    id: 33,
    name: "M Tanvir Ahmed Rasel",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/M Tanvir Ahmed Rasel.png",
  },
  {
    id: 34,
    name: "Md Jahid Hassan",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Md Jahid Hassan.png",
  },
  {
    id: 35,
    name: "Md. Bulbul Ahmed Rubel",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Md. Bulbul Ahmed Rubel.png",
  },
  {
    id: 36,
    name: "Md. Eshrak Jamil",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Md. Eshrak Jamil.png",
  },
  {
    id: 37,
    name: "Md. Mamunur Rahman",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Md. Mamunur Rahman.png",
  },
  {
    id: 38,
    name: "Md. Mosaddek Habib Murad",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Md. Mosaddek Habib Murad.png",
  },
  {
    id: 39,
    name: "Md. Sakif Uddin Khan",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Md. Sakif Uddin Khan.png",
  },
  {
    id: 40,
    name: "Md. Shafin Hossain",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Md. Shafin Hossain.png",
  },
  {
    id: 41,
    name: "Md. Shihab Mortuza",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Md. Shihab Mortuza.png",
  },
  {
    id: 42,
    name: "Md. Tohidul Islam Khan",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Md. Tohidul Islam Khan.png",
  },
  {
    id: 43,
    name: "Mezba Habib",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Mezba Habib.png",
  },
  {
    id: 44,
    name: "Mohammad Abdullah Tajwar",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Mohammad Abdullah Tajwar.png",
  },
  {
    id: 45,
    name: "Mohammad Iqbal Hossain",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Mohammad Iqbal Hossain.png",
  },
  {
    id: 46,
    name: "Mohammad Tamjidul Azam",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Mohammad Tamjidul Azam.png",
  },
  {
    id: 47,
    name: "Moin Uddin Ahmed Babar",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Moin Uddin Ahmed Babar.png",
  },
  {
    id: 48,
    name: "Neloy Bhowmik",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Neloy Bhowmik.png",
  },
  {
    id: 49,
    name: "Raihan Islam",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Raihan Islam.png",
  },
  {
    id: 50,
    name: "S M Rubayet Khan",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/S M Rubayet Khan.png",
  },
  {
    id: 51,
    name: "Sakib Ahmed",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Sakib Ahmed.png",
  },
  {
    id: 52,
    name: "Shishir Chandra Das",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Shishir Chandra Das.png",
  },
  {
    id: 53,
    name: "Shurid Singha",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Shurid Singha.png",
  },
  {
    id: 54,
    name: "Suparna Sen",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Suparna Sen.png",
  },
  {
    id: 55,
    name: "Tanveer Razuan Badhon",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Tanveer Razuan Badhon.png",
  },
  {
    id: 56,
    name: "Tanwi Chakraborty",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Tanwi Chakraborty.png",
  },
  {
    id: 57,
    name: "Tashriful Huda Toushi",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Tashriful Huda Toushi.png",
  },
  {
    id: 58,
    name: "Tonmoy Kanti Saha",
    designation: "",
    company: "",
    graduationYear: "",
    image: "/alumni/Tonmoy Kanti Saha.png",
  },
];

export function AlumniSection() {
  const [isHovered, setIsHovered] = useState(false);

  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnLastSnap: false,
    })
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
    plugin.current.stop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    plugin.current.play();
  };

  const getGraduationBadge = (year: string) => {
    return (
      <motion.div
        initial={{ scale: 0, rotate: -15, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          bounce: 0.4,
          delay: 0.2,
        }}
        className="relative group"
      >
        {/* Animated background glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 rounded-xl blur-sm"
        />

        {/* Main badge container */}
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: 2,
            y: -2,
          }}
          className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 dark:from-slate-100 dark:via-gray-100 dark:to-slate-200 rounded-xl shadow-lg border border-slate-700/50 dark:border-slate-300/50 backdrop-blur-sm overflow-hidden"
        >
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600" />

          {/* Content */}
          <div className="px-4 py-2.5 flex items-center space-x-2.5">
            {/* Graduation cap icon */}
            <motion.div
              animate={{
                rotate: [0, -5, 5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="flex-shrink-0"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                <GraduationCap className="h-3.5 w-3.5 text-white" />
              </div>
            </motion.div>

            {/* Text content */}
            <div className="flex flex-col leading-none">
              <span className="text-xs font-medium text-slate-400 dark:text-slate-600 uppercase tracking-wider">
                Class of
              </span>
              <span className="text-sm font-bold text-white dark:text-slate-900 tracking-wide">
                {year}
              </span>
            </div>
          </div>

          {/* Shine effect */}
          <motion.div
            animate={{
              x: [-100, 100],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />

          {/* Decorative corner elements */}
          <div className="absolute top-1 right-1 w-1 h-1 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60" />
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full opacity-60" />
        </motion.div>

        {/* Floating particles effect */}
        <motion.div
          animate={{
            y: [-2, -8, -2],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-sm"
        />
      </motion.div>
    );
  };

  const AlumniCard = ({ alumni }: { alumni: (typeof allAlumni)[0] }) => (
    <Card className="group hover-transition hover:shadow-lg bg-card border-border h-full relative overflow-hidden mx-auto max-w-sm">
      {/* Graduation Year Badge - Positioned with better spacing */}
      {/* <div className="absolute top-4 right-4 z-10">
        {getGraduationBadge(alumni.graduationYear)}
      </div> */}

      <CardContent className="p-8 text-center">
        <div className="mb-8 pt-4">
          <motion.div
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="sm:w-64 sm:h-64 w-48 h-48 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/20 flex items-center justify-center relative"
          >
            {/* <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-2"
              >
                <span className="text-xl">🎓</span>
              </motion.div>
              <span className="text-xs text-muted-foreground">Alumni</span>
            </div> */}
            <img
              src={alumni.image || "/placeholder.svg?height=300&width=300"}
              alt={alumni.name}
              className="w-full h-full object-cover rounded-full"
            />

            {/* Success indicator */}
            {/* <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white text-xs">✓</span>
            </motion.div> */}
          </motion.div>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-2">
          {alumni.name}
        </h3>
        <p className="text-primary font-medium mb-1">{alumni.designation}</p>
        <div className="flex items-center justify-center space-x-2 mb-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-1 text-muted-foreground"
          >
            {/* <ExternalLink className="h-3 w-3" /> */}
            <span className="text-sm font-medium">{alumni.company}</span>
          </motion.div>
        </div>

        <div className="flex justify-center space-x-4">
          {[Mail, Linkedin, Facebook].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="icon"
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground hover-transition bg-transparent"
              >
                <Icon className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="text-center mb-20">
          <h2 className="section-heading text-foreground mb-6">
            Our <span className="text-primary">Alumni</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proud graduates making their mark in the world of technology and
            innovation
          </p>
        </AnimatedSection>

        {/* Carousel for All Screen Sizes */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allAlumni.map((alumni) => (
                <CarouselItem
                  key={alumni.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlumniCard alumni={alumni} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Buttons */}
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-primary-foreground border-0 shadow-lg w-12 h-12 rounded-full z-10">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-primary-foreground border-0 shadow-lg w-12 h-12 rounded-full z-10">
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </Carousel>

          {/* Auto-play Status Indicator */}
          {/* <div className="flex justify-center mt-6 space-x-2 items-center">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(allAlumni.length / 3) }).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted-foreground/30 transition-colors duration-300"
                />
              ))}
            </div>
            <div className="ml-4 flex items-center space-x-2">
              <div
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  isHovered ? "bg-red-400" : "bg-green-400"
                }`}
              />
              <span className="text-xs text-muted-foreground">{isHovered ? "Paused" : "Auto-play"}</span>
            </div>
          </div>*/}
        </div>

        {/* Alumni Stats */}
        <AnimatedSection delay={0.7} className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="text-center p-6 bg-card rounded-lg card-shadow border border-border"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-4xl font-bold text-primary mb-3"
              >
                500+
              </motion.div>
              <div className="text-muted-foreground">Total Alumni</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="text-center p-6 bg-card rounded-lg card-shadow border border-border"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="text-4xl font-bold text-primary mb-3"
              >
                50+
              </motion.div>
              <div className="text-muted-foreground">Companies Worldwide</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="text-center p-6 bg-card rounded-lg card-shadow border border-border"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-4xl font-bold text-primary mb-3"
              >
                25+
              </motion.div>
              <div className="text-muted-foreground">Countries</div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
