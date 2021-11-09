const apiBase = "/api";
export function postRequest(url, body) {
  var isOk = false;
  return new Promise((resolve, reject) => {
    fetch(apiBase + url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    })
      .then((response) => {
        isOk = response.ok;
        if (!isOk) {
          return response.status;
        }
        console.log("res: ", response);
        return response.json();
      })
      .catch((err) => {
        // console.log(err);
      })
      .then((responseData) => {
        if (isOk) {
          resolve(responseData);
          if (responseData.code === 0) {
            resolve(responseData);
          } else {
            // err handling
          }
        } else {
          reject(responseData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

export function postFormData(url, data) {
  var isOk = false;
  return new Promise((resolve, reject) => {
    fetch(apiBase + url, {
      method: "POST",
      // credentials: 'include',
      body: data,
    })
      .then((response) => {
        isOk = response.ok;
        if (!isOk) {
          return response.status;
        }
        return response.json();
      })
      .then((responseData) => {
        if (isOk) {
          resolve(responseData);
          if (responseData.code === 0) {
            resolve(responseData);
          } else {
            // error handling
          }
        } else {
          reject(responseData);
        }
      });
  });
}

export function getRequest(url) {
  var isOk = false;
  return new Promise((resolve, reject) => {
    fetch(apiBase + url, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        isOk = response.ok;
        // console.log(response);
        if (!isOk) {
          return response.status;
        }
        return response.json();
      })
      .then((responseData) => {
        // console.log(responseData)
        if (isOk) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      });
  });
}

export function deleteRequest(url) {
  var isOk = false;
  return new Promise((resolve, reject) => {
    fetch(apiBase + url, {
      method: "DELETE",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        isOk = response.ok;
        // console.log(response);
        if (!isOk) {
          return response.status;
        }
        return response.json();
      })
      .then((responseData) => {
        // console.log(responseData)
        if (isOk) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      });
  });
}

export function mockResult(result) {
  return new Promise((resolve, reject) => {
    resolve(result);
  });
}
