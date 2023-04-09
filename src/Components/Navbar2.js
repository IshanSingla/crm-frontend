import React from "react";
import { Link, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { auth } from "../Config/firebase";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Logos/logo1.png";

export default function Navbar2({ currentUser }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "Software Advice", link: "#works" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact Us", link: "/contact" },
  ];
  const route = useLocation().pathname.split("/").pop();

  const navigate = useNavigate();
  const handleSignOut = () => {
    auth.currentUser ? auth.signOut() : navigate("/auth/login");
  };
  return (
    <section className="sticky flex justify-between items-center px-10 md:px-16 border-b border-[#20222F]">
      <Link to="/">
        <img className="w-32" src={logo} alt="" />
      </Link>
      <div className="font-bold  flex gap-6">
        {links.map((val, key) =>
          val.link === "#works" ? (
            <AnchorLink key={key} href={val.link} className={"text-[#8F9BB7]"}>
              {val.name}
            </AnchorLink>
          ) : (
            <Link
              key={key}
              to={val.link}
              className={`${
                route === val.link.split("/").pop()
                  ? "text-white"
                  : "text-[#8F9BB7]"
              }`}
            >
              {val.name}
            </Link>
          )
        )}
      </div>
      <button
        onClick={handleSignOut}
        className="bg-gradient-to-r from-[#FF9A61] to-[#FFC654] hover:bg-red-600 transition-all ease-linear px-5 py-1 rounded-full text-white"
      >
        {auth.currentUser ? "Logout" : "Login"}
      </button>
    </section>
  );
}
