import React from 'react';
import './MainView.css';
import '../api/api';
import api from '../api/api';
// @ts-ignore
import ListOfData from '../components/ListOfData.tsx';

class MainView extends React.Component<{}, { gameData: {races: []}, game: { id: string}, typeOfGame: string, betType: string, isFetching: boolean }> {
    constructor(props) {
        super(props)
        this.state = {
            typeOfGame: '',
            isFetching: false,
            betType: '',
            game: {id: ''},
            gameData: {races: []}
        }
    }
    componentDidMount() {

    }

    isValidGameType = () => {
        const inputTextNoCase = this.state.typeOfGame.toUpperCase()
        if (inputTextNoCase === 'V75' ||
            inputTextNoCase === 'V65' ||
            inputTextNoCase === 'V64' ||
            inputTextNoCase === 'V4') {
            return true
        }
        return false
    }

    handleInputChange = (e: {target: {value: string}}) => {
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
            api.getGameSchedule(this.state.typeOfGame)
                .then((response) => {
                    if (response.upcoming.length === 0 && response.results.length === 0) {
                        return
                    }
                    const gameTypeToDisplay = response.upcoming.length === 0 ? response.results : response.upcoming
                    let game = gameTypeToDisplay[0]
                    if (response.upcoming.length === 0) {
                        game = gameTypeToDisplay[gameTypeToDisplay.length - 1]
                    }
                    this.setState({
                        betType: response.betType,
                        game: game,
                    })
                    api.getGameData(game.id)
                        .then((response) => {
                            this.setState({
                                gameData: response,
                                isFetching: false
                            })
                        })
                })
        }

    }

    render() {
        const { isFetching, betType, gameData, game } = this.state

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
                    {isFetching ?
                        <div className="loader"></div> :
                        <ListOfData
                            gameData={gameData}
                            game={game}
                            betType={betType}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default MainView;
