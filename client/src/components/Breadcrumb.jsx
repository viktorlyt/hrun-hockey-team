import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Breadcrumb";

const Breadcrumb = ({ links }) => (
  <Wrapper>
    <nav className="breadcrumb">
      <div className="b4">
        {links.slice(0, -1).map((link) => (
          <>
            <Link to={`/${link.address}`} key={link.linkText}>
              {link.linkText}
            </Link>
            &gt;
          </>
        ))}
        <span>
          <b>{links[links.length - 1].linkText}</b>
        </span>
      </div>
    </nav>
  </Wrapper>
);

export default Breadcrumb;
