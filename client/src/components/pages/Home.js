import React, { useContext } from "react";

import { Grid, Transition } from "semantic-ui-react";

import { AuthContext } from "../../context/auth";

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>Home</Grid.Row>
    </Grid>
  );
}

export default Home;
