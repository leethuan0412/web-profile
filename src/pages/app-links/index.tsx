import React from "react";

const AppLink = () => {
  const openAppStore = () => {
    window.location.href =
      "https://apps.apple.com/us/app/viettelsmartbox/id6753664887";
  };

  const openPlayStore = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.viettelpost.smartbox";
  };
const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
const isAndroid = /Android/.test(navigator.userAgent);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-2xl font-semibold mb-8">
        Tải ứng dụng Viettel SmartBox
      </h1>

      <button
        onClick={openAppStore}
        className="w-full max-w-xs mb-4 rounded-lg bg-black text-white py-3 text-base font-medium hover:opacity-90 transition"
      >
         Tải trên App Store
      </button>

      <button
        onClick={openPlayStore}
        className="w-full max-w-xs rounded-lg bg-green-600 text-white py-3 text-base font-medium hover:bg-green-700 transition"
      >
        ▶ Tải trên Google Play
      </button>
    </div>
  );
};

export default AppLink;
