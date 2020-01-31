const Users = require('./users-model')
const db = require('../database/dbConfig')

describe('users model', function(){
    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
    describe('add()', function() {
        beforeEach(async () => {
            await db('users').truncate();
        })
        it('adds a new user', async function(){
            await Users.add({username:"Dary", password:"backsits"})
            await Users.add({username:"squirleyDan", password:"alegedlies"})
            const users = await db('users')
            expect(users).toHaveLength(2);
        })
        it('returns the added user', async function(){
            await Users.add({username:"Katy", password:"catfarts"}) 
            .then(res=>{
                expect(res.username).toBe("Katy")
            })
        })
    })
})