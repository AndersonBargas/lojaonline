import request from 'supertest';

import express from 'express';
import loaders from '../loaders'
import { Server } from 'http';

const jwtManager = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkdlcmVudGUiLCJpYXQiOjE1MTYyMzkwMjIsInBlcm1pc3Npb25zIjpbImNyZWF0ZSIsImRlbGV0ZSIsInJlYWQiLCJ1cGRhdGUiXX0.GDDaAg97-xnZksqVFF1G0Ni1m0W5J03u8Q7DIkfsMfc';
const jwtClient = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNsaWVudGUiLCJpYXQiOjE1MTYyMzkwMjIsInBlcm1pc3Npb25zIjpbInJlYWQiXX0.TgI_PIlPvBzbXvVWw4D0ydtnsc8aFwuUgddt4Zsg9eg';

const app = express();
let server:Server;

beforeAll(async (done) => {
    server = await loaders({ app: app });
    done()
})


afterAll(async (done) => {
    server.close(() => {
        done();
    });
})

describe('Post Endpoints', () => {
    it('should create a new product using the manager credentials', async () => {

        const res = await request(app)
        .post('/api/products')
        .set('Authorization', 'Bearer ' + jwtManager)
        .send({
            name: 'panela de ferro fundido',
            description: 'alta qualidade',
            price: 180.50
        });

        expect(res.status).toEqual(201);

    });
});

describe('Post Endpoints', () => {
    it('should not create a new product using the client credentials', async () => {

        const res = await request(app)
        .post('/api/products')
        .set('Authorization', 'Bearer ' + jwtClient)
        .send({
            name: 'panela de ferro fundido',
            description: 'alta qualidade',
            price: 180.50
        });

        expect(res.status).toEqual(401);

    });
});

describe('Post Endpoints', () => {
    it('should not create a new product using an empty input', async () => {

        const res = await request(app)
        .post('/api/products')
        .set('Authorization', 'Bearer ' + jwtManager)
        .send({
            nameX: 'panela de ferro fundido',
            description: 'alta qualidade',
            price: 180.50
        });

        expect(res.status).toEqual(400);

    });
});