declare global {
  interface Window {
    _ENV: {
      REACT_APP_API_BASE_URL: string;
    }
  }
}

export {};