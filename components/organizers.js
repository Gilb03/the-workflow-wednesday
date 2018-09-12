 const Organizers = () => (
  <div className="section" id="organizers" style={{ 'backgroundColor': 'white', 'textAlign': 'center'}}>
    <h2 className="title is-2">Organizers</h2>
    <div className="columns">
      {/* <div className="column">
        <img src="/static/antwoine.jpg" alt="" />
        <p className="title is-5">Antwoine Flowers</p>
      </div> */}
      <div className="column">
        <a href="https://twitter.com/bhopp_06"><img src="/static/bhopp.jpg" alt="" /></a>
        <p className="title is-5">Brandon Hopper</p>
      </div>
      <div className="column">
        <a href="https://twitter.com/_gilbproducing"><img src="/static/gil.jpg" alt="" /></a>
        <p className="title is-5">Gilbert King</p>
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
        height: 250px;
        width:  250px;
        margin-bottom:10px;
        border-radius: 50%;
      }
    `}</style>
  </div>)

export default Organizers
