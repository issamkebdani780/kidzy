/**
 * Kidzy API Service
 * Central place for all backend calls.
 * Uses VITE_API_URL from .env (defaults to localhost:5000 for dev)
 */

const rawApiUrl = import.meta.env.VITE_API_URL;
const BASE_URL = (rawApiUrl && !rawApiUrl.includes('kidzy-backend-production.up.railway.app'))
  ? rawApiUrl
  : (import.meta.env.DEV ? 'http://localhost:5000' : '');

// ─────────────────────────────────────────────
// Submit an order (multipart/form-data with child photo)
// ─────────────────────────────────────────────
export const submitOrder = async ({ kidName, phone, storyType, imageFile }) => {
  const formData = new FormData();
  formData.append('kidName', kidName);
  formData.append('phone', phone);
  formData.append('storyType', storyType);
  formData.append('image', imageFile);

  const res = await fetch(`${BASE_URL}/api/orders`, {
    method: 'POST',
    body: formData,
    // NOTE: Do NOT set Content-Type header — browser sets it automatically
    // with the correct multipart boundary when using FormData
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'حدث خطأ أثناء تقديم الطلب');
  }

  return data; // { success, message, orderId, imageUrl }
};

// ─────────────────────────────────────────────
// Submit a contact form message
// ─────────────────────────────────────────────
export const submitContact = async ({ name, phone, message }) => {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, message }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'حدث خطأ أثناء إرسال الرسالة');
  }

  return data; // { success, message, contactId }
};
