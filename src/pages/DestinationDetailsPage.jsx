import { useParams } from 'react-router-dom';

const DestinationDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Détails de la Destination</h1>
      <p>Destination ID : {id}</p>
    </div>
  );
};

export default DestinationDetailsPage;
