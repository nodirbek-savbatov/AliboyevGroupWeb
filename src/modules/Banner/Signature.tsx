const SignatureComponent = () => {
  return (
    <div className="text-center p-6 bg-gray-100 rounded-lg shadow-lg">
      <p className="italic text-lg text-gray-700">
        "Dasturiy taminot bu hozirgi zamon ko'zgusi va asl mohiyati bo'lib xizmat qilmoqda."
      </p>
      <div className="my-4 flex justify-center">
        <img src="/public/images/signature.png" alt="Imzo" className="w-36 h-auto" />
      </div>
      <h2 className="font-bold text-xl text-gray-900">Aliboyev Kamol</h2>
      <p className="text-gray-600 text-sm">DIREKTOR</p>
    </div>
  );
};

export default SignatureComponent;