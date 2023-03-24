const fs = require('fs/promises')
const pMemo = require('p-memoize')

const memReadFile = pMemo(fs.readFile)

class MovieService {
    static async getAllMockedMovies() {
        const data = await memReadFile(
            __dirname + '/movies_metadata.json',
            {
                encoding: 'utf-8'
            }
        )
        return JSON.parse(data)
    }

    static listMovies() {
        return this.getAllMockedMovies()
    }

    static async getMovieById(id) {
        const movies = await this.getAllMockedMovies()
        return movies.find(movie => movie.id === Number(id))
    }
}

module.exports = {
    MovieService
}
