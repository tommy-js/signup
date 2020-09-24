import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushEmailMutation } from "../queries/queries.js";

interface Props {
  pushEmailMutation: (variables: object) => void;
}

const PushEmail: React.FC<Props> = (props) => {
  function submit() {}

  return <button onClick={() => submit()}>Submit</button>;
};

export default compose(
  graphql(pushEmailMutation, { name: "pushEmailMutation" })
)(PushEmail);
