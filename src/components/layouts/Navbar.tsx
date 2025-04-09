import { navbarLinks } from "../../constant/navbarLinks";
import NavbarLink from "../layouts/NavbarLink";

const Navbar = () => {
  return (
    <>
      <div className="min-w-[500px] flex justify-evenly">
        {navbarLinks.map((link, i) => (
          <NavbarLink key={i} link={link} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
