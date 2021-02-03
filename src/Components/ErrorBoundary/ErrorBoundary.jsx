import React, { Component } from "react";
import "./ErrorBoundary.scss";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-image-overlay">
          <div className="error-image-container" />
          <div className="error-message-text">Sorry this page is broken!</div>
        </div>
      );
    }

    return this.props.children;
  }
}
