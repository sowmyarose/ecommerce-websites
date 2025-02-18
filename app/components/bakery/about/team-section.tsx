"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const members = [
  {
    name: "Sarah B.",
    role: "Head Pastry Chef",
    image: "/person1.jpg",
  },
  {
    name: "Jona D.",
    role: "Cake Designer",
    image: "/person2.jpg",
  },
  {
    name: "Emma R.",
    role: "Baking Specialist",
    image: "/person3.jpg",
  },
];

const memberMedia = [
  { name: "facebook", icon: "/facebook.svg", color: "bg-[#3b5998]" },
  { name: "twitter", icon: "/twitter.svg", color: "bg-[#1da1f2]" },
  { name: "instagram", icon: "/instagram.svg", color: "bg-[#c32aa3]" },
];

export default function Team() {
  const [isHovered, setIsHovered] = useState<any>({});

  return (
    <section className="w-full bg-white px-2 py-6">
      <h2 className="text-3xl font-semibold text-[#ad64ed] text-center">
        Meet Our Team
      </h2>
      <div className="w-full rounded-[50px] bg-[#e6d1fa] mt-8 flex flex-col py-4 px-4 md:p-8 items-center min-h-[500px]">
        <p className="text-gray-600 mt-4 text-center">
          Our team of expert bakers and pastry chefs work passionately to bring
          you the best flavors and designs. Each cake is made with love and
          creativity.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-6 mt-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="w-full p-4 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onMouseEnter={() =>
                setIsHovered((prev: any) => ({ ...prev, [member.name]: true }))
              }
              onMouseLeave={() =>
                setIsHovered((prev: any) => ({ ...prev, [member.name]: false }))
              }
            >
              <div className="bg-white text-center rounded-xl overflow-hidden shadow-lg p-6 relative">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto my-4 relative flex">
                  <Image
                    src={member.image}
                    fill
                    objectFit="cover"
                    alt="Team Member"
                    className="object-cover"
                  />
                </div>
                <h5 className="text-lg text-black font-semibold">
                  {member.name}
                </h5>
                <small className="text-gray-500">{member.role}</small>
                {isHovered[member.name] && (
                  <motion.div
                    className="hidden lg:flex justify-center mt-3 space-x-2 transform transition-opacity"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered[member.name] ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {memberMedia.map((media, index) => (
                      <a
                        key={index}
                        className={`p-2 text-white rounded-full text-center ${media.color}`}
                        href="#"
                      >
                        <Image
                          src={media.icon}
                          width={16}
                          height={16}
                          alt={media.name}
                        />
                      </a>
                    ))}
                  </motion.div>
                )}
                <motion.div
                  className="flex lg:hidden justify-center mt-3 space-x-2 transform transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {memberMedia.map((media, index) => (
                    <a
                      key={index}
                      className={`p-2 text-white rounded-full text-center ${media.color}`}
                      href="#"
                    >
                      <Image
                        src={media.icon}
                        width={16}
                        height={16}
                        alt={media.name}
                      />
                    </a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
