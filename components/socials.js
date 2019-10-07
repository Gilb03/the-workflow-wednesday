 const Socials = () => (
  <div className="section" id="socials" style={{ 'backgroundColor': 'white', 'textAlign': 'center'}}>
    <h2 className="title is-2">You Should Follow Me</h2>
    <h5>Let's keep in touch, either of these channels work best for me.</h5>
    <div className="columns">
      <div className="column">
        <a href="https://twitter.com/_gilbproducing" target="_blank"><img src="/static/twitter.png" alt="" /></a> 
        <p className="title is-5">twitter</p>
      </div>
      <div className="column">
        <a href="https://soundcloud.com/inthesecondshift" target="_blank"><img src="/static/soundcloud.png" alt="" /></a> 
        <p className="title is-5">soundcloud</p> 
      </div>
      <div className="column">
        <a href="https://www.linkedin.com/in/gilbertking/" target="_blank"><img src="/static/linkedin.png" alt="" /></a> 
        <p className="title is-5">linkedin</p> 
      </div>
    </div>
    <style jsx>{`
      .elevator {
        text-align: center;
      }
      .title {
        font-weight: bold;
      }
      img {
        height: 150px;
        width:  150px;
        margin-bottom:10px;
        border-radius: 50%;
      }
    `}</style>
  </div>)

export default Socials
