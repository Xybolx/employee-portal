import React, { Component } from 'react';
import moment from 'moment';
import './clock.css';

class Clock extends Component {

    state = {
        clock: ''
    };

    loadClock = () => {
        this.setState({ clock: moment().format("h:mm:ssa") });
    };

    componentDidMount() {
        this.loadClock();
        this.handleClockInterval = setInterval(this.loadClock, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.handleClockInterval);
    };

    render() {
        return (
            <div className="clock">
                {this.state.clock}
            </div>
        );
    };
};

export default Clock;