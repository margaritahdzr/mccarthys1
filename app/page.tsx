export default function Page() {
  return (
    <main style={{ width: "100vw", height: "100vh", margin: 0 }}>
      <iframe
        src="/br.html"
        title="Business Review"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
        }}
      />
    </main>
  );
}
