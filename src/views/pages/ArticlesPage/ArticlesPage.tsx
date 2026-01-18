
import React from 'react';
import { Heading, BodyText } from '../../atoms/Typography';
import Button from '../../atoms/Button';
import Skeleton from '../../atoms/Skeleton';
import ArticleCard from '../../molecules/ArticleCard';
import Pagination from '../../molecules/Pagination';
import PageLayout from '../../organisms/PageLayout';
import { dict } from '@/input';
import { useArticles } from '@/viewmodels';

interface ArticlesPageProps {
  shouldLoad?: boolean;
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ shouldLoad = true }) => {
  const {
    articles,
    loading,
    error,
    currentPage,
    hasMore,
    goToPage,
    refresh,
  } = useArticles({ enabled: shouldLoad });
  
  // Calculate total pages (approximate)
  const totalPages = hasMore ? currentPage + 1 : currentPage;
  
  return (
    <PageLayout
      title={dict.articles.title}
      subtitle={loading ? 'Loading...' : `${articles.length} articles`}
      className="px-4 md:px-8"
    >
      <div className="space-y-6">
        {/* Loading State */}
        {loading && (
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="border border-manuscript-ink rounded-sm p-4 space-y-3"
              >
                <Skeleton width="60%" height="24px" />
                <Skeleton width="100%" height="16px" />
                <Skeleton width="100%" height="16px" />
                <div className="flex gap-4">
                  <Skeleton width="80px" height="16px" />
                  <Skeleton width="100px" height="16px" />
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12 space-y-4">
            <div className="text-6xl opacity-30">⚠️</div>
            <Heading level="h3" color="ink">
              Oops!
            </Heading>
            <BodyText className="max-w-md mx-auto">
              {dict.articles.error}
            </BodyText>
            <Button onClick={refresh} variant="primary">
              Try Again
            </Button>
          </div>
        )}
        
        {/* Articles List */}
        {!loading && !error && articles.length > 0 && (
          <>
            <div className="space-y-3">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center ">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={goToPage}
                />
              </div>
            )}
          </>
        )}
        
        {/* No Articles */}
        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-12 space-y-4">
            <div className="text-6xl opacity-30">📝</div>
            <Heading level="h3" color="ink">
              No Articles Found
            </Heading>
            <BodyText>
              No articles available at the moment. Check back later!
            </BodyText>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ArticlesPage;


