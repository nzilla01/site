import Image from "next/image";
import styles from "@/components/styles.module.css";
import Link from "next/link";
import { FaHome, FaProjectDiagram, FaServicestack, FaPhoneAlt, FaBlog } from "react-icons/fa";


export default function Nav() {  

    return(
        <>
        <header className=" flex justify-around align-center">
        <div>
          <Image src="/logo.png" alt="Atrivix Agency Logo" width={100} height={50} />
        </div>

        <nav>
          <ul className={`flex space-x-20  p-8 text-neutral-500 ${styles.navbar}`}>
            <Link className=" flex items-center rounded-md hover:text-neutral-100" href="/">
             <FaHome/> <span >Home</span>
            </Link>
            <Link className=" flex items-center rounded-md hover:text-neutral-100" href="/about">
              <FaProjectDiagram/> Project
            </Link>
            <Link className=" flex items-center rounded-md hover:text-neutral-100" href="/services">
              <FaServicestack/> Services
            </Link>
            <Link className="  flex items-center rounded-md hover:text-neutral-100" href="/contact">
             <FaPhoneAlt/> Contact
            </Link>
            <Link className=" flex items-center rounded-md hover:text-neutral-100" href="/blog">
             <FaBlog /> Blog
            </Link>
          </ul>
        </nav>
        </header>

        </>

    )
}