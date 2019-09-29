import React,{useState} from "react";
import { addBlog } from "../actions";
import { connect } from 'react-redux';

function AddBlogByUser(props) {
  const [blogValue, setBlogValue] = useState({
    blog: ""
  });

  function handleSubmit(event) {
    console.log("props", props);
    event.preventDefault();
    props.dispatch(addBlog(blogValue));
  }

  function handleChange(event) {
    setBlogValue({
      ...blogValue,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <input
        name="blog"
        defaultValue={blogValue.blog}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>post</button>
    </div>
  );
}

export default connect()(AddBlogByUser);
