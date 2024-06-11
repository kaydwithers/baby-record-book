"use client";

import React, { FormEvent, useState } from "react";

import { Button } from "@/components/Button/Button";
import { Heading } from "@/components/Heading/Heading";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);

  const authSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <Heading variant="h2">Sign in</Heading>

      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <div className="">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              onInput={() => console.log("test")}
            />
          </div>
        )}

        <div className="">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className="">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </div>

        <Button type="submit">{isLoginMode ? "Sign in" : "Sign up"}</Button>
      </form>

      <button type="button" onClick={switchModeHandler}>
        {isLoginMode ? "Sign in" : "Sign up"}
      </button>
    </div>
  );
};

export default Auth;
