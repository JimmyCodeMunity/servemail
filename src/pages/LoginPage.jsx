import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import { Link } from 'react-router-dom';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
// import { JwtDecodeOptions } from 'jwt-decode';
import { jwtDecode } from "jwt-decode";
// import { toast } from 'react-toastify';
import axios from 'axios';


function LoginPage() {
  //const navigate = useNavigate()
  const [isLogged,setIsLogged] = useState(false);
  const [user,setUser] = useState(null)

  //get login details
  const getCredentials = useGoogleLogin ({
    onSuccess: async (response) => {
      try {
        const res = await axios.get("https://ww.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log("user details:",res.data);

      } catch (error) {
        console.log(error)

      }
    }
  })

  return (
    <MainLayout>
      <div className="mx-auto max-w-lg bg-white mt-8 rounded-xl p-7">
        <h3 className="text-center text-grey-700 font-bold text-3xl">Login</h3>
        <div className="mx-auto flex justify-center items-center">
          {isLogged ? (
            <>
            <img src={user.picture} alt="" className="rounded-full w-16 h-16" />
            </>
          ):(
            <>
            <img src="" alt="" className="rounded-full w-16 h-16" />
            
            </>
          )}
          
        </div>
        <div>
          <form action="">
            {isLogged ? (
              <>
              <div>
                logged in as {user.name}
              </div>
              </>
            ):(
              <>
              <div>
                not logged in
              </div>
              </>
            )}
            <div className="my-4">
              <label className="text-slate-400" htmlFor="">Email</label>
              <input type="email" placeholder='enter email' className="rounded-2xl w-full border border-slate-400 px-3 h-12 my-2 focus:border focus:border-gray-300" />
            </div>

            <div className="my-4">
              <label className="text-slate-400" htmlFor="">Password</label>
              <input type="password" placeholder='enter password' className="rounded-2xl border border-slate-400 w-full px-3 h-12 my-2 focus:border focus:border-gray-300" />
            </div>

            <div className="my-4 mx-auto w-full justify-center items-center flex">

              <input type="submit" onClick={getCredentials} className="rounded-2xl text-white bg-blue-400 h-10 hover:cursor-pointer  w-60 px-3 my-2 focus:border focus:border-gray-300" />
            </div>
            <div className="my-4 flex justify-between items-center">
              <div>
                <Link to="/register" className="text-blue-500">Create Account</Link>
              </div>
              <div>
                <Link to="/register" className="text-blue-500">Forgot password</Link>
              </div>

              

            </div>
            <div>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
                  console.log(credentialResponseDecoded);
                  setUser(credentialResponseDecoded)
                  setIsLogged(true)
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default LoginPage;
