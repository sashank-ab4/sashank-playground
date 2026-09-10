import useListOfQuotes from "../Hooks/useListOfQuotes";

export default function Quotes() {
  const { data, loading } = useListOfQuotes();
  const quotes = data?.quotes ?? [];

  if (loading) return <p>Loading Quotes...</p>;
  return (
    <>
      <div>
        <h2>Quotes</h2>
        <div>
          {quotes.map((q) => (
            <>
              <p key={q.id}>{q.quote}</p>
              <p>{q.author}</p>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
