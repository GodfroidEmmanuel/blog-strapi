import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
query Articles {
    articles{
        id
         title
         image {
           url
         }
         category{
           id
           name
         }
       }
}
`;

export default ARTICLES_QUERY;