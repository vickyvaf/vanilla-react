import { React } from "../react/index.js";

const App = () => {
  const [datas, setDatas] = React.useState([]);
  const [currentLevel, setCurrentLevel] = React.useState(1);

  React.useEffect(() => {
    fetch("http://localhost:9001/datas")
      .then((res) => res.json())
      .then((res) => setDatas(res));
  }, []);

  const div = document.createElement("div");
  const soalWrapper = document.createElement("div");
  const loading = document.createElement("p");
  loading.textContent = "Memeriksa Jawaban...";

  if (datas.length !== 0) {
    datas.map((data, i) => {
      const level = [data.nomor].find((x) => x === currentLevel);
      if (currentLevel === level) {
        const soal = document.createElement("p");
        soal.textContent = i + 1 + ". " + data.soal;
        data.pilihanJawaban.map((x, i) => {
          const pilihanlol = document.createElement("div");
          const pilihan = document.createElement("span");
          pilihan.textContent = x.pilihan;
          pilihan.style.marginRight = "1rem";
          const pilihanDeskripsi = document.createElement("span");
          pilihanDeskripsi.textContent = x.deskripsi;
          pilihanlol.append(pilihan, pilihanDeskripsi);
          pilihanlol.style.width = "fit-content";
          pilihanlol.style.cursor = "pointer";
          pilihanlol.onclick = () => {
            loading.textContent = "Memerikasa Jawaban";
            div.append(loading);
            if (x.pilihan !== data.jawabanBenar) {
              setTimeout(() => {
                loading.textContent = "SALAH";
              }, 300);
            }
            if (x.pilihan === data.jawabanBenar) {
              setTimeout(() => {
                loading.textContent = "BENAR";
              }, 300);
              setTimeout(() => {
                setCurrentLevel(currentLevel + 1);
              }, 1000);
            }
          };
          soal.append(pilihanlol);
        });
        soalWrapper.append(soal);
      }
    });
  }

  div.append(soalWrapper);
  loading.style.width = "fit-content";
  loading.style.margin = "0 auto";

  return div;
};

export default App;
