import { useContext } from "react";
import { postListContext } from "../store/postList_store";
import Post from "./Post";
import Message from "./Message";
import Spinner from "./Spinner";

const PostLists = () => {
  const { postList, fetching } = useContext(postListContext);

  return (
    <>
      {fetching && <Spinner />}
      {!fetching && postList.length === 0 && <Message />}
      {!fetching &&
        postList.map((post, index) => <Post key={index} post={post} />)}
    </>
  );
};

export default PostLists;
