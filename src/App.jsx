import "./App.css";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
// p-[20px_40px]

function App() {
  return (
    <main>
      <Header />
      <section className="flex flex-wrap justify-center gap-[20px] p-[20px_40px]">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;
