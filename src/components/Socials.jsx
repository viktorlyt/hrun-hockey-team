import { useState, useEffect } from "react";
import { CiLinkedin, CiInstagram, CiFacebook } from "react-icons/ci";

const socials = [
  {
    icon: <CiLinkedin />,
    url: "https://www.linkedin.com",
  },
  {
    icon: <CiInstagram />,
    url: "https://www.instagram.com/",
  },
  {
    icon: <CiFacebook />,
    url: "https://www.facebook.com/",
  },
];

const Socials = () => {
  const [position, setPosition] = useState("50%");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const footer = document.querySelector("footer");
      const headerRect = header.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const socialContainerHeight =
        document.querySelector(".socials-container").offsetHeight;
      const socialPositionFromTop =
        (viewportHeight - socialContainerHeight) / 2;

      let newTop = socialPositionFromTop;

      if (footerRect.top < viewportHeight) {
        const footerOverlap = footerRect.top - socialContainerHeight - 20; // 20px margin from footer
        newTop = Math.min(socialPositionFromTop, footerOverlap / 2);
      }

      if (headerRect.bottom > newTop) {
        newTop = headerRect.bottom + 20; // 20px margin from header
      }

      setPosition(`${newTop}px`);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="socials-container" style={{ top: position }}>
      {socials.map((s) => (
        <a href={s.url} key={s.url} target="_blank" rel="noopener noreferrer">
          {s.icon}
        </a>
      ))}
      <div className="socials-text">
        <div>We are available</div>
        <div>on the platform</div>
      </div>
    </div>
  );
};

export default Socials;
