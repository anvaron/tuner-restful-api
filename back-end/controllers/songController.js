// 
const express = require("express");
const songs = express.Router();

//
const db = require("../db/dbConfig");
const { checkSong, checkBoolean, checkArtist } = require("../validations/checkData")
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/songs");

// *****************************************
//              R O U T E S
// *****************************************
// INDEX: get a list (or index) of all songs
songs.get('/', async (req, res) => {
  const data = await getAllSongs();
  // Validating
  if (data) {  
    res.status(200).json(data);
  } else {
    // 500: internal server error
    res.status(500).json({ error: 'server error' });
  }
});

// SHOW: get an individual view (show one song)
songs.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getSong(id);
  // Validating id
  if (data.id) {  
    res.status(200).json(data);
  } else {
    // 404: Resource not found
    res.status(404).json({ error: "not found" });
  }
});

// CREATE: create a new song
songs.post("/",
  checkSong,
  checkArtist,
  checkBoolean,
  async (req, res) => {
    try {
      const data = await createSong(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
);

// DELETE: deletes a song by id
songs.delete('/:id', async (req, res) => {
  const { id } = req.params
  const data = await deleteSong(id);
  if (data.id) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ error: 'not found' });
  }   
});

// UPDATE: Updates a song by id
songs.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await updateSong(req.body, id);
   if (data.id) {
     res.status(200).json(data);
   } else {
     res.status(404).json({ error: 'not found' });
   }   
})

module.exports = songs;