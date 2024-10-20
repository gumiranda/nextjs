import {
  TrendingItem,
  TrendingItemSkeleton,
} from "@/shared/ui/atoms/twitter/trending-item";

export const TrendingArea = () => {
  return (
    <div className="bg-gray-700 rounded-3xl">
      <h2 className="text-xl p-6">O que está acontecendo</h2>
      <div className="flex flex-col gap-4 p-6 pt-0">
        <TrendingItem label="#teste" count={10} />
        <TrendingItem label="#teste2" count={10} />
        <TrendingItem label="#teste3" count={10} />
        <TrendingItemSkeleton />
        <TrendingItemSkeleton />
      </div>
    </div>
  );
};
