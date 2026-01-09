
import { useState, useEffect, useCallback } from 'react';
import { fetchArticles } from '@/models';
import { Article } from '@/views/molecules/ArticleCard/ArticleCard.types';
import { DEV_TO_USERNAME, ARTICLES_PER_PAGE } from '@/input/constants';

interface UseArticlesState {
  articles: Article[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  hasMore: boolean;
  totalArticles: number;
}

interface UseArticlesReturn extends UseArticlesState {
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  refresh: () => void;
}

/**
 * Custom hook for managing articles from dev.to
 * Handles fetching, pagination, loading, and error states
 */
export function useArticles(): UseArticlesReturn {
  const [state, setState] = useState<UseArticlesState>({
    articles: [],
    loading: true,
    error: null,
    currentPage: 1,
    hasMore: false,
    totalArticles: 0,
  });
  
  const fetchArticlesData = useCallback(async (page: number) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    
    try {
      const { articles, hasMore } = await fetchArticles({
        username: DEV_TO_USERNAME,
        page,
        per_page: ARTICLES_PER_PAGE,
      });
      
      setState({
        articles,
        loading: false,
        error: null,
        currentPage: page,
        hasMore,
        totalArticles: articles.length,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch articles',
      }));
    }
  }, []);
  
  useEffect(() => {
    fetchArticlesData(1);
  }, [fetchArticlesData]);
  
  const goToPage = useCallback(
    (page: number) => {
      if (page < 1) return;
      fetchArticlesData(page);
    },
    [fetchArticlesData]
  );
  
  const nextPage = useCallback(() => {
    if (state.hasMore) {
      goToPage(state.currentPage + 1);
    }
  }, [state.hasMore, state.currentPage, goToPage]);
  
  const previousPage = useCallback(() => {
    if (state.currentPage > 1) {
      goToPage(state.currentPage - 1);
    }
  }, [state.currentPage, goToPage]);
  
  const refresh = useCallback(() => {
    fetchArticlesData(state.currentPage);
  }, [state.currentPage, fetchArticlesData]);
  
  return {
    ...state,
    goToPage,
    nextPage,
    previousPage,
    refresh,
  };
}


