import React from "react";
import Router from './routes/router';
import Footer from './component/footers';
import Header from './component/headers';

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;