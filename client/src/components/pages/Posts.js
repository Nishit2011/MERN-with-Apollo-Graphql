import React, { useEffect, useState } from "react";
import { LOAD_POSTS } from "../../graphql/queries";
import { useQuery, gql } from "@apollo/client";

const Posts = () => {
  const { error, loading, data } = useQuery(LOAD_POSTS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div>Posts</div>;
};

export default Posts;
