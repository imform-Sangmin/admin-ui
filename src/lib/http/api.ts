import {
  SplashTableData,
  SplashTableUpdateData,
} from "@/pages/app/splash/(container)/columns";
import { FormSchemaType } from "@/pages/app/splash";

const splashApi = {
  getSplash: async () => {
    const res = await fetch("/api/splash");
    return res.json();
  },
  createSplash: async (data: SplashTableData) => {
    const res = await fetch(`/api/splash`, {
      method: "POST",
      body: JSON.stringify(data),
    });
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
  deleteSplash: async (id: string) => {
    const res = await fetch(`/api/splash`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    return res.json();
  },
  searchSplash: async (data: FormSchemaType) => {
    const queryString = new URLSearchParams(data).toString();
    const res = await fetch(`/api/splash?${queryString}`);
    return res.json();
  },
};

export { splashApi };
