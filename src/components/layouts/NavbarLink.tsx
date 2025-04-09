import { Link } from "react-router-dom";
import { NavbarLinkPropsType } from "../../types/types";

const NavbarLink: React.FC<NavbarLinkPropsType> = ({ link }) => {
  return (
    <>
      <Link
        to={link.path}
        className={`text-[13.5px] h-[80px] leading-[80px] px-4 text-[#282c3f] tracking-[.3px] font-[650] transitio duration-150 hover:border-b-[3px]`}
        style={{ borderBottomColor: link.border }}
      >
        {link.name}
        {link.sup ? (
          <sup className="text-[#FF3F6c] text-[9.5px] pl-0.5">{link.sup}</sup>
        ) : (
          <></>
        )}
      </Link>
    </>
  );
};

export default NavbarLink;
