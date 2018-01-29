import TweetEmbed from './tweet-embed';

const Twitter = () => (
  <div style={{ 'background-color': 'white' }} className="section">
    <div className="columns">
      <div className="column">
        <TweetEmbed id={"890734688138141697"} options={{ cards: 'hidden' }} />
      </div>
      <div className="column">
        <TweetEmbed id={"883507696279969792"} options={{ cards: 'hidden' }} />
      </div>
      <div className="column">
        <TweetEmbed id={"890733750744698880"} options={{ cards: 'hidden' }} />
      </div>
      {/* <div className="column">
        <TweetEmbed id={"890745856600809477"} options={{ cards: 'hidden' }} />
      </div> */}
    </div>
    <style jsx>{`
      .elevator {
        text-align: center;
        color: white;
      }
      .title {
        color: white
      }
    `}</style>
  </div>
)

export default Twitter
