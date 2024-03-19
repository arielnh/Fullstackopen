import { useState } from "react";

const Title = ({ title }) => <h1>{title}</h1>;

const Header = ({ text }) => <h2>{text}</h2>;

const Button = ({ handlerClick, text }) => {
  return <button onClick={handlerClick}>{text}</button>;
};

const Statistic = ({ good, bad, totalFeed }) => {
  const average = (good - bad) / totalFeed;
  const total = (good * 100) / totalFeed;

  if (!total) return <h3>No feedback given</h3>;

  return (
    <table>
      <tbody>
        <tr>
          <td>Average</td>
          <td>{average.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{total.toFixed(2)} %</td>
        </tr>
      </tbody>
    </table>
  );
};

const StatisticLine = ({ feedb, text }) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {feedb} </td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeed, setTotal] = useState(0);

  const goodFB = () => {
    setGood(good + 1);
    setTotal(totalFeed + 1);
  };
  const neutraFB = () => {
    setNeutral(neutral + 1);
    setTotal(totalFeed + 1);
  };
  const badFB = () => {
    setBad(bad + 1);
    setTotal(totalFeed + 1);
  };

  return (
    <div>
      <Title title="Give feed back" />

      <Button handlerClick={goodFB} text="good" />
      <Button handlerClick={neutraFB} text="neutral" />
      <Button handlerClick={badFB} text="bad" />

      <Header text="Statistics" />
      <table>
        <tbody>
          <StatisticLine feedb={good} text="Good" />
          <StatisticLine feedb={neutral} text="Neutral" />
          <StatisticLine feedb={bad} text="Bad" />
          <StatisticLine feedb={totalFeed} text="Total" />
        </tbody>
      </table>
      <Statistic good={good} bad={bad} totalFeed={totalFeed} />
    </div>
  );
};

export default App;
