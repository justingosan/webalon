var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Webalon = require('../game-core/webalon');
var WebalonPeer = require('../utils/p2pHelper');

// require('../main.css');

var Main = React.createClass({
  getInitialState: function(){
    window.webalonInstance = new Webalon();
    window.webalonPeerInstance = new WebalonPeer(); 
    return {}
  },
  render: function () {
    return (
      <div className='main-container'>
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

module.exports = Main;