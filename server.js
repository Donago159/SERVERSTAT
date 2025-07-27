const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

// TOKEN de la API de Brawl Stars
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNlMmRhMjY0LTRkM2MtNGNkMy1hNmQwLTUzMmY4ZTRlOTViYiIsImlhdCI6MTc1MzYyOTgzNCwic3ViIjoiZGV2ZWxvcGVyLzM1ZjJmM2FjLWFhZmItNDBmMS0yMDMwLWQyYmE5ZDM5ZmM1NyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNTQuMTg4LjcxLjk0Il0sInR5cGUiOiJjbGllbnQifV19.BWqRX5pWoh1inppvLVUimJaG_9tKjivE3gDQ6uWKSz3yRsMaVX84o39FBd2zHMzjW-XJdC9sOUAjD45kdfSCsw';

app.get('/brawl/*', async (req, res) => {
    const path = req.params[0]; // Esto toma lo que sigue después de /brawl/
    try {
        const response = await axios.get(`https://api.brawlstars.com/v1/${path}`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.response?.data || error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
