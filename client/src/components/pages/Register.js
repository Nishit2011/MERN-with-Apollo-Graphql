import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../../graphql/mutation";
import { useMutation } from "@apollo/client";

const Register = () => {
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [register, { error }] = useMutation(CREATE_USER_MUTATION);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formInput);
    register({
      variables: {
        username: formInput.username,
        email: formInput.email,
        password: formInput.password,
        confirmPassword: formInput.confirmPassword,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={(e) => handleRegister(e)}>
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) =>
            setFormInput({ ...formInput, username: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter email"
          onChange={(e) =>
            setFormInput({ ...formInput, email: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter password"
          onChange={(e) =>
            setFormInput({ ...formInput, password: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter confirmPassword"
          onChange={(e) =>
            setFormInput({ ...formInput, confirmPassword: e.target.value })
          }
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
