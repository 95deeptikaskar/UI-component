import { MyAngularappPage } from './app.po';

describe('my-angularapp App', () => {
  let page: MyAngularappPage;

  beforeEach(() => {
    page = new MyAngularappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
