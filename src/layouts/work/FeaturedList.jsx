import React, { useContext } from "react";
import { FeaturedImage } from "./FeaturedImage";
import { FeaturedText } from "./FeaturedText";
import { DataContext } from "../../context/dataContext.jsx";

export const FeaturedList = () => {
  const proyects = useContext(DataContext);
  console.log(proyects);

  return (
    <>
      {proyects.map((data) => (
        <li className="grid grid-12cols featured-list" key={data.id}>
          <FeaturedImage img={data.img} />
          <FeaturedText
            proyectName={data.name}
            proyectDesc={data.description}
            tech={data.tech}
            data={data}
          />
        </li>
      ))}
    </>
  );
};
