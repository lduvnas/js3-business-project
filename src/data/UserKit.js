const ROOT_URL = "https://frebi.willandskill.eu/";

export default class {
  async register(
    firstName,
    lastName,
    email,
    password,
    organisationName,
    organisationKind
  ) {
    const url = `${ROOT_URL}auth/users/`;
    const payload = {
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind
    };
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload)
    });
  }

  async activateUser(uid, token) {
    const url = `${ROOT_URL}auth/users/activate/`;
    const payload = { uid, token };
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload)
    });
  }

  async login(email, password) {
    const url = `${ROOT_URL}api-token-auth/`;
    const payload = { email, password };
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload)
    });
  }

  async getCustomerList() {
    const url = `${ROOT_URL}api/v1/customers`;
    console.log(url);

    return fetch(url, {
      headers: this.getPrivateHeaders()
    });
  }

  async createCustomar(
    name,
    /*    organisationNr,
    vatNr,
    reference,
    paymentTerm,
    kind, */
    website,
    email,
    phoneNumber
  ) {
    const url = `${ROOT_URL}api/v1/customers`;
    const payload = {
      name,
      /*    organisationNr,
      vatNr,
      reference,
      paymentTerm,
      kind, */
      website,
      email,
      phoneNumber
    };
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload)
    });
  }

  setToken(token) {
    localStorage.setItem("BUSINESS_TOKEN", token);
  }

  getToken() {
    return localStorage.getItem("BUSINESS_TOKEN");
  }

  getPublicHeaders() {
    return {
      "Content-Type": "application/json"
    };
  }

  getPrivateHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`
    };
  }
}
