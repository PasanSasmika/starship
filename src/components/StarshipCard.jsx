export default function StarshipCard({ starship }) {
  return (
    <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-200 border border-base-300 hover:border-primary">
      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-main font-semibold text-primary mb-3">
          {starship.name}
        </h2>
        <div className="space-y-2 text-base-content/80">
          <p>
            <span className="font-medium font-second text-primary/80">Model:</span>{' '}
            <span className="font-second">{starship.model || "Unknown Model"}</span>
          </p>
          <p>
            <span className="font-medium font-second text-primary/80">Manufacturer:</span>{' '}
            <span className="font-second">{starship.manufacturer || "Unknown Manufacturer"}</span>
          </p>
        </div>
      </div>
    </div>
  )
}