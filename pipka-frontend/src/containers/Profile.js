import React from "react";
import { connect } from "react-redux";

import { InfoProfile } from "components";

const ProfileContainer = ({ user }) => {
  return <InfoProfile user={user} />;
};

export default connect(({ user }) => ({ user: user.data }))(ProfileContainer);
