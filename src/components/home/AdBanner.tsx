export default function AdBanner() {
  return (
    <div className="rounded-xl bg-card p-4 shadow-sm">
      {/* ad headline */}
      <h3 className="text-sm font-bold text-text-primary">
        Hire faster with SyncUp!
      </h3>
      <p className="mt-1 text-xs text-text-secondary">
        Network without limits and hire like a pro!
      </p>

      {/* promotional image grid */}
      <div className="mt-3 grid grid-cols-2 gap-1.5 overflow-hidden rounded-lg">
        <div className="relative h-20 bg-gradient-to-br from-orange-200 to-pink-200 rounded-md flex items-center justify-center">
          <span className="text-2xl">😊</span>
        </div>
        <div className="relative h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-md flex items-center justify-center">
          <span className="text-2xl">😄</span>
          {/* discount badge */}
          <div className="absolute top-1 right-1 rounded-md bg-primary px-1.5 py-0.5 text-[8px] font-bold text-white">
            30% OFF
          </div>
        </div>
        <div className="h-20 bg-gradient-to-br from-green-200 to-teal-200 rounded-md flex items-center justify-center">
          <span className="text-2xl">🤝</span>
        </div>
        <div className="h-20 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-md flex items-center justify-center">
          <span className="text-2xl">💼</span>
        </div>
      </div>
    </div>
  );
}