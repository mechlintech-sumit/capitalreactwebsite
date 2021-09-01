import { gql } from "@apollo/client";

export const LOAD_COUNTRY = gql`
  query ($Code: ID!) {
    country(code: $Code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;
