import React, { Component } from 'react';

class AgeCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            birthdate: '',
            age: null,
        };
    }

    handleInputChange = (e) => {
        this.setState({ birthdate: e.target.value });
    };

    calculateAge = () => {
        const birthdate = new Date(this.state.birthdate);
        const currentDate = new Date();

        if (!isNaN(birthdate.getTime())) {
            const age = currentDate.getFullYear() - birthdate.getFullYear();
            const monthDiff = currentDate.getMonth() - birthdate.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthdate.getDate())) {
                this.setState({ age: age - 1 });
            } else {
                this.setState({ age });
            }
        } else {
            this.setState({ age: null });
        }
    };

    render() {
        return (
            <center>
                <div>
                    <h1>Age Calculator</h1>
                    <label>
                        Enter your birthdate:
                        <input
                            type="date"
                            value={this.state.birthdate}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <button onClick={this.calculateAge}>Calculate Age</button>
                    {this.state.age !== null && (
                        <p>Your age is: {this.state.age} years old.</p>
                    )}
                </div>
            </center>
        );
    }
}

export default AgeCalculator;
