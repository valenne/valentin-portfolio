import React from "react";
import AppNotes from "../../assets/img/app_notes.png";

export const FeaturedImage = () => {
  return (
    <div className="featured-image grid-area-image grid-column-image frotate fne">
      <div className="c-image">
        <a
          className="d-iblock"
          href="https://notes-app-production-1a7e.up.railway.app/"
        >
          <div className="fih">
            <picture className="proyect-image">
              <img src={AppNotes} alt="example of the app notes" />
            </picture>
          </div>
        </a>
      </div>
    </div>
  );
};
