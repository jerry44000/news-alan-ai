import React from "react";
import NewsCard from "../newsCard/NewsCard.js";
import { Grow, Grid } from "@mui/material/";
import { ClassNames } from "@emotion/react";
import useStyles from "./styles.js";

const NewsCards = ({ articles }) => {
  const classes = useStyles();
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
