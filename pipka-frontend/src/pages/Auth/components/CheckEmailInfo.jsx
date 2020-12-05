import React, { useEffect, useState } from "react";

import { Button } from "components";
import { userApi } from "utils/api";

const renderTextInfo = (hash, verified) => {
  if (hash) {
    if (verified) {
      return {
        status: "success",
        title: "Account confirmed!❤️",
        message: "Great. You can log in to Our app.",
      };
    } else {
      return {
        status: "error",
        title: "Account not confirmed!🤕",
        message: "Error confirming your account!",
      };
    }
  } else {
    return {
      title: "Confirm your account🎅",
      message:
        "An email was sent to your address with a link to confirm your account.",
    };
  }
};

const CheckEmailInfo = ({ location, history }) => {
  const [verified, setVerified] = useState(null);
  const hash = location.search.split("hash=")[1];
  const getInfo = renderTextInfo(hash, verified);

  useEffect(() => {
    if (hash) {
      userApi.verifyHash(hash).then(({ data }) => {
        if (data.status === "success") {
          setVerified(true);
        }
      });
    }
  });

  return (
    <div className="auth__content">
      <div className="header">
        <h1>{getInfo.title}</h1>
        <p>{getInfo.message}</p>
        {getInfo.status === "success" && verified && (
          <Button onClick={() => history.push("/login")}>Sign in</Button>
        )}
      </div>
    </div>
  );
};

export default CheckEmailInfo;
