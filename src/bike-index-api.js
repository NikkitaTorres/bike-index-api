export class BikeIndex {
  static async apiCall(location, distance) {
    try {
    let response = await fetch (`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=${distance}&stolenness=stolen`);
    let json = await response.json();
    return json;
    } catch (error) {
      console.error(error);
    }
  }
}