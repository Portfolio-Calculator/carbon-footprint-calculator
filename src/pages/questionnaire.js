import Link from 'next/link';

const QuestionnairePage = () => {
  // Your questionnaire component logic goes here

  return (
    <div className="container">
      {/* Your questionnaire form goes here */}
      <Link href="/result">
        <button className="calculate-button">Calculate</button>
      </Link>
    </div>
  );
};

export default QuestionnairePage;
