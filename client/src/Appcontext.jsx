import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [id,setId]=useState(null);
    const [nam,setName]=useState("Login")
    const[email,setEmail]=useState(null)
    const[pic,setPic]=useState(null)
    const[userId,setUserId]=useState(null)
    const[password,setPassword]=useState(null)
    const[fet,setFet]=useState(false)
  
    useEffect(() => {
      const cookies = document.cookie.split(";");
      const tokenCode = cookies.find((cookie) =>
        cookie.trim().startsWith("token")
      );
      if (tokenCode) {
        const tok = tokenCode.split("=")[1];
        setToken(tok);
      }
    }, fet);
  console.log(fet)

    let decodedToken;
    if(token){
      decodedToken = jwtDecode(token,import.meta.env.SECRET_KEY);
    }

    useEffect(() => {
      const fetchUserData = async () => {
          if (decodedToken?.id){
              try{
                  const response = await fetch(`${import.meta.env.VITE_URL}/api/users/${decodedToken.id}`,{
                      method: "GET",
                      headers: {
                          "Content-Type": "application/json",
                      },
                  });
                  if (response.ok) {
                      const userData = await response.json();
                      console.log(userData)
                      setId(userData?._id);
                      setName(userData?.userName);
                      setEmail(userData?.emailId);
                      setUserId(userData?.userId);
                      setPic(userData?.picture);
                      setPassword(userData?.password);
                  } else {
                      toast.error("Failed to fetch user data");
                  }
              } catch (err) {
                  toast.error("Failed to fetch user data");
              }
          }
      };
      if (token) {
          fetchUserData();
      }
  }, [token,fet]);
  

    const logout = () => {
        setToken(null);
        document.cookie = 'token=; max-age=0; path=/';
    };

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        id,
        setId,
        nam,
        setName,
        email,
        setEmail,
        pic,
        setPic,
        userId,
        setUserId,
        password,
        setPassword,
        logout,
        fet,
        setFet
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => {
  return useContext(AppContext);
};
