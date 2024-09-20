export class Wikipedia {
  async getOnThisDay() {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const url = `${link}/${month}/${day}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
}

const link = "https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all";
