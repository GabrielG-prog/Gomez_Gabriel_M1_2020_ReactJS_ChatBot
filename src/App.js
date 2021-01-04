import React from  'react';
import './App.css';

import Header from'./components/Header'
import TchatContent from'./components/TchatContent'

const App = () => {
	return (
		<div className="app">
            <Header />
            <TchatContent />
        </div>
  	)
}

export default App
