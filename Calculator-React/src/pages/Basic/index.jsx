import React, { useState } from "react";
import { toast } from "react-toastify";

import { BsBackspace } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";

import {
  updateCalc,
  historyManager,
  deleteTheLastItem,
  convertToCarateValid,
} from "./../../utils/features";
import { Button, History, Menu } from "./../../components";
import { Wrapper, Container, Display, Body } from "./styles";

const Basic = () => {
  const [result, setResult] = useState("0");
  const [expression, setExpression] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const operators = ["+", "-", "*", "x", "/", "÷", "."];

  const update = (value, del = false) => {
    const open = expression.toString().match(/\(/g) ?? 0;
    const closed = expression.toString().match(/\)/g) ?? 0;
    const isOperator = operators.includes(value);
    const lastItemIsAnOperator = operators.includes(
      convertToCarateValid(expression).toString().at(-1)
    );
    const lastItemOfExpression = expression.toString().at(-1);

    if (
      (isOperator && expression === "") ||
      (value === "%" && expression === "") ||
      (isOperator && lastItemIsAnOperator) ||
      (value === ")" && lastItemIsAnOperator) ||
      (value === ")" && !expression.includes("(")) ||
      (open.length === closed.length && value === ")") ||
      (lastItemOfExpression === "(" && value === ")") ||
      (lastItemOfExpression === "(" && value === "%") ||
      (lastItemOfExpression === "." && value === "(") ||
      (lastItemOfExpression === " " && value === "%") ||
      (lastItemOfExpression === "(" && operators.includes(value)) ||
      (expression.toString().split(" ").at(-1).includes(".") &&
        value === ".") ||
      (expression.toString().split(" ").at(-1).includes("%") && value === "%")
    ) {
      return;
    } else {
      let calc = del ? value : expression + value;

      if (
        (lastItemOfExpression === "%" && value === "(") ||
        (lastItemOfExpression === ")" && value === "(") ||
        (lastItemOfExpression === "%" && typeof value === "number") ||
        (lastItemOfExpression === ")" && typeof value === "number") ||
        (lastItemOfExpression !== "(" &&
          !lastItemIsAnOperator &&
          value === "(" &&
          expression !== "")
      ) {
        calc = del ? value : expression.toString().concat(" x ") + value;
      }

      setExpression(updateCalc(calc).expression);

      if (updateCalc(calc).result !== undefined) {
        setResult(updateCalc(calc).result.toString().slice(0, 17));
      }
    }
  };

  const calculate = () => {
    if (
      updateCalc(expression).result !== undefined &&
      result !== 0 &&
      result !== "0"
    ) {
      setResult(0);
      setExpression(updateCalc(expression).result);
      historyManager("set", updateCalc(expression));
    } else {
      toast.error('Error 🙅🏿‍♂️')
    }
  };

  return (
    <Wrapper>
      <Menu />

      <main className="content">
        <Container>
          <Display>
            <AiOutlineHistory
              className="icon historicalIcon"
              title="Historical"
              onClick={() => setShowHistory(!showHistory)}
            />
            <span className="expression">{expression || "0"}</span>
            <span className="result">= {result || "0"}</span>
          </Display>

          <table>
            <Body>
              <tr>
                <Button value="(" type="operators" funcUpdate={update} />
                <Button value=")" type="operators" funcUpdate={update} />
                <Button value="%" type="operators" funcUpdate={update} />
                <Button value="+" type="operators" funcUpdate={update} />
              </tr>

              <tr>
                <Button value={1} type="numbers" funcUpdate={update} />
                <Button value={2} type="numbers" funcUpdate={update} />
                <Button value={3} type="numbers" funcUpdate={update} />
                <Button value="-" type="operators" funcUpdate={update} />
              </tr>

              <tr>
                <Button value={4} type="numbers" funcUpdate={update} />
                <Button value={5} type="numbers" funcUpdate={update} />
                <Button value={6} type="numbers" funcUpdate={update} />
                <Button value="x" type="operators" funcUpdate={update} />
              </tr>

              <tr>
                <Button value={7} type="numbers" funcUpdate={update} />
                <Button value={8} type="numbers" funcUpdate={update} />
                <Button value={9} type="numbers" funcUpdate={update} />
                <Button value="÷" type="operators" funcUpdate={update} />
              </tr>

              <tr>
                <Button value="." type="operators" funcUpdate={update} />
                <Button value={0} type="numbers" funcUpdate={update} />

                <td>
                  <button
                    type="button"
                    className="delete"
                    name="delete"
                    title="delete"
                    onClick={() => update(deleteTheLastItem(expression), true)}
                  >
                    <BsBackspace />
                  </button>
                </td>

                <td>
                  <button
                    type="button"
                    className="equal"
                    name="equal"
                    title="equal"
                    onClick={() => calculate()}
                  >
                    =
                  </button>
                </td>
              </tr>
            </Body>
          </table>
        </Container>

        <History result={result} show={[showHistory, setShowHistory]} />
      </main>
    </Wrapper>
  );
};

export default Basic;
