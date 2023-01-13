import { Given, When, Then } from '@wdio/cucumber-framework';
import { baseUrls } from '../constant/pageURL.js';
import HomePage from '../pageObjects/home.page.js';

Given(/^I am on the home page$/, async () => {
  HomePage.open(baseUrls.homePage);

  // Validate if we are in correct web page
  await expect(HomePage.carusel).toBePresent();
  await expect(HomePage.imgLogo).toBePresent();
  await expect(HomePage.btnSignIn).toBePresent();
});
