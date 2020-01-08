import React from "react";
import "./styles.css";

class Pipeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Pipeline: [],
      show: false
    };
    this.onPercentageClick = this.onPercentageClick.bind(this);
  }
  componentDidMount() {
    fetch(
      `https://5e15531421f9c90014c3d07e.mockapi.io/table?id=${localStorage.getItem(
        "percent"
      )}`
    )
      .then(res => res.json())
      .then(response => {
        this.setState({
          Pipeline: []
        });
      });
  }
  onPercentageClick() {
    this.setState({
      show: true
    });
  }
  render() {
    console.log("props", window.location.href);
    return (
      <div className="percent-container">
        <h1>Percentage Details</h1>
        <table>
          <thead>
            <th>Foo</th>
            <th>Bar</th>
            <th>Bax</th>
          </thead>
          {this.state.Pipeline.map(el => {
            return (
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Pipeline;
