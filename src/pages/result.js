import { useRouter } from 'next/router';

const ResultPage = () => {
  const router = useRouter();
  const { gasBill, electricBill, recycle, carMileage, flightsUnder4Hours, flightsOver4Hours } = router.query;

  return (
    <div>
      <h1>Results</h1>
      <p>Gas Bill: {gasBill}</p>
      <p>Electric Bill: {electricBill}</p>
      <p>Recycle: {recycle}</p>
      <p>Car Mileage: {carMileage}</p>
      <p>Flights under 4 Hours: {flightsUnder4Hours}</p>
      <p>Flights over 4 Hours: {flightsOver4Hours}</p>
    </div>
  );
};

export default ResultPage;
