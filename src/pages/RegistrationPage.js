import React from "react";
import { Link } from "react-router-dom";

class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  render() {
    return (
      <>
        <h2>Register</h2>
        <h3>or <Link to="/login">login</Link></h3>
        <form>
          <div>
            <label for="login">Login</label>
            <input type="text" placeholde="login" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" required />
          </div>
          <div>
            <label for="password_confirmation">Confirmation</label>
            <input type="password_confirmation" required />
          </div>
          <div>
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </>
    );
  }
}

export default RegistrationPage;