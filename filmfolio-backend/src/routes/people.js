import express from 'express';
import People from '../models/People.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const people = await People.findAll();
    res.json(people);
  } catch (error) {
    console.error('Error fetching people:', error);
    res.status(500).json({ error: 'Failed to fetch people' });
  }
});

export default router;
