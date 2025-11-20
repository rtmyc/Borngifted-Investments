import React from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ErrorBoundaryProps, ErrorBoundaryState } from "@/types";

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We're sorry for the inconvenience. Please try refreshing the page or return to the home page.
            </p>
            {this.state.error && (
              <details className="mb-6 text-left bg-gray-50 p-4 rounded">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                  Error Details
                </summary>
                <code className="text-xs text-red-600 break-all">
                  {this.state.error.toString()}
                </code>
              </details>
            )}
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => window.location.reload()}
                variant="outline"
                className="border-honeymark-green text-honeymark-green hover:bg-honeymark-green hover:text-white"
              >
                Refresh Page
              </Button>
              <Button
                onClick={this.handleReset}
                className="bg-honeymark-orange text-white hover:bg-honeymark-orange/90"
              >
                Go Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
