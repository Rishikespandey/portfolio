import healthImages from "../assets/images/health.png";
import chatImages from "../assets/images/chat.png";
import emojiImage from "../assets/images/emoji.png";

export const PROJECTS = [
  {
    title: "🏥 Health Monitoring System",
    desc: "IoT-based application collecting real-time patient health data using hardware sensors and displaying it on a web dashboard.",
    tags: ["IoT", "Node.js", "MongoDB", "ESP32", "React", "Express"],
    img: healthImages,
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
    img: chatImages,
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
    img: emojiImage,
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
