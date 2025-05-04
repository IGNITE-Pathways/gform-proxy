export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbxoMlmjuxxo_zK9iYdGbCoFfKZRa62tGa0LPJWuzQIjcWzePbCws88aVVL4RAmmcrqy/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req.body),
    redirect: 'follow'
  });

  const text = await response.text();
  try {
    res.setHeader('Content-Type', 'application/json');
    res.status(response.status).json(JSON.parse(text));
  } catch {
    res.status(response.status).send(text);
  }
}

