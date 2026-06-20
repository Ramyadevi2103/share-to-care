import { InfinitySpin } from "react-loader-spinner";

function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">

      <h1 className="text-4xl font-bold text-green-600 mb-4">
        ShareToCare
      </h1>

      <InfinitySpin width="200" color="#16a34a" />

      <p className="mt-4 text-gray-600">
        Connecting food with those who need it...
      </p>

    </div>
  );
}

export default Loading;