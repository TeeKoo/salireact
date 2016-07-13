import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

class Social extends Component {

  componentWillMount() {
      !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs"); //twitter
      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk')); //facebook
  }

  render() {
    var styles = {
        marginTop: '50px'
    }
    return (
      <div className="container" style={styles}>
        <div className="row">
          <div className="col-lg-4">
            <a className="twitter-timeline" href="https://twitter.com/SuomenSalit" data-widget-id="407611498085634049">Twiittejä käyttäjältä @SuomenSalit</a>
          </div>
          <div className="col-lg-4">
            <div className="fb-like-box" data-href="https://www.facebook.com/Suomensalit-620983024632798/" data-colorscheme="light" data-show-faces="true" data-header="true" data-stream="false" data-show-border="true"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Social
