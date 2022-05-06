/* eslint-disable new-cap */
const assert = require('assert');

Feature('LikingResto');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking then unliking one restaurant', async (I) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.name a');

  const firstResto = locate('.name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('like-button');
  I.click('like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestoName = await I.grabTextFrom('.name');

  assert.strictEqual(firstRestoName, likedRestoName);

  // unliking

  I.click('.name a');
  I.seeElement('like-button');
  I.click('like-button');

  I.amOnPage('/#/favorite');
  favoriteRestoNum = await I.grabNumberOfVisibleElements('.card');
  assert.strictEqual(0, favoriteRestoNum);
});
