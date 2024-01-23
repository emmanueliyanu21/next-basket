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
import { handleCartModal, updateCart } from "@/redux/action/cart.action";
import { openWishModal } from "@/redux/action/wish.action";
import { useDispatch, useSelector } from "react-redux";
import { getCartFromLocalStorage } from "@/libs/util";
import { RootState } from "@/store/store";
import { menuIcon } from "@/types/Navbar";

const Navbar = () => {
  const pathname = usePathname();
  const isProductPage = pathname.split("/")[1];
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const { wishList, cart } = useSelector((state: RootState) => ({
    wishList: state.wishList,
    cart: state.cart,
  }));

  const getCount = (name: String) => {
    if (name === "cart") {
      return cart?.items.length;
    }
    if (name === "wishlist") {
      return wishList.items.length;
    }
  };

  useEffect(() => {
    const cartData = getCartFromLocalStorage();
    dispatch(updateCart(cartData));
  }, []);

  const handleClose = () => {};

  const handleSearch = () => {};

  const handleCart = () => {
    setIsVisible(false);
    dispatch(handleCartModal(true));
  };

  const handleMobile = () => {
    setIsVisible(!isVisible);
  };
  const handleWishList = () => {
    setIsVisible(false);
    dispatch(openWishModal());
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
          <Box className="hidden md:flex items-center gap-2">
            {data.menuItems.map((item, index) => (
              <MenuItem key={index} onClick={handleClose} className="px-1">
                <Link href={`/${item.url}`}>
                  <Typography
                    className="text-grey font-montserrat font-bold leading-6 tracking-wide"
                    variant="body2"
                  >
                    {item.name}
                    {item.name === "Shop" ? <ExpandMoreIcon /> : ""}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Box>
        </Box>
        <Box className="flex gap-4 items-center p-2">
          <MenuItem className="hidden lg:flex secondary" onClick={handleClose}>
            <PersonOutlineIcon fontSize="small" className="text-secondary" />
            <Typography
              className="font-bold tracking-wider text-secondary"
              variant="body2"
            >
              {data.loginRegisterMenuItem}
            </Typography>
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
