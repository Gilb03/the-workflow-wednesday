const Organizers = () => (
  <div id="organizers" style={{ 'background-color': 'white', 'text-align': 'center' }} className="section">
    <h2 className="title is-2">Organizers</h2>
    <div className="columns">
      {/* <div className="column">
        <img src="/static/antwoine.jpg" alt="" />
        <p className="title is-5">Antwoine Flowers</p>
      </div> */}
      <div className="column">
        <a href="https://twitter.com/anaptfox"><img src="https://taronfoxworth.com/img/profile.png" alt="" /></a>
        <p className="title is-5">Taron Foxworth</p>
      </div>
      <div className="column">
        <a href="https://twitter.com/_gthebrogod"><img src="/static/gil.jpg" alt="" /></a>
        <p className="title is-5">Gilbert King</p>
      </div>
    </div>
    <style jsx>{`
      .elevator {
        text-align: center;
      }
      img {
        height: 250px;
        margin-bottom:10px;
        border-radius: 50%
      }
    `}</style>
  </div>
)

export default Organizers
