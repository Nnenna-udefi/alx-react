import React, { Component } from 'react';

const WithLogging = ({WrappedComponent}) => {

  const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || "Component";

  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingComponent.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;




  return WithLoggingComponent;
};

export default WithLogging;
