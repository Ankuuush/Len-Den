import React from "react";
import "./Profile.scss";
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
  {
    
  return (
    <>
    <button type="button" class="btn btn-dark" onClick={()=>navigate("/")}>Log Out</button>
      <div className="card">
        <div className="ds-top" />
        <div className="avatar-holder">
          <img
            src="data:image/png;base64,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"
            alt="User Logo"
          />
        </div>
        <div className="name">
          <h2>Yash Kagi</h2>
        </div>
        <div className="ds-info">
          <div className="ds pens">
            <h6 className="lend" title="Number of pens created by the user">
              Lend <i className="fas fa-edit" />
            </h6>
            <p className="lend">2</p>
            <h6 className="lend">Credits</h6>
            <p className="lend">944</p>
          </div>
          <div className="ds projects">
            <h6
              className="borrow"
              title="Number of projects created by the user"
            >
              Borrow <i className="fas fa-project-diagram" />
            </h6>
            <p className="borrow">NIL</p>
          </div>
          <div className="ds posts">
            <h6 className="active" title="Number of posts">
              Active <i className="fas fa-comments" />
            </h6>
            <p className="active">YES</p>
            <h6 className="payment">payment due</h6>
            <p className="payment">0</p>
          </div>
        </div>
        <div class="buttons">
          <div class="action_btn">
            <button
              name="submit"
              class="action_btn submit"
              type="submit"
              value="Save"
              onClick={()=>navigate("/application")}
            >
              Apply
            </button>
            <button
              name="submit"
              class="action_btn cancel"
              type="submit"
              value="Cancel"
              onClick={()=>navigate("/lendmoney")}
            >
              Lend Money
            </button>
            <p id="saved"></p>
          </div>
        </div>
      </div>
    </>
  );
};
}
export default Profile;
