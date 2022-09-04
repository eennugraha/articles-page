import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="w-100">
        <div className="text-center">
          <div className="text-center mb-4">
            <img
              className="mb-4"
              src="https://www.svgrepo.com/show/124339/book-opened-symmetrical-shape.svg"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">About Us</h1>
            <p>
              We are a free article website, built by freelance writers, who
              writes whatever they are interested in. From world's politics to
              small hobbies, we write anything and everything.
            </p>
          </div>

          <p className="mt-5 mb-3 text-muted text-center">&copy; 2022</p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
