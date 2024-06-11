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
    <div className="w-96 mx-auto">
      <div className="mb-8">
        <Heading variant="h2">{isLoginMode ? "Sign up" : "Sign in"}</Heading>
      </div>

      <form className="mb-8" onSubmit={authSubmitHandler}>
        <div className="flex flex-col gap-y-8 mb-12">
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
        </div>

        <Button type="submit" clickHandler={() => {}}>
          {isLoginMode ? "Sign in" : "Sign up"}
        </Button>
      </form>

      <button
        className="underline hover:no-underline"
        type="button"
        onClick={switchModeHandler}
      >
        {isLoginMode ? "Sign up" : "Sign in"}
      </button>
    </div>
  );
};

export default Auth;
