export default function StarshipCard({ starship }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-yellow-500 transition-all duration-200">
      <h2 className="text-2xl font-main font-semibold text-yellow-400 mb-3">
        {starship.name}
      </h2>
      <div className="space-y-2 text-gray-300">
        <p>
          <span className="font-medium font-second text-yellow-200">Model:</span>{' '}
          <span className="font-second">{starship.model || "Unknown Model"}</span>
        </p>
        <p>
          <span className="font-medium font-second text-yellow-200">Manufacturer:</span>{' '}
          <span className="font-second">{starship.manufacturer || "Unknown Manufacturer"}</span>
        </p>
      </div>
    </div>
  )
}
