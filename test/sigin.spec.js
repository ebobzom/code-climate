import chaiHttp from 'chai-http';
import chai from 'chai';
import { expect } from 'chai';
import app from'../server.js';

chai.use(chaiHttp);

describe('POST /', (done) => {
    it('should have all required signin property', function setTime(done){
        this.timeout(10000);
        chai.request(app)
          .post('/')
          .send({
            "firstName": "test",
            "lastName": "test",
            "email": "test@gmail.com" 
        })
          .end((err, res) => {
            if(err) done();
            expect(err).to.be.null;
            expect(res).to.be.json;
            expect(res.body.ans[0]).to.have.property('id');
            expect(res.body.ans[0]).to.have.property('first_name');
            expect(res.body.ans[0]).to.have.property('last_name');
            expect(res.body.ans[0]).to.have.property('email');
            expect(res).to.have.status(201);
            done();
          });
      });
});