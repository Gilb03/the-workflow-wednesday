const Agenda = () => (
  <div style={{ 'backgroundColor': 'white' }} className="section">
    <h1 className="title is-2" style={{ 'textAlign': 'center' }}>Agenda</h1>
    <div className="elevator columns">
      <div className="column is-6 is-offset-3">
        <div className="content">
          <ul>
            <li>
              Welcome (7pm-7:45pm): Meet the team and mingle while folks get settled in
            </li>
            <li>
              Project (7:45pm-11:45pm): Work on things you love. What makes you tick?
            </li>
            <li>
              The End (11:45pm-Midnight)
            </li>
          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      img {
        height: 250px;
        border-radius: 50%
      }
    `}</style>
  </div>
)

export default Agenda
