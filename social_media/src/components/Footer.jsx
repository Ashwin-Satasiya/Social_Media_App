import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
             <li className="nav-item">
              <Link to="/" className="nav-link text-black">
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#home"></use>
                </svg>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="create-post" className="nav-link text-black">
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                Create Post
              </Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
