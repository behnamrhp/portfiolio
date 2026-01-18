import { Article } from '@/src/views/molecules/ArticleCard/ArticleCard.types';

export interface FetchArticlesParams {
  username?: string;
  page?: number;
  per_page?: number;
}

export interface FetchArticlesResponse {
  articles: Article[];
  hasMore: boolean;
}

/**
 * Fetch articles from dev.to API
 * @param params - Query parameters
 * @returns Promise with articles and pagination info
 */
export async function fetchArticles(
  params: FetchArticlesParams = {}
): Promise<FetchArticlesResponse> {
  const { username, page = 1, per_page = 5 } = params;
  
  try {
    const searchParams = new URLSearchParams({
      page: page.toString(),
      per_page: per_page.toString(),
      ...(username && { username }),
    });
    
    const response = await fetch(
      `${import.meta.env.VITE_ARTICLE_API}?${searchParams.toString()}`,
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }
    
    const articles: Article[] = await response.json();
    
    // Check if there might be more articles
    const hasMore = articles.length === per_page;
    
    return {
      articles,
      hasMore,
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
}