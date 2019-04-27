const httpMethods = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
}

const baseUrl = 'https://www.atg.se/services/racinginfo/v1/api/'
const gameScheduleUrl = `${baseUrl}products/<gameType>`
const gameDataUrl = '${baseUrl}games/<gameId>'



export const api = {
    getGameSchedule(string) {
        fetch(gameScheduleUrl)
        .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            console.log(JSON.stringify(myJson));
          });
    },
      getGameData(string) {
        fetch(gameDataUrl)
        .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            console.log(JSON.stringify(myJson));
          });

    }
}

export default api