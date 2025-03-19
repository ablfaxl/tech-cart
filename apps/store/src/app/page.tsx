export default async function HomePage() {
  const data = await fetch('http://localhost:8000/').then((res) => res.json());
  console.log('->', data);
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <>
      <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="block flex-none md:hidden"></div>
      </nav>
    </>
  );
}
