import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="w-full h-52 bg-yellow-900 flex justify-center items-center flex-col pt-3">
      <div className="text-[#FBF8F1] m-5 text-3xl cursor-pointer">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <YouTubeIcon />
      </div>
      <div className="text-[#FBF8F1]">&copy; badaborgir.com</div>
    </div>
  );
}

export default Footer;
