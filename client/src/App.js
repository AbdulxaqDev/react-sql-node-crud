import { RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import routes from "./routes/routes";

function App() {
  return (
    <Layout>
      <RouterProvider router={routes} />
    </Layout>
  );
}

export default App;
