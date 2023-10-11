import "./App.css";

//Importing Libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useReducer, createContext } from "react";

// Importing Function
import { initialState, reducer } from "./Components/Functions/useReducer";

//Importing Components
import Nav from "./Components/Pages/Nav/Nav";
import Footer from "./Components/Pages/Footer/Footer";
import PageNotFound from "./Components/Pages/404/PageNotFound";
import CookieConsent from './Components/Functions/CookieConsent/CookieConsent'
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Loading from "./Components/Pages/Loading/Loading";
import Login from "./Components/Pages/Login/Login";
import FetchUsers from "./Components/Pages/Admin/FetchUsers";
import Quiz from "./Components/Pages/Round_1/Quiz";
import Tresurehunt from "./Components/Pages/Tresure/Tresurehunt";
import Level_1 from "./Components/Pages/Tresure/Level_1";
import Level_2 from "./Components/Pages/Tresure/Level_2";
import Level_3 from "./Components/Pages/Tresure/Level_3";
import Level_4 from "./Components/Pages/Tresure/Level_4";
import Level_5 from "./Components/Pages/Tresure/Level_5";
import SocialLinks from "./Components/Pages/SocialLinks/SocialLinks";
import SignUp2 from "./Components/Pages/Registration/SignUp2";
import EditiorHome from "./Components/Pages/Editior/EditiorHome";
import UserDash from "./Components/Pages/Admin/User/UserDash";

export const UserContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileClicked, setProfileClicked] = useState(false);
  const [isEditProfile, setEditProfile] = useState(false);
  const [isUserVerified, setUserVerified] = useState(false);
  const [VeryPage, setVeryPage] = useState(false);
  const [isMenuClicked, setMenuClicked] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [UserData, setUserData] = useState({});
  const [isFinialCall, setFinialCall] = useState(false);
  // const [isLoggedin,setLoggedin] = useState(false)
  const [isTeamMember,setTeamMembers] = useState(false)

  useEffect(() => {
    // Simulate app loading with a delay of 4.4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6990);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="App">
      {isLoading ? ( // Showing Loading component while isLoading is true
        <Loading />
      ) : (
        <UserContext.Provider value={{ state, dispatch }}>
          <Router>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Dashboard
                    isProfileClicked={isProfileClicked}
                    isEditProfile={isEditProfile}
                    setProfileClicked={setProfileClicked}
                    setEditProfile={setEditProfile}
                    isFinialCall={isFinialCall}
                    setFinialCall={setFinialCall}
                    setMenuClicked={setMenuClicked}
                    isMenuClicked={isMenuClicked}
                    UserData={UserData}
                    setUserData={setUserData}
                  />
                }
              />
              <Route
                exact
                path="/login"
                element={
                  <Login
                    isUserVerified={isUserVerified}
                    setUserVerified={setUserVerified}
                    setVeryPage={setVeryPage}
                    VeryPage={VeryPage}
                  />
                }
              />
              <Route exact path="/register" element={<SignUp2 isTeamMember={isTeamMember} setTeamMembers={setTeamMembers}/>} />
              <Route exact path="*" element={<PageNotFound />} />
              <Route
                exact
                path="/ThisisSecrete"
                element={
                  <FetchUsers
                    isFinialCall={isFinialCall}
                    setFinialCall={setFinialCall}
                  />
                }
              />
             {
              isFinialCall ? <>
 <Route path="/Quiz" element={<Quiz />} />
              <Route path="/TresureHunt" element={<Tresurehunt />}  />
              <Route path="/TresureHunt/TresureHunt1" element={<Level_1 />}  />
              <Route path="/TresureHunt/TresureHunt2" element={<Level_2 />}  />
              <Route path="/TresureHunt/TresureHunt3" element={<Level_3 />} />
              <Route path="/TresureHunt/TresureHunt4" element={<Level_4 />}  />
              <Route path="/TresureHunt/TresureHunt5" element={<Level_5 />} />
              <Route exact path="/CodingRound" element={<EditiorHome />} />
              <Route exact path="/UserDash" element={<UserDash/>} />
              </>:<>
              <Route exact path="*" element={<PageNotFound /> }/>
              </>
             }
             
           
            </Routes>

            {/* NavigationBar */}
            <Nav
              isProfileClicked={isProfileClicked}
              setProfileClicked={setProfileClicked}
              setEditProfile={setEditProfile}
              setMenuClicked={setMenuClicked}
              isMenuClicked={isMenuClicked}
              isEditProfile={isEditProfile}
              isUserVerified={isUserVerified}
              setUserVerified={setUserVerified}
            />

            <ToastContainer />
            <CookieConsent/>
            {/* Footer */}
            <Footer />

            <SocialLinks />
          </Router>
        </UserContext.Provider>
      )}
    </div>
  );
}

export default App;
