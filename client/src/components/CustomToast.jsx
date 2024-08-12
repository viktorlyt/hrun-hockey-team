import { useNavigate } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import toast from "react-hot-toast";
import { FaExclamationCircle, FaInfoCircle } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";
import Wrapper from "../assets/wrappers/CustomToast";

const RouterWrapper = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const CustomToast = ({ icon, title, message, linkText, onLinkClick }) => {
  // const CustomToast = ({icon, title, message, linkText, link }) => (
  const { theme } = useTheme();

  return (
    <Wrapper className={`site-wrapper ${theme}`}>
      {icon && <div className="icon">{icon}</div>}
      <h3>{title}</h3>
      <p className="b1">{message}</p>
      {/* {link && (
        <Link to={link} className="button selected long">
          {linkText}
        </Link>
      )} */}
      {/* {link && (
        <a href={link} className="button selected long">
          {linkText}
        </a>
      )} */}
      {onLinkClick && (
        <button onClick={onLinkClick} className="button selected long">
          {linkText}
        </button>
      )}
    </Wrapper>
  );
};
const showToast = ({
  type = "info",
  duration = 4000,
  title,
  message,
  linkText,
  link,
}) => {
  const icons = {
    success: <BsCheck2Circle style={{ color: "green" }} />,
    error: <FaExclamationCircle style={{ color: "red" }} />,
    info: <FaInfoCircle style={{ color: "blue" }} />,
  };

  //   toast.custom(
  //     (t) => (
  //       <RouterWrapper>
  //         <CustomToast
  //           t={t}
  //           icon={icons[type]}
  //           title={title}
  //           message={message}
  //           link={link}
  //           linkText={linkText}
  //         />
  //       </RouterWrapper>
  //     ),
  //     {
  //       duration: 2000,
  //       position: "center",
  //     }
  //   );
  // };
  toast.custom(
    (t) => (
      <CustomToast
        icon={icons[type]}
        title={title}
        message={message}
        linkText={linkText}
        onLinkClick={() => {
          if (link) {
            // Close the toast
            toast.dismiss(t.id);
            // Navigate to the link
            window.location.href = link;
          }
        }}
      />
    ),
    {
      duration: link ? Infinity : duration,
      position: "top-center",
    }
  );
};

export default showToast;
