// Activity 3: Reusable fetch

export default function dataProvider() {
  const errorMessageMap = {
    400: 'Bad request',
    404: 'Resource not found.',
    500: 'Application error.'
  }

  function myFetch(url, headerOptions = {}) {
    return fetch(url, headerOptions)
      .then(response => {
        return [400, 404, 500].includes(response.status)
          ? errorMessageMap[response.status]
          : response.json()
      }).catch(e => {
        return e;
      })
  }

  return {
    myFetch
  }
}