import "./contact.css";

export const ContactUi = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <h2 className="contact__header--title">Contact Me</h2>
        <p className="contact__header--subtitle">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>
      <form action="" className="contact__form">
        <div className="contact__form--group">
          <div className="contact__form--item">
            <label htmlFor="email" className="contact__form--label">
              First name
            </label>
            <input
              type="text"
              className="contact__form--input"
              placeholder="Enter your first name"
            />
          </div>
          <div className="contact__form--item">
            <label htmlFor="email" className="contact__form--label">
              Last name
            </label>
            <input
              type="text"
              className="contact__form--input"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="contact__form--item">
          <label htmlFor="email" className="contact__form--label">
            Email
          </label>
          <input
            type="email"
            className="contact__form--input"
            placeholder="yourname@email.com"
          />
        </div>
        <div className="contact__form--item">
          <label htmlFor="email" className="contact__form--label">
            Message
          </label>
          <textarea
            className="contact__form--input"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
        </div>
        <div className="contact__form--group">
          <input type="checkbox" className="contact__form--radio" />
          <label htmlFor="email" className="contact__form--label">
            You agree to providing your data to Ifeoluwa Adepeju who may contact you.
          </label>
        </div>
      </form>
    </div>
  );
};
