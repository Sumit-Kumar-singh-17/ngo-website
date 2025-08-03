export function About() {
  return (
    <section className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">About Helping Hands</h2>
      <p className="mb-6 max-w-3xl mx-auto">Helping Hands is a non-profit organization dedicated to improving the lives of the underprivileged. Since 2010, we have helped thousands of families with food, shelter, education, and employment opportunities.</p>
      <div className="space-y-4">
        <div className="bg-white p-4 shadow rounded">
          <strong>2010:</strong> Organization Founded
        </div>
        <div className="bg-white p-4 shadow rounded">
          <strong>2015:</strong> 100 Schools Supported
        </div>
        <div className="bg-white p-4 shadow rounded">
          <strong>2020:</strong> Nationwide Campaigns Initiated
        </div>
      </div>
    </section>
  );
}