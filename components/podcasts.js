const Podcasts = () => (
        <div>
        <div id="portfolio" className="section" style={{'textAlign': 'center'}}>
          <h1 className="title is-2">I Love Podcasts </h1>
          </div>
          <div className="columns">
            <div className="column ">
              <h3 className="title is-3">Art picture 1 </h3>
            </div>
            <div className="column">
              <h3 className="title is-3">Art picture 2 </h3>
            </div>
          </div>
          <div className="columns">
           <div className="column">
              <h3 className="title is-3">Art picture 3 </h3>
           </div>
          </div>
          <style jsx>{`
            #portfolio {
              text-align: center;
              background-color: white;
            }
            .elevator {
              text-align: center;
            }
            .title {
              font-weight: bold;
              text-align: center;
            }
            .img {
              height: 250px;
              border-radius: 50%;
            }
          `}</style>
      </div>    
      )
      export default Podcasts