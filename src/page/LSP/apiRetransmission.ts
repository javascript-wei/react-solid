// 符合LSP原则
class Retransmission {
  public async call(fn: (...arg) => Promise<any>) {
    let response = null;
    for (let count = 0;; count++) {
      try {
        response = await fn();
      } catch (error) {
        throw Error("error");
      }
      if (response?.code === 200) {
        return response;
      }
    }
  }
}

class BaseRetransmission extends Retransmission {
  public async call(fn: (...arg) => Promise<any>) {
    let response = null;
    for (let count = 0;; count++) {
      try {
        response = await fn();
      } catch (error) {
        throw Error("error");
      }
      if (response?.code === 200) {
        response.timerCount = count;
        return response;
      }
    }
  }
}

// 违反LSP原则
// class Retransmission {
//   public async call(fn: (...arg) => Promise<any>) {
//     let response = null;
//     for (let count = 0;; count++) {
//       try {
//         response = await fn();
//       } catch (error) {
//         throw Error("error");
//       }
//       if (response?.code === 200) {
//         response.timerCount = count;
//         return response;
//       }
//     }
//   }
// }
// class BaseRetransmission extends Retransmission  {
//   public async call(fn: (...arg) => Promise<any>) {
//     let response = null;
//     for (let count = 0;; count++) {
//       try {
//         response = await fn();
//       } catch (error) {
//         throw Error("error");
//       }
//       if (response?.code === 200) {
//         return response;
//       }
//     }
//   }
// }

