export const app = {
  api: "https://server.herbalcarepk.com/public/",
  // api: "http://127.0.0.1:8000/",
  currencySymbol: "PKR",
  currencyCode: "GBP",
  colorOne: "#775CD9",
  colorTwo: "#AE9EFD",
  colorThree: "#F7F7FE",
  adminRole: "admin",
  roles: [
    { id: "admin", name: "Admin" },
    { id: "employee", name: "Employee" },
    { id: "trainer", name: "Trainer" },
  ],
  region: [
    { id: "lahore", name: "Lahore" },
    { id: "hunza", name: "Hunza" },
    { id: "dubai", name: "Dubai" },
    { id: "manchester", name: "Manchester" },
  ],
  cources: [
    { id: "amazon_fba_private_label", name: "Amazon FBA Private Label" },
    { id: "amazon_fba_wholesale", name: "Amazon FBA Wholesale" },
    { id: "amazon_virtual_assistant", name: "Amazon Virtual Assistant" },
  ],
  sleep: (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
  sort: (array, key = "name") => {
    return array.sort((a, b) => {
      if (a[key] > b[key]) return 1;
      if (a[key] < b[key]) return -1;
      return 0;
    });
  },
};
