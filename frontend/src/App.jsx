import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import MeterAnalysis from "./pages/MeterAnalysis";
import About from "./pages/About";
import { meters } from "./data/mockData";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [selectedMeter, setSelectedMeter] = useState(null);

  const openMeter = (meter) => {
    setSelectedMeter(meter);
    setPage("analysis");
  };

  const openMeterById = (id) => {
    const meter = meters.find((m) => m.id === id);
    if (meter) openMeter(meter);
  };

  const backToDashboard = () => {
    setSelectedMeter(null);
    setPage("dashboard");
  };

  return (
    <div className="app">
      <Sidebar page={page} setPage={setPage} />
      <main>
        <Header page={page} />
        {page === "dashboard" ? (
          <Dashboard
            onSelectMeter={openMeter}
            onSelectMeterById={openMeterById}
          />
        ) : page === "analysis" ? (
          selectedMeter ? (
            <MeterAnalysis meter={selectedMeter} onBack={backToDashboard} />
          ) : (
            <Dashboard
              onSelectMeter={openMeter}
              onSelectMeterById={openMeterById}
            />
          )
        ) : (
          <About />
        )}
      </main>
    </div>
  );
}
