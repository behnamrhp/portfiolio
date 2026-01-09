import { Article } from '@/views/molecules/ArticleCard/ArticleCard.types';

const DEV_TO_API_URL = 'https://dev.to/api';

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
  const { username, page = 1, per_page = 8 } = params;
  
  try {
    const searchParams = new URLSearchParams({
      page: page.toString(),
      per_page: per_page.toString(),
      ...(username && { username }),
    });
    
    const response = await fetch(
      `${DEV_TO_API_URL}/articles?${searchParams.toString()}`,
      {
        headers: {
          'Content-Type': 'application/json',
          // API key is optional for public articles
          ...(process.env.NEXT_PUBLIC_ARTICLE_API_KEY && {
            'api-key': process.env.NEXT_PUBLIC_ARTICLE_API_KEY,
          }),
        },
        next: { revalidate: 0 }, // Always fetch fresh data
      }
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

/**
 * Fetch a single article by ID
 * @param id - Article ID
 * @returns Promise with article data
 */
export async function fetchArticleById(id: number): Promise<Article> {
  try {
    const response = await fetch(`${DEV_TO_API_URL}/articles/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch article: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching article:', error);
    throw error;
  }
}


