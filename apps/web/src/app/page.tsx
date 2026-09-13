export default async function Home() {
  let data: unknown;
  let error: string | null = null;

  try {
    const res = await fetch("http://localhost:3000/health", {
      cache: "no-store",
    });
    data = await res.json();
  } catch {
    error = "BFF unreachable";
  }

  return (
    <div>
      {error ? <p>{error}</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
