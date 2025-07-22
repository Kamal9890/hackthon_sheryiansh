import { useParams, Link } from 'react-router-dom';
import { flavors } from '../data/flavorData';

const FlavorDetail = () => {
  const { id } = useParams();
  const flavor = flavors.find((f) => f.id === id);

  if (!flavor) return <div className="text-center p-10">Flavor not found.</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 px-6 py-12">
      <img src={flavor.image} alt={flavor.title} className="w-48 mb-6 drop-shadow-2xl" />
      <h1 className="text-4xl font-bold text-yellow-800 mb-2">{flavor.title}</h1>
      <p className="text-yellow-700 max-w-xl text-center text-lg mb-4">{flavor.details}</p>
      <Link to="/" className="text-yellow-900 underline mt-6 hover:text-yellow-600">
        ← Back to flavors
      </Link>
    </div>
  );
};

export default FlavorDetail;
