const request = require('supertest');

const server = require('./api/server')

describe('server', function(){
    it('runs the test', function (){
        expect(true).toBe(true);
    })

    describe('Post /api/login',function(){
        it('should return status 404 no req.body', function(){
        return request(server).post('/api/login')
        .then(res =>{
            expect(res.status).toBe(404)})
        })

        it('should return error message', function(){
            return request(server).post('/api/login')
            .then(res =>{
                expect(res.type).toMatch(/text/i)})
            })
    } )

})