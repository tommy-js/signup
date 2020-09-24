import { gql } from "react-apollo";

const pushEmailMutation = gql`
  mutation($email: String!) {
    PushEmail(email: $email) {
      email
    }
  }
`;

export { pushEmailMutation };
