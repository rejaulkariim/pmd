import { useQuery } from "@tanstack/react-query";

interface Product {
  id: string;
  name: string;
  description: string;
}

interface UseProductsHook {
  projects: Product[];
  isLoading: boolean;
  refetch: any;
}

export const useProducts = (): UseProductsHook => {
  const {
    data: projects = [],
    refetch,
    isLoading,
  } = useQuery<Product[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch(`/data.json`);
      const data = await res.json();
      return data;
    },
  });

  return { projects, isLoading, refetch };
};
