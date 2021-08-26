import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
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
});

const PortfolioItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link href="https://middizzzy.tokyo">
        <CardActionArea>
          <CardMedia className={classes.media} image={props.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" component="p">
              {props.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default PortfolioItem;
