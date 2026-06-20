function Card({ title, description }) {
  return (
    <div className="border rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>

      <p className="mt-2 text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default Card;