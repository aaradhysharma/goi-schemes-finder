export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="min-h-screen pt-24 pb-16 flex items-center justify-center"
    >
      <div className="text-center">
        <div
          className="animate-spin w-12 h-12 border-4 border-saffron border-t-transparent rounded-full mx-auto mb-4"
          aria-hidden="true"
        ></div>
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  );
}
