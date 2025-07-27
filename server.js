const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

// TOKEN de la API de Brawl Stars
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNlMmRhMjY0LTRkM2MtNGNkMy1hNmQwLTUzMmY4ZTRlOTViYiIsImlhdCI6MTc1MzYyOTgzNCwic3ViIjoiZGV2ZWxvcGVyLzM1ZjJmM2FjLWFhZmItNDBmMS0yMDMwLWQyYmE5ZDM5ZmM1NyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNTQuMTg4LjcxLjk0Il0sInR5cGUiOiJjbGllbnQifV19.BWqRX5pWoh1inppvLVUimJaG_9tKjivE3gDQ6uWKSz3yRsMaVX84o39FBd2zHMzjW-XJdC9sOUAjD45kdfSCsw';
app.get('/brawl/*', async (req, res) => {
  const fullPath = req.originalUrl.replace('/brawl/', '');

  const response = await fetch(`https://api.brawlstars.com/v1/${fullPath}`, {
    headers: {
      Authorization: `Bearer ${process.env.BRAWL_API_TOKEN}`
    }
  });

  const data = await response.json();
  res.json(data);
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
