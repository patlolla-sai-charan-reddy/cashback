import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class Percentages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentages: [],
      show: false
    };
    this.onPercentageClick = this.onPercentageClick.bind(this);
  }
  componentDidMount() {
    fetch("https://5e15531421f9c90014c3d07e.mockapi.io/percentage")
      .then(res => res.json())
      .then(response => {
        this.setState({
          percentages: response
        });
      });
  }
  onPercentageClick(e) {
    e.persist();
    console.log("called", e);
    localStorage.setItem("percent", e.target.text.replace("%", ""));
  }
  render() {
    return (
      <div className="percent-container">
        {this.state.percentages.map((el, i) => {
          return (
            <h3 className="percent" key={i}>
              <Link
                to={`/percentage?id=${1}`}
                title="Contact Me"
                onClick={this.onPercentageClick}
              >
                {el.percentage}
              </Link>
            </h3>
          );
        })}
      </div>
    );
  }
}

export default Percentages;
