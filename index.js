const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Reemplaza con tu clave real
const BRAWL_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZiYzlhYjNlLWE4ZjQtNDM4Yi05ZmI0LTRlMTY3NjQ4NDdmMyIsImlhdCI6MTc1MzYxNjUxOCwic3ViIjoiZGV2ZWxvcGVyLzM1ZjJmM2FjLWFhZmItNDBmMS0yMDMwLWQyYmE5ZDM5ZmM1NyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTc5LjYuNi4xMDkiXSwidHlwZSI6ImNsaWVudCJ9XX0.0MCCVPAcYIiNtG46TjRgL2L4bmtV0mFemxDnU95vT9eTDX6wi6vvrfz7pIZdWnoZHXPIWecAbmp5CzdO9buDHA';

app.get('/brawl/:tag', async (req, res) => {
  const tag = req.params.tag;

  try {
    const response = await axios.get(`https://api.brawlstars.com/v1/players/%23${tag}`, {
      headers: {
        Authorization: BRAWL_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
