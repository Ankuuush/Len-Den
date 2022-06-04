import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar";
import HomeState from "./Context/Home/HomeState";
import CurrentItemDetails from "./Components/Home/CurrentItemDetails";
import Form from "./Components/Application Form/Form";
import MyApplications from "./Components/MyApplications/MyApplications";
import RepayedLoanDetails from "./Components/MyApplications/RepayedLoanDetails";
import LoanRequests from "./Components/Loan Requests/LoanRequests";
import BorrowerDetails from "./Components/Loan Requests/BorrowerDetails";
import LRequestState from "./Context/Loan Request/LRequestState";
import TermsAndConditions from "./Components/Loan Requests/TermsAndConditions";
import Offers from "./Components/MyApplications/Offers";
function App() {
  return (
    <HomeState>
      <LRequestState>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavBar />
                  <Home />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/currentLoan"
              element={
                <>
                  <NavBar />
                  <CurrentItemDetails />
                </>
              }
            />
            <Route
              path="/apply"
              element={
                <>
                  <NavBar />
                  <Form />
                </>
              }
            />
            <Route
              path="/applications"
              element={
                <>
                  <NavBar />
                  <MyApplications />
                </>
              }
            />
            <Route
              path="/repayeddetails"
              element={
                <>
                  <NavBar />
                  <RepayedLoanDetails />
                </>
              }
            />
            <Route
              path="/lend"
              element={
                <>
                  <NavBar />
                  <LoanRequests />
                </>
              }
            />
            <Route
              path="/borrowerDetails"
              element={
                <>
                  <NavBar />
                  <BorrowerDetails />
                </>
              }
            />
            <Route
              path="/termsconditions"
              element={
                <>
                  <NavBar />
                  <TermsAndConditions />
                </>
              }
            />
             <Route
              path="/offers"
              element={
                <>
                  <NavBar />
                  <Offers />
                </>
              }
            />
          </Routes>
        </Router>
      </LRequestState>
    </HomeState>
  );
}

export default App;
