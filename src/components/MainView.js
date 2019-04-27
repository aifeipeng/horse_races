import React from 'react';
import logo from '../logo.svg';
import './MainView.css';
import '../api/api';
import api from '../api/api';

class MainView extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            typeOfGame: '',
            isFetching: false,
            isInvalidGameType: false
        }
    }
    componentDidMount() {

    }

    isValidGameType = () => {
        const inputTextNoCase = this.state.typeOfGame.toLowerCase()
        if (inputTextNoCase === 'v75' ||
            inputTextNoCase === 'v65' ||
            inputTextNoCase === 'v64' ||
            inputTextNoCase === 'v4') {
            return true
        }
        return false
    }

    handleInputChange = (e) => {
        const saveValue = e.target.value;
        this.setState({
            typeOfGame: saveValue 
        });
    }

    handleSearchClick = () => {
        if (this.isValidGameType()) {

            this.setState({
                isFetching: true
            })
            //api.getGameSchedule(this.state.typeOfGame)
        }

    }

    render() {

        const { isFetching } = this.state
        console.log('sdvjo', this.state.typeOfGame)
        return (
            <div className="App">
                <div className="searchArea">

                    <input placeholder='Enter game type here' 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={this.state.typeOfGame}
                    onChange={(e) => this.handleInputChange(e)}
                    ></input>
                    <button onClick={this.handleSearchClick}>Search</button>
                </div>
                <div>
                    {isFetching &&
                        <div className="loader"></div>
                    }
                </div>

            </div>
        );
    }

}

export default MainView;
