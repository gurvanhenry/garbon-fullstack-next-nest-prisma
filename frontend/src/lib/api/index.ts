export type GetMessageResponse = {
  id: number;
  content: string;
};

export async function apiGetMessage(): Promise<GetMessageResponse | null> {
  try {
    const url = process.env.API_URL + '/message-from-db';
    const res = await fetch(url);
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
