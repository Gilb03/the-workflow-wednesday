 const Organizers = () => (
  <div className="section" id="organizers" style={{ 'backgroundColor': 'white', 'textAlign': 'center'}}>
    <h2 className="title is-2">Organizers</h2>
    <div className="columns">
      <div className="column">
        <a href="https://www.linkedin.com/in/gilbertking/" target="_blank"><img src="/static/gil.jpg" alt="" /></a> 
        <p className="title is-5">Gilbert King</p>
      </div>
      <div className="column">
        <a href="https://www.linkedin.com/in/cyrinathomas/" target="_blank"><img src="/static/Cyrina.JPG" alt="" /></a> 
        <p className="title is-5">Cyrina Thomas</p> 
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
