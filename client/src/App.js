import React, { Component } from "react";
import "./App.css";

//Redux components
import { sendData, getData } from "./actions/menuAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Drink } from "./Drink";

var drinks = [];

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
    // Put drink data from redux store in an array of drink objects
    var i;
    for (i = 0; i < this.props.getDataFromBackend.length; i++) {
      drinks.push(new Drink(this.props.getDataFromBackend[i]));
    }

    return (
      <div className="App">
        {/* Search for instructions on how to make a given drink from the list */}
        <div className="columns search">
          <input
            className="input is-primary is-rounded"
            placeholder="Find instructions on how to make these drinks."
            type="text"
            value={this.state.post}
            onChange={(e) => this.setState({ post: e.target.value })}
          />
          <button
            className="button is-primary is-rounded"
            onClick={this.handleSubmit}
          >
            Search
          </button>
        </div>
        <p>
          {this.props.dataFromBackend.drink ? (
            <strong>Instructions: </strong>
          ) : (
            ""
          )}
          {this.props.dataFromBackend.drink}
        </p>

        {/* Display list of drinks */}
        <div>
          {drinks.map((drink, index) => {
            return (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src={drink.image} alt="Placeholder" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{drink.name}</p>
                      <p className="subtitle is-6">Drink ID: {drink.id}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
