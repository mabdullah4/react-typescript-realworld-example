export default interface User {
  email?: string;
  token?: string;
  username: string;
  bio: string;
  image: string;
  following?: boolean;
}
