import React, { useRef, useState } from "react";
import Link from "next/link";
import Grow from "@mui/material/Grow";
import { Paper } from "@mui/material";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { fetchProductCategories } from "@/services/category/apiService";

type DropdownProps = {
  isOpen: boolean;
};
// { isOpen }: DropdownProps
const Dropdown = () => {
 
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const { categories } = useSelector((state: RootState) => state.product);

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(open);
  };

  const handleClick = (name: string) => {
    fetchProductCategories(dispatch, name);
    setOpen(false)
  };

  return (
    <>
      <Popper
        open={open}
        anchorEl={anchorEl}
        
        role={undefined}
        placement="auto"
        transition
        disablePortal
        style={{ zIndex: 9, top: "8rem", left: "unset" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: (placement = "auto"),
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  style={{ columnCount: 3, columnGap: "4rem", padding: "20px" }}
                >
                  {categories &&
                    categories.map((item, index) => (
                      <Link key={index} href={`/category/${item}`}>
                        <MenuItem
                          className="mb-4"
                          onClick={() => handleClick(item)}
                        >
                          {item}
                        </MenuItem>
                      </Link>
                    ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default Dropdown;
