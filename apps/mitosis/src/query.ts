export const GetPost = `
query GetPost($slug: String!) {
 post(slug: $slug) {
   id
   name
   votes {
     totalCount
   }
 }
}`;
