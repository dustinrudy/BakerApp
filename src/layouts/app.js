import React from 'react';
import { Link , hashHistory} from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div className="app">
        <div className="header_home">
        <h3 className="quote">The kitchen is yours, chefs!</h3>
          <p id="batchmaker">Batch Maker</p>
          <ul className="header_ul">
            <Link to="/addrecipe/"><li className="icons_header">
              <button className="button_icons" type="button"><i className="fa fa-plus" aria-hidden="true"></i></button>
            </li></Link>
            <li className="icons_header">
              <button className="button_icons" type="button"><i className="fa fa-cog" aria-hidden="true"></i></button>
            </li>
            <li className="icons_header">
              <button className="button_icons" type="button"><i className="fa fa-user" aria-hidden="true"></i></button>
            </li>
          </ul>
        </div>
        <div className="sidebar_nav">
          <ul className="sidebar_nav_list">
            <li>My Recipes</li>
            <li>Public Recipes</li>
            <li>Popular Recipes</li>
            <li>My Favorite Recipes</li>
            <li>My Pantry</li>
          </ul>
        </div>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
});