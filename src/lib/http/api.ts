import { SplashTableUpdateData } from "@/pages/app/splash/(container)/columns";

const splashApi = {
  getSplash: async () => {
    const res = await fetch("/api/splash");
    return res.json();
  },
  updateSplash: async (id: string, data: SplashTableUpdateData) => {
    const res = await fetch(`/api/splash`, {
      method: "PUT",
      body: JSON.stringify({
        id,
        data,
      }),
    });
    return res.json();
  },
};

export { splashApi };
