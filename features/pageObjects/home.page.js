import Page from './page.js';
class HomePage extends Page {
  // Validate the login
  get btnLoginIn() {
    return $('#login2');
  }
  get btnSignIn() {
    return $('#signin2');
  }

  get carusel() {
    return $('#carouselExampleIndicators');
  }
  // Validate the logo
  get imgLogo() {
    return $('.navbar-brand');
  }

  get loginModal() {
    return $('.modal-content');
  }
  // Actions => log in
  async openLoginModal() {
    await this.btnSignIn.click();
    console.log('Sign in button is click');
  }
  open(path) {
    super.open(path);
  }
}

export default new HomePage();
