export default class ChartService {
  async getValues(number) {
    const response = await fetch(`http://localhost:8000?count=${number}`, {
      method: "GET"
    });
    const data = await response.json();
    return data;
  }
}
