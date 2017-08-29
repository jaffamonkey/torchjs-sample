'use strict';

const opn = require('opn');
const path = require('path');
const {
  appendToContext
} = require('macaca-reporter');

const cwd = process.cwd();

describe('test/torch-sample.test.js', function() {

  afterEach(function(done) {
    const that = this;
    const filepath = path.join(cwd, 'screenshots', `${that.currentTest.title}.png`)
    const reportspath = path.join(cwd, 'reports');
    setTimeout(() => {
      Macaca.screenshot({
        directory: filepath,
        height: 600,
        width: 375
      }, (e) => {
        appendToContext(that, filepath);
        done();
      });
    }, 1500);
  });

  after(function() {
    if (process.env.DEBUG) {
      opn(path.join(__dirname, '..', 'reports', 'index.html'));
    }
  });

  describe('test suites 1', function() {
    it('should be ok', function() {
      // your test case
    });
  });

  describe('test suites 2', function() {
    it('should be ok', function() {
      // your test case
    });
  });
});
