import { useState } from "react";
import "./Calculate.css"; // Убедитесь, что путь к CSS правильный

function Calculate() {
  const [value, setValue] = useState(""); // Храним текущее значение
  const [result, setResult] = useState(""); // Храним результат
  const [prevResult, setPrevResult] = useState(""); // Храним предыдущее значение

  const handler = (val) => {
    if (val === "C") {
      setValue("");
      setResult("");
      setPrevResult("");
    } else if (val === "=") {
      try {
        const computedResult = eval(value);
        setResult(computedResult);
        setPrevResult(computedResult);
        setValue(""); // Очищаем текущее значение
      } catch (e) {
        setResult("Error"); // Если ошибка при вычислении
      }
    } else if (result) {
      setValue(val);
      setResult(""); // Сбрасываем результат, так как начинаем новый ввод
    } else {
      setValue((prev) => prev + val);
    }
  };

  return (
    <div className="calculator">
      <input
        className="calculator-screen"
        readOnly
        value={result || value || prevResult}
      />
      <div className="calculator-buttons">
        {[7, 8, 9, "/"].map((val) => (
          <button onClick={() => handler(val)} key={val}>
            {val}
          </button>
        ))}
        {[4, 5, 6, "*"].map((val) => (
          <button onClick={() => handler(val)} key={val}>
            {val}
          </button>
        ))}
        {[1, 2, 3, "-"].map((val) => (
          <button onClick={() => handler(val)} key={val}>
            {val}
          </button>
        ))}
        {["C", 0, "=", "+"].map((val) => (
          <button onClick={() => handler(val)} key={val}>
            {val}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculate;