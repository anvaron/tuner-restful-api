const db = require("../db/dbConfig")

// *****************************************
//              Q U E R I E S
// *****************************************
// SELECT ALL
const getAllSongs = async () => {
  try {
    const query = await db.any('SELECT * FROM songs;');
    return query;
  } catch (error) {
    return error;
  }
};

// SELECT BY ID
const getSong = async (id) => {
  try {
    const query = await db.one('SELECT * FROM songs WHERE id=$1;', id)
    return query;
  } catch (error) {
    return error;
  }
}

// INSERT
const createSong = async ({
  name, artist, album, time, is_favorite
}) => {
  try {
    const query = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, artist, album, time, is_favorite]
    );
    return query;
  } catch (error) {
    return error;
  }
}

// DELETE
const deleteSong = async (id) => {
  try {
    const query = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id);
    return query;
  } catch (error) {
    return error;
  }  
}

// UPDATE
const updateSong = async (song, id) => {
  const { name, artist, album, time, is_favorite } = song
  try {
    const query = await db.one(
      'UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *',
      [name, artist, album, time, is_favorite, id]
    );
    return query;
  } catch (error) {
    return error;
  }  
}

module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
};