"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import styles from "@/components/styles.module.css";

const reviews = [
  { id: 1, name: "Alice", img: "/images/profile1.png", rating: 5, comment: "Excellent service!" },
  { id: 2, name: "Bob", img: "/images/profile2.png", rating: 4, comment: "Very good, happy with it." },
  { id: 3, name: "Charlie", img: "/images/profile3.png", rating: 5, comment: "Loved it!" },
  { id: 4, name: "Diana", img: "/images/profile4.png", rating: 4, comment: "Great, but room for improvement." },
  { id: 5, name: "Ethan", img: "/images/profile5.png", rating: 5, comment: "Perfect experience!" },
  { id: 6, name: "Fiona", img: "/images/profile6.png", rating: 4, comment: "Good overall." },
];

const ReviewStars = ({ rating }) => (
  <div>
    {Array(5)
      .fill()
      .map((_, i) => (
        <span key={i}>{i < rating ? "⭐" : "☆"}</span>
      ))}
  </div>
);

export default function AutoScrollReviews() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"], // scroll from start to end
      transition: {
        x: {
          repeat: Infinity, // loop infinitely
          repeatType: "loop",
          duration: 20, // speed of scroll
          ease: "linear", // smooth constant speed
        },
      },
    });
  }, [controls]);

  return (
    <div className="mt-20 overflow-hidden">
      <motion.div
        className="flex gap-6 w-max"
        animate={controls}
      >
        {/* Duplicate reviews to make the infinite scroll smooth */}
        {[...reviews, ...reviews].map((review, index) => (
          <figure
            key={index}
            className="flex-shrink-0 w-64 flex flex-col items-center text-center shadow-md rounded-xl p-4 bg-white"
          >
            <Image
              src={review.img}
              alt={review.name}
              width={80}
              height={80}
              className={styles.reviewImages}
            />
            <figcaption className="mt-2">
              <h4 className="font-semibold">{review.name}</h4>
              <ReviewStars rating={review.rating} />
              <p className="text-sm mt-1">{review.comment}</p>
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </div>
  );
}
