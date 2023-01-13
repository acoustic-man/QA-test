import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageObjects/home.page.js';
import Page from '../pageObjects/page.js';

Given(/^I am on the (\w+) page$/, async (page) => {
  Page.open(baseUrls.homePage);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {});

Then(/^I should see a flash message saying (.*)$/, async (message) => {});
