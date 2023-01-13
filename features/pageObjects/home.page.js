class HomePage {
  // Web location html element
  get btnSignIn() {
    console.log($('.login'));
    return $('.login');
  }
  // TODO: make check for not existing element on the page
  get linkContact() {
    return $('#contact-link');
  }
  get imgLogo() {
    return $('.logo.img-responsive');
  }

  // Actions => navigate to sign in page
  async navigateToLoginPage() {
    await this.btnSignIn.click();
    console.log('Sign in button is click');
  }
}

export default new HomePage();
