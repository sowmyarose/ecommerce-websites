"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsList({ products, type = undefined }: any) {
  const [isHovered, setIsHovered] = useState<any>({});

  return (
    <div
      className={`mt-16 w-full px-2 lg:max-w-4xl xl:px-0 xl:max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 ${
        type ? "xl:grid-cols-4" : "xl:grid-cols-3"
      } gap-4 lg:gap-8 rounded-md`}
    >
      {products?.map((dress: any, index: number) => (
        <Link
          href={`/clothing/shop/product/${dress.id}`}
          key={index}
          className="flex flex-col gap-2 cursor-pointer"
        >
          <Image
            src={isHovered[dress.title] ? dress.imgHover : dress.img}
            alt="item"
            width={400}
            height={400}
            className="rounded-md cursor-pointer transition-all duration-400"
            onMouseEnter={() =>
              setIsHovered((prev: any) => ({
                ...prev,
                [dress.title]: true,
              }))
            }
            onMouseLeave={() =>
              setIsHovered((prev: any) => ({
                ...prev,
                [dress.title]: false,
              }))
            }
          />
          <h4 className="font-bold text-black">{dress.title}</h4>
          <p className="text-black">{dress.price}</p>
        </Link>
      ))}
    </div>
  );
}
