import React, { Component } from 'react';
import classes from './App.css'
import Layout from './HOC/Layout/Layout'
import { connect } from 'react-redux'
import Form from './components/form/Form'
import Weather from './components/Weather/Weather'
import findCurrentCity from './store/actions/findCurrentCity'
const API_KEY = '7f9b040ad7eb40c7bab203110192302'

class App extends Component {

  componentDidMount() {
    this.props.findCurrentCity()
    
    
  }
  render() {
    
    



    return (
      <Layout isDay={this.props.state.isDay}>
        <div className={[classes.App]}>
          <h1>Check your weather!</h1>
          <Form API_KEY={API_KEY} />
          {!!this.props.state.city ?
            <Weather
              city={this.props.state.city}
              country={this.props.state.country}
              humidity={this.props.state.humidity}
              temperature={this.props.state.temperature}
              condition={this.props.state.condition}
              image={this.props.state.image}
            />

            : null}

        </div>
      </Layout>
    );
  }
}


function mapStateToProps(state) {
  return {
    state: state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    findCurrentCity: () => dispatch(findCurrentCity())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
