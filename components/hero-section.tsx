"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 4.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.21, 1.11, 0.81, 0.99],
      },
    },
  };

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Animated Background Image */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 w-full h-full"
      >
        {/* Gradient fallback */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        {/* Responsive Image */}
        <Image
          src="/landing_page_hero.jpg"
          alt="Robotics and technology background"
          fill
          className="object-cover object-center"
          style={{
            objectPosition: "center center",
          }}
          priority
          sizes="100vw"
        />

        {/* Lighter overlay to show more of the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        {/* Optional: Add a subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center text-white w-full max-w-5xl mx-auto px-4 sm:px-6"
      >
        <motion.h1
          variants={itemVariants}
          className="mb-6 sm:mb-8 leading-tight text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold"
        >
          RoboMechatronics
          <motion.span variants={itemVariants} className="block text-accent">
            Association
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/90 max-w-3xl mx-auto px-4"
        >
          Innovating Tomorrow Through Robotics and Technology
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto"
            >
              Join Our Community
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto bg-transparent"
            >
              <Link href="#about" className="text-white hover:text-white">
                Learn More
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// "use client";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export function HeroSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 4.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//       scale: 0.95,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.21, 1.11, 0.81, 0.99],
//       },
//     },
//   };

//   const backgroundVariants = {
//     hidden: { scale: 1.1, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 1.2,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden w-full">
//       {/* Animated Background Image with Gradient Fallback */}
//       <motion.div
//         variants={backgroundVariants}
//         initial="hidden"
//         animate="visible"
//         className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
//       >
//         <img
//           src="/landing_page_hero.jpg"
//           className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
//         />
//         {/* Lighter overlay to show more of the image */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
//         {/* Optional: Add a subtle vignette effect */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
//       </motion.div>

//       {/* Content */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 text-center text-white w-full max-w-5xl mx-auto px-4 sm:px-6"
//       >
//         <motion.h1
//           variants={itemVariants}
//           className="mb-8 leading-tight text-white text-4xl md:text-6xl lg:text-7xl font-bold"
//         >
//           RoboMechatronics
//           <motion.span variants={itemVariants} className="block text-accent">
//             Association
//           </motion.span>
//         </motion.h1>

//         <motion.p
//           variants={itemVariants}
//           className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto px-4"
//         >
//           Innovating Tomorrow Through Robotics and Technology
//         </motion.p>

//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row gap-6 justify-center px-4"
//         >
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button
//               size="lg"
//               className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg font-medium w-full sm:w-auto"
//             >
//               Join Our Community
//             </Button>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-medium w-full sm:w-auto bg-transparent"
//             >
//               <Link href="#about" className="text-white hover:text-white">
//                 Learn More
//               </Link>
//             </Button>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// "use client"

// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { motion } from "framer-motion"

// export function HeroSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 4.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//       scale: 0.95,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.21, 1.11, 0.81, 0.99],
//       },
//     },
//   }

//   const backgroundVariants = {
//     hidden: { scale: 1.1, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 1.2,
//         ease: "easeOut",
//       },
//     },
//   }

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden w-full">
//       {/* Animated Background */}
//       <motion.div
//         variants={backgroundVariants}
//         initial="hidden"
//         animate="visible"
//         className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent w-full"
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 dark:from-black/80 dark:to-black/60" />
//       </motion.div>

//       {/* Content */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 text-center text-white w-full max-w-5xl mx-auto px-4 sm:px-6"
//       >
//         <motion.h1 variants={itemVariants} className="mb-8 leading-tight text-white">
//           RoboMechatronics
//           <motion.span variants={itemVariants} className="block text-accent">
//             Association
//           </motion.span>
//         </motion.h1>

//         <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto px-4">
//           Innovating Tomorrow Through Robotics and Technology
//         </motion.p>

//         <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center px-4">
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button
//               size="lg"
//               className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg font-medium w-full sm:w-auto"
//             >
//               Join Our Community
//             </Button>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-medium dark:text-white dark:hover:text-white light:text-black light:hover:text-black w-full sm:w-auto"
//             >
//               <Link href="#about" className="text-black dark:text-white">
//                 Learn More
//               </Link>
//             </Button>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }
