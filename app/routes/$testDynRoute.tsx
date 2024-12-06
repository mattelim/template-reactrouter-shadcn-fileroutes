import { useParams } from "react-router";

export default function ChatRoom() {
  const { testDynRoute } = useParams();

  console.log(testDynRoute);
  return (
    <div>
      <h1>Dynamic Route: {testDynRoute}</h1>
    </div>
  );
}
