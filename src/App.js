//import logo from './logo.svg';
import './App.css';
let z=4;
const b = [7,6,5];
const c = {'background' : 'orangered'};
const d = 'yellow';
const f = {"one":100, "two":200};
const fd = Object.keys(f);
console.log(fd);
function App() {
  return (
  <div className="container">
    <h1>Заголовок сайта</h1>
    <h2>Основные конструкции JSX</h2>     
    <p>Вывод переменной {"{ }"}</p>
    <div>{z}</div>
    <div>{z*8}</div>
    <p>Вывод массива</p>
    <div>{b}</div>
    <div>{b.join(',')}</div>
    <p>Методы массивов</p>
    <div>{b.map(item=>item+' ')}</div>
    <p>Методы массивов - создание элементов</p>
    <div>{b.map(item=><strong key={item}>{item}</strong> )}</div>
    <p style={c}>Inlane style1</p>
    <p style={{color: d, background: "black"}}>Inlane style2</p>
    <div>{Object.keys(f).map(item => item+' '+f[item])}</div>
    <ul>{fd.map(item=><li key={item}>{item+' '+f[item]}</li>)}</ul>
    <p>Создание элементов из массивов</p>
    <p>{b.map(item=><span key={item} data-item={item}>{item}</span>)}</p>
  </div>
  );
}
export default App;
