import React from "react";
import { navLinks } from "../../Constants/index.js";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);
gsap.registerP


const NavBar = () => {
    // Custom Hook for GSAP Animations
  useGSAP(() => {
    // Option 1: Reversible animation (fixes your current issue)
    gsap.fromTo("nav", {
      backgroundColor: "rgba(0,0,0,0)",
      backdropFilter: "blur(0px) saturate(100%)",
      WebkitBackdropFilter: "blur(0px) saturate(100%)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    },
    {
      backgroundColor: "rgba(0,0,0,0.30)",
      backdropFilter: "blur(8px) saturate(160%)",
      WebkitBackdropFilter: "blur(8px) saturate(160%)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "body",
        start: "100px top",
        end: "200px top",
        scrub: 1, // This makes it reversible and smooth
        toggleActions: "play none none reverse" // This ensures it reverses
      }
    });
  })
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/logo.jpg" alt="logo" className="w-10 h-10" />
                    <p>RealEstate</p>
                </a>

            <ul className="flex space-x-4">
                {navLinks.map(link => (
                    <li key={link.id}>
                        <a href={`#${link.id}`} className="text-black hover:text-gold">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;








