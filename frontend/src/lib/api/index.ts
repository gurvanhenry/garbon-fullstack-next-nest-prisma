export async function apiGetMessage() {
  try {
    const res = await fetch('http://localhost:3000/message-from-db');
    if (res.ok) {
      return res.json();
    }
  } catch (error) {}
}

// for dev purpose:
// return {
//   id: 11,
//   content: 'test',
// };
