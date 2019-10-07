const Portfolio = () => (
  <div>
  <div id="portfolio" className="section" style={{'textAlign': 'center'}}>
    <h1 className="title is-2"> Here's what I'm up to </h1>
    </div>
    <div className="columns">
      <div className="column ">
        <h3 className="title is-3">Taron Foxworth Consulting</h3>
        <p>Connect with other ambitious individuals in a variety of different fields. 
          Gain access to other perspectives and brainstorm for your passion projects. 
          9/10 there is someone available who has had some skin in the field, no cost to you.
        </p>
      </div>
      <div className="column">
        <h3 className="title is-3">Shoot Your Shot Podcast</h3>
        <p>A podcast designed to delve deeper into dating, relationship & gender issues for the millennial in the 21st century.
        Connect with other ambitious individuals in a variety of different fields. 
          Gain access to other perspectives and brainstorm for your passion projects. 
          9/10 there is someone available who has had some skin in the field, no cost to you.
          </p>
      </div>
    </div>
    <div className="columns">
     <div className="column">
        <h3 className="title is-3">Flowers Consulting</h3>
        <p>Connect with other ambitious individuals in a variety of different fields. 
          Gain access to other perspectives and brainstorm for your passion projects. 
          9/10 there is someone available who has had some skin in the field, no cost to you.</p>
     </div>
      <div className="column">
        <h3 className="title is-3">THE WRKFLW</h3>
        <p>Connect with other ambitious individuals in a variety of different fields. 
          Gain access to other perspectives and brainstorm for your passion projects. 
          9/10 there is someone available who has had some skin in the field, no cost to you.</p>
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

export default Portfolio
