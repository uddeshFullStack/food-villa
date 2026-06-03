import React from "react";

export class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    return (
      <div className="profile-demo-card">
        <span className="profile-demo-card__badge">Class component</span>
        <h2 className="info-card__title">Name: {this.props.name}</h2>
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          <p className="m-0">
            Count: <strong>{this.state.count}</strong>
          </p>
          <p className="m-0">
            Count2: <strong>{this.state.count2}</strong>
          </p>
        </div>
        <button
          type="button"
          className="search-btn"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment count
        </button>
      </div>
    );
  }
}
