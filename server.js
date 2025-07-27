app.get('/brawl/*', async (req, res) => {
  const path = req.params[0];
  const token = '';
  const url = `${path}`;

  const response = await fetch(url, {
    headers: { Authorization: token }
  });

  const data = await response.json();
  res.json(data);
});
