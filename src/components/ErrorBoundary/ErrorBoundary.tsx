import React, { Component } from 'react';

interface PropsType {
  children?: React.ReactNode;
}

export class ErrorBoundary extends Component<PropsType, { hasError: boolean }> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Произошла ошибка!</h2>;
    }

    return this.props.children;
  }
}
