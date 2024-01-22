import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import CandidatesRoutes from './routes/candidates.routes.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api/candidates', CandidatesRoutes);

app.get('/', (req, res) => {
    res.send('Documentation');
});

export default app;