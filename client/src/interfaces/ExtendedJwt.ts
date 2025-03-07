// Extending the JwtPayload interface to include additional data fields specific to the application.
import { type JwtPayload } from 'jwt-decode';

export interface ExtendedJwt extends JwtPayload {
  data:{
    id:string
    username:string,
    email:string,
  }
};