import decode from 'jwt-decode';

class AuthService {
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  login (idToken) {
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  loadUser() {
    JSON.parse(localStorage.getItem('id_token'));
  }
  
  logout() {
    localStorage.removeItem('id_token');

    window.location.assign('/');
  }
}

export default new AuthService();
