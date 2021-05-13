// SLAYTE: Node.js Challenge

// You're adding to a state-less express server. The server instantiates a HANDLER-Class per request and invokes its HANDLE-method, which ensures parameters are in order. The HANDLER has a CONTROLLER-instance of which it then invokes the method `updateRemoteApi` on. The CONTROLLER component encapsulates communication with a remote API, which is an old API that is flaky and not well written, but RESTful. CONTROLLER has to invoke two consecutive requests on that API to update two resources within its `updateRemoteApi`-method.

// Requirements:
// Implement the CONTROLLER's method's missing lines in `_attemptUpdateRemoteAPI`
// `_attemptUpdateRemoteAPI` should retry 3 times each communication with the remote API (you may use `promiseRetry` as indicated in `updateRemoteApi`)
// If the request to Resource 2 is considered FAILED after 3 retries, the change/update to Resource 1 must be undone with an appropriate request


// class CONTROLLER {
//   ...

//   // current content: { value: 'old1' }
//   const REMOTE_RESOURCE_1_URL = 'http://example.com/api/resource1'
//   // current content: { value: 'old2' }
//   const REMOTE_RESOURCE_2_URL = 'http://example.com/api/resource2'

//   private _attemptUpdateRemoteAPI = (): Promise<void> => {
//     // TODO: Send PUT { value: 'new1' } on Resource 1.
//     // After success send PUT { value: 'new2'} to Resource 2.
//     // ...
//   }

//   public updateRemoteApi = (): Promise<void> => {
//     return promiseRetry({
//       retries: 3,
//     }, (retry, number) => {
//       if (failed) {
//         return retry()
//       } else {
//         return this._attemptUpdateRemoteAPI()
//       }
//     })
//   }

// }


// =================================================

const request = require('request-promise');
const promiseRetry = require('promise-retry');

  // current content: { value: 'old1' }
  const REMOTE_RESOURCE_1_URL = 'http://example.com/api/resource1'
  // current content: { value: 'old2' }
  const REMOTE_RESOURCE_2_URL = 'http://example.com/api/resource2'

  _attemptUpdateRemoteAPI = ()=> {
    const old_body_1 = { value: 'old1' };
    const new_body_1 = { value: 'new1' };
    const new_body_2 = { value: 'new2' };

    return promiseRetry({ retries: 3}, retry => {
        return request.put({ url: REMOTE_RESOURCE_1_URL, body: new_body_1, json: true }, undefined)
        .catch(retry);
    })
    .catch(err => {
        console.log(`Updating Resource 1 failed, aborting the updateRemoteApi() call`);
        return Promise.reject({
            message: `updateRemoteApi() aborted!`
        });
    })
    .then(response => {
        return promiseRetry({ retries: 3 }, retry => {
            return request.put({ url: REMOTE_RESOURCE_2_URL, body: new_body_2, json: true }, undefined)
            .catch(retry);
        });
    })
    .catch(err => {
        if(err.message === `updateRemoteApi() aborted!`)
            return Promise.reject(err);
        
        console.log('Updating Resource 2 failed, rolling back resource 1');
        return promiseRetry({ retries: 3 }, retry => {
            return request.put({ url: REMOTE_RESOURCE_1_URL, body: old_body_1, json: true }, undefined)
            .catch(retry);
        });
    });
  }

  updateRemoteApi = () => {
    return this._attemptUpdateRemoteAPI();
  }

updateRemoteApi()
.catch(err => console.log('end', err.message));