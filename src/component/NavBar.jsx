import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


function NavBar() {

  function loginButton() {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "token": credential.idToken,
          "user": result.user.displayName
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(`${import.meta.env.VITE_frontend_url}/auth/authenticate`, requestOptions)
          .then(response => response.text())
          .then(result => {
            localStorage.setItem('jwtToken', result);
            localStorage.setItem('isAuth', 'true');
          }).catch(error => console.log('error', error));

      }).catch((error) => {
        console.log(error)
      });
  }

  function logoutButton() {
    localStorage.clear();
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("success")
      window.location.href = '/';
    }).catch((error) => {
      console.log("error" + error)
    });
  }

// TODO : ADD PROFILE BUTTON
// TODO : one button at a time

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            <button className="btn btn-primary" onClick={loginButton}>Login Button</button>
            <button className="btn btn-danger" onClick={logoutButton}>Logout Button</button> {' '}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
