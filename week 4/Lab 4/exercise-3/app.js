var should = require('should')
var calc = require('./calculator')

calc.addTwoNumbers("a", "b");

describe('Calculator', function() {

    describe('when used synchronously', function() {

        it('should add two numbers correctly', function() {
            calc.addTwoNumbers(2, 2).should.equal(4);
        })
    })
})

calc.subtractTwoNumbers("a", "b");

describe('Calculator', function(){

    describe('when used synchronously', function() {

        it('should subtract two numbers correctly', function(){
            calc.subtractTwoNumbers(10, 4).should.equal(6);
        })
    })
})

describe.notEqual("a", "b");

describe('Calculator', function(){

    describe('when used synchronously', function(){

        it('should determine if two numbers are not equal', function(){
            
        })
    })
})