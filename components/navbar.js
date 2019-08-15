const Navbar = (props) => (

  <div className= "navbar">
    <nav className ="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="#what-to-expect">What To Expect</a>
        <a className="navbar-item" href="#location">Locations</a>
        <a className="navbar-item" href="#organizers">Organizers</a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://www.instagram.com/hill7org/" target="_blank">Instagram</a>
       {<a className="navbar-item" href="https://www.facebook.com/hill7org/" target="_blank">Facebook</a>}
{<a className="navbar-item" href="https://twitter.com/hill7org" target="_blank">Twitter</a> /* grouped */}
      </div>
      <div className="navbar-item">
        <div className="field is-separated">
<p className="control">
            <a
              className="button is-white"
              href="#signup">
              <span>Sign Up</span>
            </a>
</p>
        </div>
      </div>
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
           { <a id="twitter"
                className="button is-white"
                data-social-network="Twitter"
                data-social-action="tweet"
                data-social-target="https://fridays.hill7.org"
                target="_blank"
                href="https://twitter.com/intent/tweet?text=#HillmanFridays">
                <span className="icon"><i className="fa fa-twitter"></i></span>
                <span>Tweet</span>
</a>}
          </p>
        </div>
      </div>
  </nav>

  { <style jsx="true">{`
        {
            .elevator {
              text-align: center;
            }
            #twitter {
                color: #55acee;
                border-color: #55acee;
            }
            #twitter:hover {
                background: #55acee;
                border-color: #55acee;
                color: white;
            }
            .navbar {
              { background-color: #f36d21; }
            }
            .navbar-item {
              { color: white;
              font-weight: bold;
            }
            img {
              height: 250px;
              border-radius: 50%;
            }
        }
      `}</style> }
     </div>
)

export default Navbar
