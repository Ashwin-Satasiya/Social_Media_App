import { useContext } from "react";
import { postListContext } from "../store/postList_store";
import { MdDelete } from "react-icons/md";

const Post = ({ post }) => {
  const { deletePost } = useContext(postListContext);

  return (
    <div className="card post-card">
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(post.id)}
      >
        {" "}
        <MdDelete className="fs-5" />{" "}
      </span>

      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-text post-content mt-3">{post.body}</p>

        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-success hastags">
            {tag}
          </span>
        ))}

        <div className="alert alert-primary post-alert " role="alert">
          This post have received{" "}
          <b style={{ color: "green", fontSize: "20px" }}>{post.reactions}</b>{" "}
          reactions.
        </div>
      </div>
    </div>
  );
};

export default Post;
