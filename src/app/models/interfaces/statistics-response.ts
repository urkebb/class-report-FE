export interface StatisticsResponse {
  success: boolean;
  statistics: {
    correctNumbersPercent: {
      total: number;
      correct: boolean;
      percent: number;
    }[];
    averageProgress: {
      count: number;
      totalProgress: number;
      averageProgress: number;
    }[];
  };
}
