import { fetchNotes } from '@/lib/api';
import type { Response } from '@/types/response';
import Notes from './Notes.client';

export default async function Page() {
  const data: Response = await fetchNotes('', 1);
  return <Notes initialData={data} />;
}
