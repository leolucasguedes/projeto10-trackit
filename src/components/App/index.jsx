import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaInicial from "./../TelaInicial";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*      <Route path="/" element={<TelaInicial />}></Route>
        <Route path="/sessoes/:filmeId" element={<Filme />}></Route>
        <Route path="/assentos/:sessaoId" element={<Sessao />}></Route>
        <Route path="/sucesso" element={<Sucesso />}></Route>*/