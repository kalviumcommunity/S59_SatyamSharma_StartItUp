import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [id,setId]=useState(null);
    const [nam,setName]=useState("Login")
    const[email,setEmail]=useState(null)
    const[pic,setPic]=useState(null)
    const[userId,setUserId]=useState(null)
    const[publishId,setPublishId]=useState(null)
    const[investorId,setInvestorId]=useState(null)
    const[password,setPassword]=useState(null)
    const[fet,setFet]=useState(false)

    const[feedback,setFeedback]=useState([]);
    const[feed,setFeed]=useState(false)

    const[publics,setPublic]=useState([]);
    const[pub,setPub]=useState(false)

    const[main,setMain]=useState(false)

    const[presentDataId,setPresentDataId]=useState("")
  const[mainData,setMainData]=useState([])

  const[trendingPg,setTrendingPg]=useState([])
  const[tren,setTren]=useState(true)

  const[verify,setVerify]=useState([])
  const[ver,setVer]=useState(true)
  const[presentVerfId,setPresentVerifId]=useState("")

  const [conversationData, setConversationData] = useState([]);
  const [con, setCon] = useState(false);



    useEffect(() => {
      const presentPostIdCookie = Cookies.get('presentPostId');
      if (presentPostIdCookie) {
          setPresentDataId(presentPostIdCookie);
      }
  }, [main]);

  useEffect(() => {
    const presentverifIdCookie = Cookies.get('verifUserId');
    if (presentverifIdCookie) {
      setPresentVerifId(presentverifIdCookie);
    }
}, [ver]);

  
    useEffect(() => {
      const cookies = document.cookie.split(";");
      const tokenCode = cookies.find((cookie) =>
        cookie.trim().startsWith("token")
      );
      if (tokenCode) {
        const tok = tokenCode.split("=")[1];
        setToken(tok);
      }
    }, [fet]);
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
                      setPublishId(userData?.publishId);
                      setInvestorId(userData?.investorId);
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



  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_URL}/api/feedbacks`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const feedbackData = await response.json();
          setFeedback(feedbackData); 
        } else {
          toast.error("Failed to fetch feedback data");
        }
      } catch (err) {
        toast.error("Failed to fetch feedback data");
      }
    };
    fetchFeedbackData(); 
  }, [feed]);

  
  useEffect(() => {
    const fetchConversationData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/conver`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                const converData = await response.json();
                const filteredData = converData.filter(convo => convo.uniqueId === id);
                setConversationData(filteredData);
            } else {
                toast.error("Failed to fetch conversation data");
            }
        } catch (err) {
            toast.error("Failed to fetch conversation data");
        }
    };
    if (id) {
        fetchConversationData();
    }
}, [con, id]);


  useEffect(() => {
    const fetchPublicData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_URL}/api/contents`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const feedbackData = await response.json();
          setPublic(feedbackData); 
        } else {
          toast.error("Failed to fetch feedback data");
        }
      } catch (err) {
        toast.error("Failed to fetch feedback data");
      }
    };
    fetchPublicData(); 
  }, [pub]);
  
  useEffect(() => {
    const fetchMainData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_URL}/api/mainDatas`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const feedbackData = await response.json();
          setMainData(feedbackData); 
        } else {
          toast.error("Failed to fetch feedback data");
        }
      } catch (err) {
        toast.error("Failed to fetch feedback data");
      }
    };
    fetchMainData(); 
  }, [main]);

  useEffect(() => {
    const fetchMainData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_URL}/api/verifys`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const verifyData = await response.json();
          setVerify(verifyData); 
        } else {
          toast.error("Failed to fetch feedback data");
        }
      } catch (err) {
        toast.error("Failed to fetch feedback data");
      }
    };
    fetchMainData(); 
  }, [ver]);

  useEffect(() => {
    const fetchtrending = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_URL}/api/trendings`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const trendingData = await response.json();
          setTrendingPg(trendingData); 
        } else {
          toast.error("Failed to fetch feedback data");
        }
      } catch (err) {
        toast.error("Failed to fetch feedback data");
      }
    };
    fetchtrending(); 
  }, [tren]); 

    const logout = () => {
        setToken(null);
        document.cookie = 'token=; max-age=0; path=/';
    };

    console.log(investorId)

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
        setFet,
        feed,
        setFeed,
        feedback,
        pub,
        setPub,
        publics,
        setMain,
        main,
        presentDataId,
        mainData,
        tren,
        setTren,
        trendingPg,
        verify,
        ver,
        setVer,
        presentVerfId,
        publishId,
        investorId,
        conversationData,
        con,
        setCon
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => {
  return useContext(AppContext);
};
