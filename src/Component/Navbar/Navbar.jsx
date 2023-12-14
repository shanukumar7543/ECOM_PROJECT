import React from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Person2Icon from "@mui/icons-material/Person2";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Navbar = () => {
  return (
    <div className="h-16 z-30 w-full bg-white shadow-xl flex flex-row   px-60 justify-between items-center  ">
      <div className="flex flex-row space-x-3 items-center ">
        <button className="text-red-400">
          <DensityMediumIcon />
        </button>
        <button>
          <LocationOnIcon />
        </button>
        <button className="h-5 w-5 flex ">
          <img
            src="https://www.fabindia.com/globe.05a558353fdd1d32.png"
            alt="Worldwide"
          />
          <p className="pl-3">Worldwide  </p>
          <ArrowDropDownIcon/>
        </button>
      </div>

      <div className="justify-center">
        <img
          src="https://apisap.fabindia.com/medias/fabindia-logo.svg?context=bWFzdGVyfGltYWdlc3wxNjk0NHxpbWFnZS9zdmcreG1sfGFEQTFMMmhsTkM4NE9URXdNVE13TmpReU9UYzBMMlpoWW1sdVpHbGhYMnh2WjI4dWMzWm58NDc1NWVjOTE4Y2QyZTA0ZGEzYTI3ZDE5OWY4ZjI1N2Q0ZTI5NjM1ZWIzYzdlMWYxOWJhMDdmZmJjYjY2MDY1OQ"
          alt="pic"
        />
      </div>

      <div className="bg-white flex space-x-4 text-red-400 ">
        <button>
          <SearchIcon />
        </button>
        <button>
          <Person2Icon />
        </button>
        <button>
          <FavoriteBorderIcon />
        </button>
        <button>
          <ShoppingCartOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
