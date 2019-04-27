const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = 'https://www.atg.se/services/racinginfo/v1/api/'
const gameScheduleUrl = `${baseUrl}products/`
const gameDataUrl = `${baseUrl}games/`



export const api = {
    getGameSchedule(gameType) {
        const gameTypeHigherCase = gameType.toUpperCase()
        return fetch(`${proxyUrl}${gameScheduleUrl}${gameTypeHigherCase}`)
        .then(checkStatus)
          
    },
      getGameData(gameId) {
       return fetch(`${proxyUrl}${gameDataUrl}${gameId}`)
        .then(checkStatus)

    }
}

export const checkStatus = response => {
    return new Promise(function (resolve, reject) {
      if (response.ok) {
        handleSuccessResponse(response, resolve, reject)
      } else {
        handleFailedResponse(response, reject)
      }
    })
  }

const handleSuccessResponse = (response, resolve) => {
    response.json()
      .then(function (json) {
        resolve(json)
      })
      .catch(function (e) {
        const errorMessage = `Failed to read json response from ${response.url}`
        console.error(errorMessage)
      })
  }

  const handleFailedResponse = (response, reject) => {
    if (response.headers.get('Content-Length') === '0') {
      reject({requestUrl: response.url })
    }
    response.json()
      .then(function (errorJson) {
        reject({ requestUrl: response.url, payload: errorJson })
      })
      .catch(function (error) {
        const errorMessage = `Failed to read json in error response from ${response.url}`
        console.error(errorMessage)
      })
  }

export default api