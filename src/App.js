import "./App.css";

import Header from "./components/Header";
import StatusCard from "./components/StatusCard";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  const buildNumber =
    process.env.REACT_APP_BUILD_NUMBER || "Local Build";

  const deployDate =
    process.env.REACT_APP_DEPLOY_DATE ||
    new Date().toLocaleString();

  return (
    <div className="container">
      <Header />

      <div className="card-grid">
        <StatusCard
          title="Application"
          value="Demo DevOps Dashboard"
          colour="#1976d2"
        />

        <StatusCard
          title="Version"
          value="1.0.0"
          colour="#2e7d32"
        />

        <StatusCard
          title="Environment"
          value="Production"
          colour="#ed6c02"
        />

        <StatusCard
          title="Pipeline Status"
          value="Healthy"
          colour="#9c27b0"
        />

        <StatusCard
          title="Build Number"
          value={buildNumber}
          colour="#d32f2f"
        />

        <StatusCard
          title="Deployment Date"
          value={deployDate}
          colour="#00897b"
        />
      </div>

      <TechStack />

      <Footer />
    </div>
  );
}

export default App;
