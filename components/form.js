const SubmitForm = () => (
  <div id="signup" style={{ 'backgroundColor': '#ffc7a8' }} className="section">
    <div className="columns is-mobile">
      <div className="column is-half is-offset-one-quarter">
        <h3 className="title is-3 label">Stay Connected</h3>
        <form style={{ 'padding': '3px', 'textAlign': 'center' }} action="https://tinyletter.com/hillman-friday" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/hillman-friday', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
          <div className="field is-grouped">
            <div className="control is-expanded">
              <input className="input" type="email" name="email" id="tlemail" placeholder="Your email here" />
              <input type="hidden" value="1" name="embed" />
            </div>
            <div className="control">
              <button className="button is-white">Submit</button>
            </div>
          </div>
          {/* <p><label for="tlemail">Be Notified</label></p>
          <p><input type="text" style={{ 'width': '140px' }} name="email" id="tlemail" /></p>
          <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Subscribe" /> */}
        </form>
      </div>
    </div>
    <style jsx>{`
      .title {
        color: white;
        text-align: center;
        font-weight: bold;
      }
    `}</style>
  </div>
)

export default SubmitForm
