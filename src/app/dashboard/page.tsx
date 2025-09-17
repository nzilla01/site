"use client";
import { useState } from "react";
import styles from "@/app/dashboard/styles.module.css";
import { FaVideo, FaLaptopCode, FaChartLine } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import Review from "@/components/ui/review"
import BookingForm from "@/components/ui/bookingForm"


export default function Dashboard() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2">
      {/* Hero Section */}
      <div className={`h-[400px] ${styles.heroPage}`}>
        <div className="p-10 text-left">
          <h1 className="text-[#F0FFFF] ml-20 text-5xl font-black">Atrivix</h1>
          <h3 className="text-[#F0FFFF] text-3xl font-light">
            Building brands, boosting presence,
            <br /> and managing growth all in one solution.
          </h3>
        </div>
        <div className="p-5 flex mt-auto text-left">
          <p className="text-[#F0FFFF] text-2xl align-middle font-bold w-100">
            We turn ideas into impact — from websites and apps, to SEO, trading fund management, video editing, and content writing.
            Whatever your vision, we help you create, scale, and succeed.
            <span className="mt-5 justify-center text-xl font-bold flex">
              <button
                onClick={() => setIsOpen(true)}
               className="shadow-2xl bg-[#0d4c7f] text-[#F0FFFF] font-bold py-2 px-5 rounded-2xl">
                Book Now
              </button>
            </span>
          </p>
        </div>
      </div>

      {/* Services */}
      <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3  }}
            className={styles.services}
          >
      <div className="mt-10 text-center">
        <h3 className="text-3xl font-bold text-neutral-500  p-5">Our Services</h3>
        <div className="grid grid-cols-4 text-1xl text-neutral-500 font-serif">
          <div className="flex flex-col items-center">
            <FaVideo className={styles.videoIcon} />
            <p>VIDEO EDITING</p>
          </div>
          <div className="flex flex-col items-center">
            <FaLaptopCode className={styles.devIcon} />
            <p>DEVELOPMENT</p>
          </div>
          <div className="flex flex-col items-center">
            <MdDesignServices className={styles.designIcon} />
            <p>GRAPHIC DESIGN</p>
          </div>
          <div className="flex flex-col items-center">
            <FaChartLine className={styles.seoIcon} />
            <p>SEO RANKING</p>
          </div>
        </div>
      </div>
      </motion.div>

      {/* About / Service Details */}
      <div className={styles.about}>
        {/* Software Development */}
        <div className={`flex align-center mt-20 justify-around items-center shadow-md rounded-xl p-4`}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3  }}
            
          >
            <Image src="/images/coding.png" alt="Software Development" width={400} height={180} className={styles.imageContainer} />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3  }}
            
          >
            <h2 className="text-3xl text-center">Software Development</h2>
            <p className="w-[500px] text-neutral-500 text-2xl">
              From sleek mobile apps to dynamic web solutions, our software development services cover it all.
              We also provide hands-on classes to help you master the craft yourself!
            </p>
          </motion.div>
        </div>

        {/* Video Editing */}
        <div className={`flex align-center mt-20 justify-around items-center shadow-md rounded-xl p-4`}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3  }}
          >
            <h2 className="text-3xl text-center">Video Editing</h2>
            <p className="w-[500px] text-neutral-500 text-2xl">
              Unlock the power of visual storytelling with our professional video editing services.
              We transform raw footage into captivating content that stands out.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3  }}
          >
            <Image src="/images/editing.png" alt="Video Editing" width={400} height={180} className={styles.imageContainer} />
          </motion.div>
        </div>

        {/* Graphic Design */}
        <div className={`flex align-center mt-20 justify-around items-center shadow-md rounded-xl p-4 `}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3  }}
          >
            <Image src="/images/graphic.png" alt="Graphic Design" width={400} height={180} className={styles.imageContainer}  />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3  }}
          >
            <h2 className="text-3xl text-center">Graphic Design</h2>
            <p className="w-[500px] text-neutral-500 text-2xl">
              Elevate your brand with our creative graphic design services. From logos to marketing
              materials, we bring your vision to life.
            </p>
          </motion.div>
        </div>

        {/* SEO Ranking */}
        <div className={`flex align-center mt-20 justify-around items-center shadow-md rounded-xl p-4`}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3  }}
          >
            <h2 className="text-3xl text-center">SEO Ranking</h2>
            <p className="w-[500px] text-neutral-500 text-2xl">
              Boost your online visibility with our comprehensive SEO ranking services, including YouTube optimization.
              We optimize your website and content to climb search engine results and attract more traffic.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3  }}
          >
            <Image src="/images/seo.png" alt="SEO Ranking" width={400} height={180} className={styles.imageContainer}/>
          </motion.div>
        </div>
      </div>

      <div>
        <Review />
      </div>

       {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <BookingForm onClose={() => setIsOpen(false)} />
        </div>
      )}




      
    </div>
  );
}
