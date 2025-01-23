import Image from "next/image";
import React from "react";

export default function WorkCart() {
  const works1 = [
    {
      image: "/Img.png",
      name: "Orvillebury",
      color: "blue",
    },
    {
      image: "/Img2.png",
      name: "West Lavada",
      color: "green",
    },
    {
      image: "/Img3.png",
      name: "Rempelshire",
      color: "aqua",
    },
    {
      image: "/Img4.png",
      name: "Delfinaland",
      color: "lime",
    },
    {
      image: "/Img.png",
      name: "Buckridgeburgh",
      color: "fuchsia",
    },
    {
      image: "/Img2.png",
      name: "Orvillebury",
      color: "blue",
    },
    {
      image: "/Img3.png",
      name: "Orvillebury",
      color: "blue",
    },
    {
      image: "/Img4.png",
      name: "Orvillebury",
      color: "blue",
    },
  ];

  // Group the works1 array into a pattern of [3, 2, 3]
  const pattern = [3, 2, 3];
  const groupedWorks = [];
  let index = 0;

  for (const count of pattern) {
    groupedWorks.push(works1.slice(index, index + count));
    index += count;
  }

  return (
    <div className="space-y-10 my-20 ">
      {groupedWorks.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={`lg:grid ${
            group.length === 3 ? "grid-cols-3" : "grid-cols-2"
          } flex flex-col gap-10 my-5`}
        >
          {group.map((work, workIndex) => (
            <div key={workIndex} className="text-center">
              <Image
                src={work.image}
                alt={work.name}
                width={800}
                height={347}
                className="rounded-lg"
              />
              <p className="my-5">{work.color}</p>
              <p className="text-2xl font-semibold">{work.name}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
