import React, { Component } from "react";
import "./App.css";
//Redux components
import { sendData, getData } from "./actions/menuAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Menu from "./components/menu";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      response: "",
      post: "",
      responseToPost: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callApi = this.callApi.bind(this);
  }

  componentDidMount() {
    this.callApi();
  }

  callApi = () => {
    this.props.getData("/api/drinks");
  };

  handleSubmit = () => {
    this.props.sendData("/api/drink", { post: this.state.post });
  };

  render() {
    // console.log(this.props.getDataFromBackend.drinks.length())
    return (
      <div className="App">
        <Menu data={ this.props.getDataFromBackend.drinks }/>
        <div>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={(e) => this.setState({ post: e.target.value })}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <p style={{ color: "blue" }}>
          <b>{this.props.dataFromBackend.drink}</b>
        </p>
      </div>
    );
  }
}
//React Redux connecting code
function mapStateToProps(state) {
  return {
    dataFromBackend: state.menuReducer.dataFromBackend,
    getDataFromBackend: state.menuReducer.getDataFromBackend,
  };
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      sendData,
      getData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
