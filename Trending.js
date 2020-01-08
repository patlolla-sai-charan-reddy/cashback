import React from "react";
import "./styles.css";

class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trending: []
    };
  }
  componentDidMount() {
    fetch("https://5e15531421f9c90014c3d07e.mockapi.io/percentage")
      .then(res => res.json())
      .then(response => {
        this.setState({
          trending: response
        });
      });
  }

  render() {
    return (
      <div className="percent-container">
        {this.state.trending.map(el => {
          return (
            <h3 className="percent" key={el.id}>
              {el.percentage}
            </h3>
          );
        })}
      </div>
    );
  }
}

export default Trending;
