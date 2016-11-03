import React from 'react';
import { Link , hashHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';


const AppBarIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default React.createClass({
  render: function() {
    return (
      <div className="app">
        <AppBar/>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
});