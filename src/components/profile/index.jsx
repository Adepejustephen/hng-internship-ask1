import React from "react";
import { ProfileImg } from "../../assets";
import "./profile.css";

export const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__img--container">
        <img
          src={ProfileImg}
          alt=""
          id="profile_image"
          className="profile__img"
        />
      </div>
      <div className="profile__details">
        <p className="profile__details--twitter" id="twitter">
          @adepejustephen
        </p>
        <p className="profile__details--slack" id="slack">
          Ifeoluwa Adepeju
        </p>
      </div>
    </section>
  );
};
