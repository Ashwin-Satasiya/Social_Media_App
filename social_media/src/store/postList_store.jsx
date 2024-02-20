import { createContext, useReducer, useState, useEffect } from "react";
export const postListContext = createContext([
  {
    postList: [],
    addPost: () => {},
    deletePost: () => {},
    fetching: false,
  },
]);

const PostListReducer = (currValue, action) => {
  let newPostList = currValue;

  if (action.type === "DELETE_POST") {
    newPostList = currValue.filter(
      (post) => post.id !== action.payload.delPostName
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currValue];
  } else if (action.type === "SERVER_POST") {
    newPostList = action.payload;
  }

  return newPostList;
};

const PostListWrapper = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (delPostName) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        delPostName,
      },
    });
  };

  const postsFromServer = (posts) => {
    dispatchPostList({
      type: "SERVER_POST",
      payload: posts,
    });
  };

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        postsFromServer(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <postListContext.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        fetching:fetching,
      }}
    >
      {children}
    </postListContext.Provider>
  );
};

export default PostListWrapper;
