import { fetchNotes } from '../../../../lib/api';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const App = async ({ params }: Props) => {
  const { slug } = await params;
  const tag = slug?.[0] === 'All' ? undefined : slug?.[0];
  const data = await fetchNotes('', 1, tag);

  return (
    <>
      <NotesClient items={data} initialTag={tag} />
    </>
  );
};

export default App;
