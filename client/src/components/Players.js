import React from "react";

class Players extends React.Component {
  render(props) {
    return (
      <div className="players">
        <h3>{this.props.name}</h3>
        <h4>{this.props.country}</h4>
      </div>
    );
  }
}
export default Players;
