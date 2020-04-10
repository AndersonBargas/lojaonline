import request from 'supertest';

import express from 'express';
import loaders from '../loaders'

const jwtManager = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkdlcmVudGUiLCJpYXQiOjE1MTYyMzkwMjIsInBlcm1pc3Npb25zIjpbImNyZWF0ZSIsImRlbGV0ZSIsInJlYWQiLCJ1cGRhdGUiXX0.GDDaAg97-xnZksqVFF1G0Ni1m0W5J03u8Q7DIkfsMfc';
const jwtClient = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNsaWVudGUiLCJpYXQiOjE1MTYyMzkwMjIsInBlcm1pc3Npb25zIjpbInJlYWQiXX0.TgI_PIlPvBzbXvVWw4D0ydtnsc8aFwuUgddt4Zsg9eg';

describe('Post Endpoints', () => {
    it('should create a new product using the manager credentials', async () => {
        const app = express();
        await loaders({ app: app });

        const res = await request(app)
        .post('/api/products')
        .set('Authorization', 'Bearer ' + jwtManager)
        .send({
            name: 'panela de ferro fundido',
            description: 'alta qualidade',
            price: 180.50
        });
        expect(res.status).toEqual(201);
    })
})

describe('Post Endpoints', () => {
    it('should not create a new product using the client credentials', async () => {
        const app = express();
        await loaders({ app: app });

        const res = await request(app)
        .post('/api/products')
        .set('Authorization', 'Bearer ' + jwtClient)
        .send({
            name: 'panela de ferro fundido',
            description: 'alta qualidade',
            price: 180.50
        });
        expect(res.status).toEqual(401);
    })
})