import health from "../assets/images/health.png";
import chat from "../assets/images/chat.png";
import emoji from "../assets/images/emoji.png";

export const PROJECTS = [
  {
    title: "🏥 Health Monitoring System",
    desc: "IoT-based application collecting real-time patient health data using hardware sensors and displaying it on a web dashboard.",
    tags: ["IoT", "Node.js", "MongoDB", "ESP32", "React", "Express"],
    img: health,
    live: "#",
    repo: "https://github.com/Rishikespandey",
    features: [
      "Real-time vital sign tracking",
      "Interactive data visualizations",
      "Alert notifications for abnormal readings",
      "Secure patient data storage"
    ]
  },
  {
    title: "💬 Real-Time Chat App",
    desc: "A real-time chat application built using WebSocket technology (Socket.io) for instant and multi-user communication.",
    tags: ["React", "Socket.io", "Express.js", "Node.js"],
    img: chat,
    live: "#",
    repo: "https://github.com/Rishikespandey",
    features: [
      "Instant messaging via WebSockets",
      "User presence indicators",
      "Group chat functionality",
      "Typing indicators"
    ]
  },
  {
    title: "😊 Emoji Picker Component",
    desc: "A reusable, lightweight emoji picker UI component featuring global search, categorized filtering, and text cursor insertion.",
    tags: ["Vanilla JS", "CSS3", "HTML5"],
    img: emoji,
    live: "#",
    repo: "https://github.com/Rishikespandey",
    features: [
      "Lightweight standalone component",
      "Category based navigation",
      "Fast instant search",
      "Keyboard accessibility navigation"
    ]
  }
];
