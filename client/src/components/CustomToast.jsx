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

const CustomToast = ({
  icon,
  title,
  message,
  linkText,
  onLinkClick,
  onConfirm,
  onCancel,
  onConfirmBtnText,
}) => {
  const { theme } = useTheme();

  console.log("onLinkClick", onLinkClick);
  return (
    <Wrapper className={`site-wrapper ${theme}`}>
      {icon && <div className="icon">{icon}</div>}
      <h3>{title}</h3>
      {message && <p className="b1">{message}</p>}
      {onLinkClick && (
        <button onClick={onLinkClick} className="button selected long">
          {linkText}
        </button>
      )}
      {onConfirm && onCancel && (
        <div className="confirmation-buttons">
          <button onClick={onConfirm} className="button selected">
            {onConfirmBtnText !== "" ? onConfirmBtnText : "Confirm"}
          </button>
          <button onClick={onCancel} className="button">
            Cancel
          </button>
        </div>
      )}
    </Wrapper>
  );
};

const showToast = ({
  type,
  duration = 7000,
  title,
  message,
  linkText,
  link,
  onConfirm,
  onCancel,
  onConfirmBtnText,
}) => {
  const icons = {
    success: <BsCheck2Circle style={{ color: "green" }} />,
    error: <FaExclamationCircle style={{ color: "red" }} />,
    info: <FaInfoCircle style={{ color: "blue" }} />,
  };

  console.log("link", link);

  toast.custom(
    (t) => (
      <CustomToast
        icon={type ? icons[type] : null}
        title={title}
        message={message}
        linkText={linkText}
        onLinkClick={
          link
            ? () => {
                toast.dismiss(t.id);
                window.location.href = link;
              }
            : null
        }
        onConfirm={() => {
          if (onConfirm) onConfirm();
          toast.dismiss(t.id);
        }}
        onCancel={() => {
          if (onCancel) onCancel();
          toast.dismiss(t.id);
        }}
        onConfirmBtnText={onConfirmBtnText}
      />
    ),
    {
      duration: link ? Infinity : duration,
      // duration: onConfirm && onCancel ? Infinity : duration,
      position: "top-center",
    }
  );
};

export default showToast;
