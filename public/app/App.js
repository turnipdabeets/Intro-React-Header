var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/Header');

var Main = React.createClass({

  render: function(){
      return(

        <Header />
      
      );
  
  }

});

ReactDOM.render(<Main />,document.getElementById('app'));