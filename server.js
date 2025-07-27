const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

// TOKEN de la API de Brawl Stars (colócalo aquí directamente o como variable de entorno)
const TOKEN = '';

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
