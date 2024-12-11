import {
  AddCircleOutlineRounded,
  FavoriteBorderOutlined,
  MoreVert,
  QueueMusicOutlined,
} from "@mui/icons-material";
import { IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";

const MenuTrackOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        onClick={handleClick}
        // size="large"
        sx={{ padding: "5px", color: "text.primary" }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <MoreVert />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,

            sx: {
              overflow: "hidden",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              backgroundColor: "secondary.main",
              gap: "20px",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FavoriteBorderOutlined
              //   fontSize="small"
              sx={{ color: "text.primary" }}
            />
          </ListItemIcon>
          Save to Liked
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AddCircleOutlineRounded
              //   fontSize="small"
              sx={{ color: "text.primary" }}
            />
          </ListItemIcon>
          Add to Playlist
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <QueueMusicOutlined
              //   fontSize="small"
              sx={{ color: "text.primary" }}
            />
          </ListItemIcon>
          Add to Queue
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuTrackOptions;
