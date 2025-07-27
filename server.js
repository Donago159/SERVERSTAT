const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

// TOKEN de la API de Brawl Stars (colócalo aquí directamente o como variable de entorno)
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZlYjY2MWVkLWE5YmQtNDU1OS1iZjI1LWM5NTFmZGE3MTY0YiIsImlhdCI6MTc1MzYxOTYxMSwic3ViIjoiZGV2ZWxvcGVyLzM1ZjJmM2FjLWFhZmItNDBmMS0yMDMwLWQyYmE5ZDM5ZmM1NyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNTQuMTg4LjcxLjk0Il0sInR5cGUiOiJjbGllbnQifV19.BMatvff_S_Cfj3G8ejQyixNW64cDFOWq3v_FxLn0ZMBNjO9fWmiXy1BkeQH2q-i5YElohyrUw3NHcbx95fGikw';

app.get('/brawl/:tag', async (req, res) => {
    const tag = req.params.tag.toUpperCase().replace('#', '');
    try {
        const response = await axios.get(`https://api.brawlstars.com/v1/players/%23${tag}`, {
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
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
