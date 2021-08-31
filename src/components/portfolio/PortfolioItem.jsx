import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginBottom: "30px",
  },
  media: {
    height: 400,
  },
  link: {
    textDecoration: "none",
    color: "#555",
  },
});

const PortfolioItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={props.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <a href={props.href} className={classes.link} target="_blank">
          <Typography variant="body2" component="p">
            {props.body}
          </Typography>
        </a>
      </CardContent>
    </Card>
  );
};

export default PortfolioItem;
