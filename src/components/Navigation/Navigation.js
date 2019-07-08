import React from "react";

const Navigation = ({ onRouteChange, issignedin }) => {
  if (issignedin) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("Sign out")}
          className="f3 link dim white underline pa3 pointer"
        >
          Sign Out{" "}
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("Signin")}
          className="f3 link dim white underline pa3 pointer"
        >
          Sign In{" "}
        </p>
        <p
          onClick={() => onRouteChange("Register")}
          className="f3 link dim white underline pa3 pointer"
        >
          Register{" "}
        </p>
      </nav>
    );
  }
};

export default Navigation;
