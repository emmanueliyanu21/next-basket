"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Typography, Box, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { data } from "./static-data";
import MobileNavbar from "./MobileNavbar";
import { handleCartWishModal, updateCart } from "@/redux/action/cart.action";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { RootState } from "@/store/store";
import { menuIcon } from "@/types/Navbar";
import { getLocalStorageItems } from "@/libs/util";
import Dropdown from "./Dropdown";
import SearchModal from "../Search";

export type CommonItem = {
  id: number;
  price: number;
  thumbnail: string;
  title: string;
  quantity: number; // Optional for compatibility
  stock?: number;
};

const Navbar = () => {
  const pathname = usePathname();
  const isProductPage = pathname.split("/")[1];
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const { wishList, cart } = useSelector(
    (state: RootState) => ({
      wishList: state.wishList,
      cart: state.cart,
    }),
    shallowEqual
  );
  const loginData = useSelector((state: RootState) => state.auth.login);

  const getCount = (name: String) => {
    if (name === "cart") {
      return cart?.items.length;
    }
    if (name === "wishlist") {
      return wishList.items.length;
    }
  };

  useEffect(() => {
    const cartData: CommonItem[] = getLocalStorageItems("cart");
    dispatch(updateCart(cartData));
  }, []);

  const handleClose = () => {};

  const handleLogin = () => {
  }

  const handleSearch = () => {
    setIsOpen(true);
  };

  const handleToggle = () => {
    setOpen((open) => !open);
  };

  const handleCart = () => {
    setIsVisible(false);
    dispatch(handleCartWishModal({ status: "true", key: "cart" }));
  };

  const handleMobile = () => {
    setIsVisible(!isVisible);
  };
  const handleWishList = () => {
    setIsVisible(false);
    dispatch(handleCartWishModal({ status: "true", key: "wish" }));
  };

  const handleIconClick = (name: menuIcon["name"]) => {
    const iconActions = {
      search: handleSearch,
      cart: handleCart,
      wishlist: handleWishList,
      hamburger: handleMobile,
    };
    const action = iconActions[name];
    if (action) {
      action();
    }
  };
  return (
    <Container maxWidth="xl" className={isProductPage ? "xl:px-48" : ""}>
      <Box className="flex justify-between py-2 mt-2">
        <Box className="flex items-center gap-28 p-2">
          <Link href="/">
            <Image
              src={data.logo}
              alt="Bandage"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "120px", height: "auto" }}
            />
          </Link>
          <Box className="relative hidden md:flex items-center gap-2">
            {data.menuItems.map((item, index) => (
              <MenuItem key={index} onClick={handleClose} className="px-1">
                <Typography
                  className="relative text-grey font-montserrat font-bold leading-6 tracking-wide"
                  variant="body2"
                >
                  <Link href={`/${item.url}`}>{item.name}</Link>
                  <span
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                  >
                    {item.name === "Shop" ? <ExpandMoreIcon /> : ""}
                  </span>
                </Typography>
              </MenuItem>
            ))}
            <Box className="absolute">
              <Dropdown isOpen={open} />
            </Box>
          </Box>
        </Box>
        <Box className="flex gap-4 items-center p-2">
          <MenuItem className="hidden lg:flex secondary" onClick={handleClose}>
            <PersonOutlineIcon fontSize="small" className="text-secondary" />
            <Link href={"/auth/login"} >
            <Typography
              onClick={handleLogin}
              className="font-bold tracking-wider text-secondary"
              variant="body2"
            >
              {data.loginRegisterMenuItem}
            </Typography>
            </Link>
          </MenuItem>
          <Box display={"flex"} alignItems="center" gap={2}>
            {data.icons.map(({ icon, name, hasCount }, index) => {
              let count = hasCount && getCount(name);
              return (
                (name !== "wishlist" || !isMobile) &&
                (name !== "hamburger" || isMobile) && (
                  <Box
                    position={"relative"}
                    display={"flex"}
                    key={index}
                    className={
                      isMobile
                        ? "text-black cursor-pointer"
                        : "text-secondary cursor-pointer"
                    }
                    onClick={() => handleIconClick(name)}
                  >
                    <span>{icon}</span> &nbsp;
                    {count ? <span>{count}</span> : ""}
                  </Box>
                )
              );
            })}
          </Box>
        </Box>
      </Box>
      {isOpen && isOpen ? (
        <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      ) : (
        ""
      )}

      {isVisible && isMobile ? (
        <MobileNavbar
          data={data}
          handleClose={handleMobile}
          getCount={getCount}
          handleIconClick={handleIconClick}
        />
      ) : (
        ""
      )}
    </Container>
  );
};

export default Navbar;
