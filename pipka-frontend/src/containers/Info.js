import React from "react";
import { connect } from "react-redux";

import { Info } from "components";

const InfoContainer = ({ user }) => {
  return <Info user={user} />;
};

export default connect(({ user }) => ({
  user: user.data,
}))(InfoContainer);
