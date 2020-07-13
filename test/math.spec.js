const assert = require('assert');
const Math = require('../test/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function() {
    //hooks - Executa antes, 
    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done){
       const math = new Math();
       this.timeout(3000);
       
       value = 5;

       math.sum(5,5, (value) => {
        expect(value).to.equal(10)
        done();
       });    
    });

    //it.only - executa apenas um teste / it.skip - deixar esse teste como pendente
    it('Multiply two numbers', function() { 
        const math = new Math();
        const obj = {
            name: 'Celso Henrique'
        };

        const obj2 = {
            name: 'Celso Henrique'
        };
        
        expect(obj).to.deep.equal(obj2);
    });

    it.only('Calls req with sum and index values', function() {
        const req = {};
        const res = {
            load: function load(){
                console.log('Called!')
            }
        };

        sinon.stub(res, 'load').returns('xpto');

        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.args[0][0]).to.equal('index');
    });
});