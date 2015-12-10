var expect = require('chai').expect
  , iff = require('./')

describe('iff', function() {

  it('should only call fn if condition true', function() {
    expect(iff(cond(0))(fn).call({ 'foo': 'bar' }, '1', '2')).to.be.eql(undefined)
    expect(iff(cond(1))(fn).call({ 'foo': 'bar' }, '1', '2')).to.be.eql([{ 'foo': 'bar' }, '1', '2'])

    function cond(control) { 
      return function(){
        return control 
      }
    }

    function fn() { 
      return [this, arguments[0], arguments[1]]
    }

  })

})