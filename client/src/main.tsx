import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Switch, Route } from "wouter";
import "./index.css";
import { SWRConfig } from "swr";
import { fetcher } from "./lib/fetcher";
import App from "./pages/app";
import StatisticalLiteracy from "./pages/sections/statistical-literacy";
import FinancialCalculations from "./pages/sections/financial-calculations";
import MathematicalMisconceptions from "./pages/sections/misconceptions";
import MathematicalTools from "./pages/sections/tools";
import AdvancedApplications from "./pages/sections/advanced";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRConfig value={{ fetcher }}>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/statistical-literacy" component={StatisticalLiteracy} />
        <Route path="/financial-calculations" component={FinancialCalculations} />
        <Route path="/misconceptions" component={MathematicalMisconceptions} />
        <Route path="/tools" component={MathematicalTools} />
        <Route path="/advanced" component={AdvancedApplications} />
        <Route>404 Page Not Found</Route>
      </Switch>
    </SWRConfig>
  </StrictMode>,
);
