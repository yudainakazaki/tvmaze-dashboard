import type { ShowData } from "@/types/type";

export const handleShowData = (data: any[]) => {
    return data.map((item) => {
        return {
            id: item.id,
            name: item.name,
            genres: item.genres,
            rating: item.rating?.average,
            image: item.image?.original ?? undefined,
            siteUrl: item.officialSite,
        } as ShowData;
    }).filter((item) => item.rating)
    .sort((a, b) => b.rating - a.rating);
}

export const handleSearchData = (data: any[]) => {
    return data.map((item) => {
        return {
            id: item.show.id,
            name: item.show.name ?? '-',
            genres: item.show.genres,
            rating: item.show.rating?.average,
            image: item.show.image?.original ?? undefined,
            siteUrl: item.show.officialSite,
        } as ShowData;
    });
}