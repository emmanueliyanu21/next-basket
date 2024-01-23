import Link from "next/link";
import Paper from "@mui/material/Paper";
import { MenuList, MenuItem, Box } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { NavbarProps } from "@/types/Navbar";

type MobileNavProps = {
  data: NavbarProps["data"];
  handleClose: Function;
  getCount: Function;
  handleIconClick: Function;
};
export default function MobileNavbar({
  data,
  handleClose,
  getCount,
  handleIconClick,
}: MobileNavProps) {
  return (
    <Paper
      className="shadow-none pt-8"
      sx={{
        width: "100%",
        maxWidth: "800px",
        position: "absolute",
        top: "0",
        left: "0",
        minHeight: "60vh",
        height: "100%",
        zIndex: "99",
      }}
    >
      <Box
        className="px-4 pb-4"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link href={"/"}>
          <h2 className="font-Montserrat font-bold">Bandage</h2>
        </Link>
        <span onClick={() => handleClose()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 14"
            fill="none"
          >
            <path
              d="M0.571472 0H23.4286V2.28571H0.571472V0ZM6.28576 5.71429H23.4286V8H6.28576V5.71429ZM13.4286 11.4286H23.4286V13.7143H13.4286V11.4286Z"
              fill="#252B42"
            />
          </svg>
        </span>
      </Box>
      <MenuList className="text-center">
        {data.menuItems.map((item, index) => (
          <MenuItem key={index}>
            <ListItemText onClick={() => handleClose()} className="font-montserrat text-grey font-Montserrat text-2xl font-normal leading-10 tracking-wide">
              <Link href={item.url}>{item.name}</Link>
            </ListItemText>
          </MenuItem>
        ))}
        <MenuItem>
          <ListItemText>{data.loginRegisterMenuItem}</ListItemText>
        </MenuItem>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          {data.icons.map((item, index) => {
            let count = item.hasCount ? getCount(item.name) : 0;
            return (
              item.name !== "hamburger" && (
                <MenuItem key={index}>
                  <span onClick={() => handleIconClick(item.name)}>
                    <span>{item.icon}</span> &nbsp;
                    <span>{count ? count : ""}</span>
                  </span>
                </MenuItem>
              )
            );
          })}
        </Box>
      </MenuList>
    </Paper>
  );
}
