import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

type Movie = {
	movieId: number;
	title: string;
	summary: string;
	link: string;
	rating: number;
};

const db = new pg.Pool({
	connectionString: process.env.DATABASE_URL,
});

const app = express();
app.use(express.json());

app.get('/api/test', async (req, res) => {
	res.send('Hello, world!');
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
	console.log(`express server listening on port ${process.env.PORT}`);
});

app.post('/api/movie/', async (req, res, next) => {
	try {
		const { title, summary, link, rating } = req.body;
		if (!title || !summary || !link || !rating) {
			throw new ClientError(400, 'all required fields not valid');
		}
		const sql = `
        insert into "movies" ("title", "summary", "link", "rating")
        values ($1, $2, $3, $4)
        returning *
        `;
		const params = [title, summary, link, rating];
		const result = await db.query<Movie>(sql, params);
		const [movie] = result.rows;
		res.status(201).json(movie);
	} catch (err) {
		next(err);
	}
});

app.put('/api/movie/', async (req, res, next) => {
	try {
		const { movieId, title, summary, link, rating } = req.body;
		if (!title || !summary || !link || !rating) {
			throw new ClientError(400, 'all required fields not valid');
		}
		const sql = `
        insert into "movies" ("movieId", "title", "summary", "link", "rating")
        values ($1, $2, $3, $4, $5)
        returning *
        `;
		const params = [movieId, title, summary, link, rating];
		const result = await db.query<Movie>(sql, params);
		const [movie] = result.rows;
		res.status(201).json(movie);
	} catch (err) {
		next(err);
	}
});

app.get('/api/movies', async (req, res, next) => {
	try {
		const sql = `
        select *
        from "movies"
        `;
		const result = await db.query(sql);
		if (!result) throw new ClientError(404, 'movies not found');
		const movies = result.rows;
		res.status(200).json(movies);
	} catch (err) {
		next(err);
	}
});

app.get('/api/movies/:movieId', async (req, res, next) => {
	try {
		const { movieId } = req.params;
		if (!movieId) throw new ClientError(400, `movieId ${movieId} not found`);
		const sql = `
      select *
      from "movies"
      where "movieId" = $1
      `;
		const params = [movieId];
		const result = await db.query(sql, params);
		if (!result) throw new ClientError(404, 'movie not found');
		const movie = result.rows[0];
		res.status(200).json(movie);
	} catch (err) {
		next(err);
	}
});

app.delete('/api/movies/:movieId', async (req, res, next) => {
	const { movieId } = req.params;
	if (!movieId) throw new ClientError(400, `movieId ${movieId} not found`);
	try {
		const sql = `
      delete
      from "movies"
      where "movieId" = $1
      returning *
      `;
		const params = [movieId];
		const result = await db.query(sql, params);
		const deletedMovie = result.rows[0];
		if (!deletedMovie) throw new ClientError(404, 'no item');
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
});
