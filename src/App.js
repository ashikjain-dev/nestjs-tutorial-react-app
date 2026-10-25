import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import React from "react";

function App() {
  return (
    <GoogleOAuthProvider clientId="674976399570-06pdfshs7cldcgceon5eafiq3k3gp3nt.apps.googleusercontent.com">
      <GoogleLogin
        buttonText="Login"
        onSuccess={(response) => {
          console.log(response);
          fetch("http://localhost:3000/google-auth", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              loginTicket: response.credential,
            }),
          })
            .then((response) => console.log(response))
            .then((data) => console.log(data));
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default App;
