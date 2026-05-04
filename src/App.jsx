import { ID } from "appwrite";
import React, { useEffect, useEffectEvent, useState } from "react";
import { account, databases } from "./lib/appwrite";
import { data } from "react-router-dom";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const [user, setUser] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    const result = await account.create({
      userId: ID.unique(),
      email,
      password,
      name,
    });

    console.log(result);
  };

  const login = async (e) => {
    e.preventDefault();
    const result = await account.createEmailPasswordSession({
      email: loginEmail,
      password: loginPassword,
    });

    console.log(result);
  };

  const getUser = async () => {
    const result = await account.get();

    setUser(user);
  };

  const logout = async () => {
    const result = await account.deleteSession({
      sessionId: "current",
    });

    console.log(result);
  };

  const createPost = async (e) => {
    e.preventDefault();
    const result = await databases.createDocument({
      databaseId: "69f8bcf50016af89ecfa",
      collectionId: "69f8bd5f000cccdfc382",
      documentId: ID.unique(),
      data: {
        title: postTitle,
        body: postBody,
        userId: user.$id,
      },
    });
    console.log(result);
  };

  const getPosts = async (e) => {
    const response = await databases.listDocuments({
      databaseId: "69f8bcf50016af89ecfa",
      collectionId: "69f8bd5f000cccdfc382",
    });

    console.log(response.documents);
  };

  useEffect(() => {
    getUser();
    getPosts();
  }, []);

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <form onSubmit={signup}>
        <input
          type="text"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign up</button>
      </form>

      {/* -------------------------SIGNIN--------------- */}

      <form onSubmit={login}>
        <input
          type="email"
          placeholder="your email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="your password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <form onSubmit={createPost}>
        <input
          type="text"
          placeholder="put your title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <textarea
          name="body"
          id=""
          placeholder="put in your body"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default App;
