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

// Import subsection components
import Convergence from "./pages/sections/introduction/convergence";
import Imperative from "./pages/sections/introduction/imperative";
import Hesitation from "./pages/sections/introduction/hesitation";
import StatisticalFundamentals from "./pages/sections/statistical-literacy/fundamentals";
import StatisticalCaseStudies from "./pages/sections/statistical-literacy/case-studies";
import TimeValue from "./pages/sections/financial-calculations/time-value";
import CompoundInterest from "./pages/sections/financial-calculations/compound-interest";
import PresentValue from "./pages/sections/financial-calculations/present-value";
import FinancialCaseStudies from "./pages/sections/financial-calculations/case-studies";
import PercentageCalculations from "./pages/sections/misconceptions/percentage-calculations";
import CompoundInterestMisconceptions from "./pages/sections/misconceptions/compound-interest-misconceptions";
import PresentValueMisconceptions from "./pages/sections/misconceptions/present-value-misconceptions";
import ProsecutorsFallacy from "./pages/sections/misconceptions/prosecutors-fallacy";
import IndependenceAssumption from "./pages/sections/misconceptions/independence-assumption";
import Spreadsheets from "./pages/sections/tools/spreadsheets";
import StatisticalSoftware from "./pages/sections/tools/statistical-software";
import Regression from "./pages/sections/advanced/regression";
import DecisionTheory from "./pages/sections/advanced/decision-theory";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRConfig value={{ fetcher }}>
      <Switch>
        <Route path="/" component={App} />
        
        {/* Introduction routes */}
        <Route path="/convergence" component={Convergence} />
        <Route path="/imperative" component={Imperative} />
        <Route path="/hesitation" component={Hesitation} />
        
        {/* Statistical Literacy routes */}
        <Route path="/statistical-literacy" component={StatisticalLiteracy} />
        <Route path="/statistical-literacy/fundamentals" component={StatisticalFundamentals} />
        <Route path="/statistical-literacy/case-studies" component={StatisticalCaseStudies} />
        
        {/* Financial Calculations routes */}
        <Route path="/financial-calculations" component={FinancialCalculations} />
        <Route path="/financial-calculations/time-value" component={TimeValue} />
        <Route path="/financial-calculations/present-value" component={PresentValue} />
        <Route path="/financial-calculations/compound-interest" component={CompoundInterest} />
        <Route path="/financial-calculations/case-studies" component={FinancialCaseStudies} />
        
        {/* Misconceptions routes */}
        <Route path="/misconceptions" component={MathematicalMisconceptions} />
        <Route path="/misconceptions/percentage-calculations" component={PercentageCalculations} />
        <Route path="/misconceptions/compound-interest-misconceptions" component={CompoundInterestMisconceptions} />
        <Route path="/misconceptions/present-value-misconceptions" component={PresentValueMisconceptions} />
        <Route path="/misconceptions/prosecutors-fallacy" component={ProsecutorsFallacy} />
        <Route path="/misconceptions/independence-assumption" component={IndependenceAssumption} />
        
        {/* Tools routes */}
        <Route path="/tools" component={MathematicalTools} />
        <Route path="/tools/spreadsheets" component={Spreadsheets} />
        <Route path="/tools/statistical-software" component={StatisticalSoftware} />
        
        {/* Advanced routes */}
        <Route path="/advanced" component={AdvancedApplications} />
        <Route path="/advanced/regression" component={Regression} />
        <Route path="/advanced/decision-theory" component={DecisionTheory} />
        
        <Route>404 Page Not Found</Route>
      </Switch>
    </SWRConfig>
  </StrictMode>
);
