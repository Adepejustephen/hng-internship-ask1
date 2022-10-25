import React from 'react'
import { ProfileImg } from '../../assets';

export const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__img">
        <img src={ProfileImg} alt="" id="profile_image" className="profile__img" />
          </div>
          <div className="profile__details">
              <p className="profile_twitter" id="twitter">
                  @adepejustephen
              </p>
              <p className="profile_twitter" id="slack">
                  Ifeoluwa Adepeju
              </p>
          </div>
    </section>
  );
}
