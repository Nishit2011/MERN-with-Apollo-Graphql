import React, { useState, useContext } from "react";
import { CREATE_USER_MUTATION } from "../../graphql/mutation";
import { useMutation } from "@apollo/client";
import { useForm } from "../../utils/hooks";
import { AuthContext } from "../../context/auth";

const Register = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [addUser, { loading }] = useMutation(CREATE_USER_MUTATION, {
    update(proxy, { data: { register: userData } }) {
      //   console.log(result);
      context.login(userData);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    console.log(addUser);
    addUser();
  }

  return (
    <div>
      <h2>Register</h2>
      {/* {errors} */}
      <form onSubmit={onSubmit}>
        {errors.username}
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          onChange={onChange}
        />
        {errors.email}
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          onChange={onChange}
        />
        {errors.password}
        <input
          type="text"
          placeholder="Enter password"
          name="password"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Enter confirmPassword"
          name="confirmPassword"
          onChange={onChange}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
