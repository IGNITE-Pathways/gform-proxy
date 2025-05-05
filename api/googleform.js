export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbx6IJF42v2Lp3gOX4l5ZvlAZsUn9w7twLgBGWoLCrngENdY4NwXw-zg-ibLyTzG2b0I/exec', {
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

