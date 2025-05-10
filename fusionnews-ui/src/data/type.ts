export interface INews{
        articleId: string;
        title: string;
        link: string;
        keywords: string[];
        creator: string[];
        creatorDisplay: string;
        description: string;
        pubDate: string;
        pubDateTZ: string;
        imageUrl: string;
        videoUrl: string | null;
        sourceId: string;
        sourceName: string;
        sourcePriority: number;
        sourceUrl: string;
        sourceIcon: string;
        language: string;
        country: string[];
        category: string[];
        duplicate: boolean;        
}
export interface IQuestions{
        questionId : string;
        question: string;
}
export interface IAnswer{
        questionId : string;
        answer: string;
}