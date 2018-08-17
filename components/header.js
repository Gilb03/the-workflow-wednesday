import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <div className="header section">
      <img className="logo" src="/static/workflowfinal.jpg" alt="" />
      {/* <p style={{ 'fontWeight': 'bold', 'text-align': 'center' }}> Every 2nd and 4th Wednesday, at 7:00pm, work with us.</p> */}
      {/* <p style={{ 'fontWeight': 'bold', 'text-align': 'center' }}> Cincinati, Ohio</p> */}
      {/* <div className="column is-half is-offset-one-quarter">
          <a style={{'text-alight': 'center', margin: 'auto', display: 'block', width: '200'}} className="button">Register</a>
        </div> */}
    </div>
    <style jsx>{`
      .logo {
        margin-bottom: 15px;
      }
      .title {
        font-weight: bold;
        color: #282828;
      }
      .header {
        text-align: center;
        background-color: white;
        color: black;
      }
    `}</style>

  </div>
)

export default Header
