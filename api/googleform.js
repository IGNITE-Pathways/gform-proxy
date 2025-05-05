export default async function handler(req, res) {
  const response = await fetch('https://script.google.com/macros/s/AKfycbzuHhx6cpIP7ioDQN3VxDG9J_LARnd9sdgUeutUwJcnRj2_QM-LBrMhmg0_ZOyuWKo8/exec', {
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

