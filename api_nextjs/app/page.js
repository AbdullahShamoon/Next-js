'use client'
const handleClick = async () => {
  let data = {
    name: "Abdullah Shamoon",
    email: "shamoonmallick@gmail.com",
  };
  let a = await fetch("/api/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  let b = await a.json();
  console.log(b);
}
export default function Home() {
  return (
    <div className="container">
      <button onClick={handleClick}>CLICK</button>
    </div>
  );
}
