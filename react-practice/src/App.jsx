import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";
import Form from "./components/Form.jsx";

const initialGoals = [
  { name: "Vijendra", role: "Build reusable React components" },
  { name: "Learner", role: "Understand props and state" }
];

export default function App() {
  const [goals, setGoals] = useState(initialGoals);
  const [showHint, setShowHint] = useState(false);

  function addGoal(goal) {
    setGoals(current => [...current, goal]);
  }

  return <div className="page-shell">
    <Header title="Reusable React Components" subtitle="A small practice dashboard using props, state, and component composition." />
    <main className="content">
      <section className="intro-row"><div><span className="section-kicker">COMPONENTS LAB</span><h2>Learn by building</h2><p>Each part of this page is a reusable component with a clear responsibility.</p></div><Button variant="outline" onClick={() => setShowHint(value => !value)}>{showHint ? "Hide tip" : "Show React tip"}</Button></section>
      {showHint && <div className="tip"><strong>Tip:</strong> Props pass information from a parent to a child. State stores information that can change and trigger a re-render.</div>}
      <div className="card-grid">
        <Card title="Header" description="Receives title and subtitle as props." />
        <Card title="Card" description="Reusable content wrapper that accepts children." />
        <Card title="Button" description="Accepts children, variant, type, and onClick props." />
      </div>
      <div className="lower-grid">
        <Card title="Form component" description="Controlled inputs use useState. Submit adds a new learning goal.">
          <Form onAdd={addGoal} />
        </Card>
        <Card title={`Learning goals (${goals.length})`} description="This list updates when a new goal is submitted.">
          <ul className="goal-list">{goals.map((goal, index) => <li key={`${goal.name}-${index}`}><span className="goal-dot"></span><div><strong>{goal.name}</strong><small>{goal.role}</small></div></li>)}</ul>
        </Card>
      </div>
    </main>
    <Footer student="Vijendra Singh Parmar" />
  </div>;
}
