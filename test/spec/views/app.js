/* global describe, it */

describe('App', function () {
  var fixture = document.getElementById('fixture');

  it('should expose a global variable for testing', function () {
    expect(App).to.be.a('function');
  });

  it('should expose views', function () {
    expect(App.View).to.be.an('object');
  });

  it('should expose models', function () {
    expect(App.Model).to.be.an('object');
  });

  it('should expose collections', function () {
    expect(App.Collection).to.be.an('object');
  });

  describe('App instance', function () {
    var view, oldAjax;

    beforeEach(function () {
      view = new App();
    });

    afterEach(function () {
      view.remove();
    });

    it('should have a class name of `application`', function () {
      expect(view.el.className).to.equal('application');
    });

    describe('#render', function () {
      beforeEach(function () {
        view.render();
      });

      it('should render the template', function () {
        expect(view.el.children).to.have.length.above(1);
      });
    });
  });
});
