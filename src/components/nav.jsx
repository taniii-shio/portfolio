import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Hidden, IconButton } from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

import toggleDrawer from "@material-ui/core/toggleDrawer";

const Nav = (props) => {
  const [state, setState] = React.useState({
    right: false,
  });

  const { twitterUrl, githubUrl } = props;

  const { pathname, route } = useRouter();

  const menuLinks = (
    <>
      <NextLink href="/" passHref>
        <MuiLink
          className={clsx({
            selected: pathname === "/",
          })}
        >
          Home
        </MuiLink>
      </NextLink>

      <NextLink href="/portfolio" passHref>
        <MuiLink
          className={clsx({
            selected: route.startsWith("/portfolio"),
          })}
        >
          Portfolio
        </MuiLink>
      </NextLink>

      <NextLink href="/contact" passHref>
        <MuiLink
          className={clsx({
            selected: route.startsWith("/contact"),
          })}
        >
          Contact
        </MuiLink>
      </NextLink>
    </>
  );

  const socialLinks = (
    <div>
      <Tooltip title="Twitter" arrow>
        <IconButton
          color="inherit"
          href={twitterUrl}
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub" arrow>
        <IconButton
          color="inherit"
          href={githubUrl}
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
    </div>
  );

  const sideList = () => (
    <div>
      <div>
        <IconButton onClick={toggleDrawer(side, false)} aria-label="Menu Close">
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      {menuLinks}
      <Divider />
      <Hidden smUp>{socialLinks}</Hidden>
    </div>
  );

  return (
    <nav>
      <Hidden smDown>{menuLinks}</Hidden>
      <Hidden xsDown>{socialLinks}</Hidden>
      <Hidden mdUp>
        <div>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer("right", true)}
            aria-label="Menu Open"
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
        >
          {sideList("right")}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Nav;
