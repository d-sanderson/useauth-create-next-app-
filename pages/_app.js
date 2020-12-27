import React from "react";
import App from "next/app";
import { AuthConfig } from "react-use-auth";
import { useRouter } from "next/router";
import { Auth0 } from "react-use-auth/auth0";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <AuthConfig
        navigate={router.push}
        authProvider={Auth0}
        params={{
          domain: "useauth.auth0.com",
          clientID: "GjWNFNOHqlino7lQNjBwEywalaYtbIzh",
        }}
      />
      <div>hello world</div>
    </>
  );
}

// extend App component and return our function so we can use useRouter :P
export default class _App extends App {
  render() {
    return <MyApp {...this.props} />;
  }
}
