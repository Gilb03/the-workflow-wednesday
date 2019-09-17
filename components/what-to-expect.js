const WhatToExpect = () => (
  <div>
  <div id="what-to-expect" className="section" style={{'textAlign': 'center'}}>
    <h1 className="title is-2">What To Expect</h1>
    </div>
    <div className="columns">
      <div className="column ">
        <h3 className="title is-3">Collaborate</h3>
        <p>Connect with other ambitious individuals in a variety of different fields. Gain access to other perspectives and brainstorm for your passion projects. 9/10 there is someone available who has had some skin in the field, no cost to you.
        </p>
      </div>
      <div className="column">
        <h3 className="title is-3">Create</h3>
        <p>It’s hard to make time for your projects and even yourself. Get the chance to attend free live classes and workshops for various topics, discuss dreams, or even toss around ideas. 
          </p>
      </div>
    </div>
    <div className="columns">
     <div className="column">
        <h3 className="title is-3">Build Community</h3>
        <p>Hey, we’re all here to grow our networks, relax, vibe and get productive. We will be having weekly discussions centered around growing comfortability 
          in expressing our ideas and becoming tighter knit in the process. Plain and simple! </p>
     </div>
      <div className="column">
        <h3 className="title is-3">On Your Time</h3>
        <p>There is no commitment necessary. Everybody is dealing with enough priority overload already. We should flow, and that’s just how it goes.</p>
      </div>
    </div>
    <style jsx>{`
      #what-to-expect {
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

export default WhatToExpect
