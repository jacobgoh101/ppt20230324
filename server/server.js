const express = require("express");
const path = require("path");
const { MovieService } = require("./movies.service");

const app = express();

// A test route to make sure the server is up.
app.get("/api/ping", (request, response) => {
  console.log("❇️ Received GET request to /api/ping");
  response.send("pong!");
});

// A mock route to return some data.
app.get("/api/movies", async (request, response) => {
  try {
    console.log("❇️ Received GET request to /api/movies");
    const movies = await MovieService.listMovies();
    response.json({ data: movies });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// A mock route to return some data.
app.get("/api/movies/:id", async (request, response) => {
  try {
    console.log("❇️ Received GET request to /api/movies/:id");
    const movie = await MovieService.getMovieById(request.params.id);
    if (!movie) {
      response
        .status(404)
        .json({ error: `Movie with id ${request.params.id} not found` });
      return;
    }
    response.json({ data: movie });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// Express port-switching logic
let port;
console.log("❇️ NODE_ENV is", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  port = process.env.PORT || 3000;
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
  console.log("⚠️ Not seeing your changes as you develop?");
  console.log(
    "⚠️ Do you need to set 'start': 'npm run development' in package.json?"
  );
}

// Start the listener!
const listener = app.listen(port, () => {
  console.log("❇️ Express server is running on port", listener.address().port);
});
