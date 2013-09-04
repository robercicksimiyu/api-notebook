/* global describe, it */

describe('Embeddable Widget', function () {
  var fixture = document.getElementById('fixture');

  it('should exist', function () {
    expect(Notebook).to.exist;
  });

  it('should append to a DOM node', function () {
    expect(fixture.childNodes.length).to.equal(0);

    var notebook = new Notebook(fixture);

    expect(fixture.childNodes.length).to.equal(1);
    expect(fixture.childNodes[0]).to.equal(notebook.frame);

    notebook.remove();
  });

  it('should accept a custom append function', function () {
    expect(fixture.childNodes.length).to.equal(0);

    var notebook = new Notebook(function (el) {
      fixture.appendChild(el);
    });

    expect(fixture.childNodes.length).to.equal(1);
    expect(fixture.childNodes[0]).to.equal(notebook.frame);

    notebook.remove();
  });

  it('should be able to pass through custom styles', function () {
    var notebook = new Notebook(fixture, {
      style: {
        border: '1px solid red'
      }
    });

    expect(fixture.childNodes.length).to.equal(1);
    expect(fixture.childNodes[0]).to.equal(notebook.frame);
    expect(notebook.frame.style.borderWidth).to.equal('1px');
    expect(notebook.frame.style.borderStyle).to.equal('solid');
    expect(notebook.frame.style.borderColor).to.equal('red');

    notebook.remove();
  });

  it('should trigger a ready event when the child frame is ready', function (done) {
    var notebook = new Notebook(fixture);

    notebook.on('ready', function () {
      notebook.remove();
      done();
    });
  });
});
