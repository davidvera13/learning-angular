export class DataService {
  getDetails() {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('data')
      }, 1500)
    });
  }
}
