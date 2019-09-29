import Axios from "axios";
import Cookie from "js-cookie";

export const Register = values => {
  Axios.post(`http://localhost:3333/user`, values)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });

  return {
    type: "registerUser",
    values
  };
};

export const Login = (values, history) => {
  Axios.post(`http://localhost:3333/user/login`, values)
    .then(result => {
      Cookie.set("token", result.data.token);
      history.push("/");
    })
    .catch(error => {
      console.log(error);
    });
  return {
    type: "loginUser",
    values
  };
};

export const userIdName = () => {
  return dispatch => {
    Axios.get("http://localhost:3333/user/userdata", {
      headers: { token: Cookie.get("token") }
    })
      .then(result => {
        dispatch({
          type: "GET_USER",
          payload: result.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const addBlog = values => {
  Axios.post("http://localhost:3333/blog", values, {
    headers: { token: Cookie.get("token") }
  }).then(result => {
    console.log(result);
  })
  .catch(error => console.log(error))
  return {
    type: "addBlog",
    values
  };
};
