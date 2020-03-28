const request = require('supertest');
const app = require('../../src/app');

const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            "name": "APAasdasdD2",
            "email": "contatoapad.com.br",
            "city": "Rio do Sul",
            "whatsapp": "5511941157618",
            "uf": "SC"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLEngth(8);
    })
})