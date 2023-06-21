export type GetMessageResponse = {
  id: number;
  content: string;
};

export async function apiGetMessage(): Promise<GetMessageResponse | null> {
  try {
    const res = await fetch('http://localhost:3000/message-from-db');
    if (res.ok) {
      return res.json();
    }
  } catch (error) {}
  return null;
}

// for dev purpose:
// return {
//   id: 11,
//   content: 'test',
// };
