// Vercel Serverless Function: Real-Time Concurrent User Presence Engine
// Tracks actual active browser sessions via heartbeats without any fake or simulated numbers.

const activeSessions = new Map();
const SESSION_TIMEOUT_MS = 25000; // 25 seconds heartbeat window

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const now = Date.now();

  // Clean up any stale sessions that haven't pinged within SESSION_TIMEOUT_MS
  for (const [id, lastPing] of activeSessions.entries()) {
    if (now - lastPing > SESSION_TIMEOUT_MS) {
      activeSessions.delete(id);
    }
  }

  // Handle client heartbeat or departure
  let clientId = null;
  let action = 'ping';

  if (req.method === 'POST') {
    const body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) || {};
    clientId = body.clientId;
    action = body.action || 'ping';
  } else if (req.method === 'GET') {
    clientId = req.query?.clientId;
    action = req.query?.action || 'ping';
  }

  if (clientId) {
    if (action === 'leave') {
      activeSessions.delete(clientId);
    } else {
      activeSessions.set(clientId, now);
    }
  }

  // Real count of active sessions. At least 1 when current user is connected.
  const realCount = Math.max(1, activeSessions.size);

  return res.status(200).json({
    online: realCount,
    timestamp: now
  });
};
