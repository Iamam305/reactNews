import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import NewsGrid from './components/NewsGrid.js'


export class App extends Component {
  render() {
    return (
      <>
      <Header/>
     <NewsGrid/>
      </>
    )
  }
}

export default App