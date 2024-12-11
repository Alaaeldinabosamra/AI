import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (text) => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }).then((res) => res.json());
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["userChats"] });
      navigate(`/dashboard/chats/${id}`);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;

    mutation.mutate(text);
  };
  return (
    <div className="dashboard">
      <div className="texts">
        <div className="logo">
          <img src="/ai.svg" alt="" />
          <h1>ALAA AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.svg" alt="" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image.svg" alt="" />
            <span>Analyze Images with chats</span>
          </div>
          <div className="option">
            <img src="/code.svg" alt="" />
            <span>Help me with my Code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.svg" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
