import { Routes ,Route } from "react-router-dom";
import { HomeView } from "./components/HomeView";
import {RecipeDetailView} from "./components/RecipeDetailView";
import { Layout } from "./pages/Layout";
import { SearchView } from "./components/SearchView";
import { SelectionView } from "./components/SelectionView";
import { CountrySelector } from "./components/CountrySelector";


function App() {

  return (
    <Layout>
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="/recipe/:id" element={<RecipeDetailView />} />
        <Route path="/select/country" element={<CountrySelector/>}/>
        <Route path="/search/:input" element={<SearchView />} />
        <Route path="/select/:filterType/:valueType" element={<SelectionView />} />
    </Routes>
    </Layout>
  );
}

export default App
