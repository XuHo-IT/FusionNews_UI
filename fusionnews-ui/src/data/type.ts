export interface INews {
        source: ISource,
        author: string,
        title: string,
        description: string,
        url: string,
        urlToImage: string,
        publishedAt: string,
        content: string,

}
export interface ISource {
        id: string,
        name: string,
}
export interface INewsApiResponse {
        status: string,
        totalResults: number,
        articles: INews[],
}
export interface INewList {
        newsApiResponse: INewsApiResponse,
        totalPages: number,
        currentPage: number,
        pageSize: number,
        totalResults: number,
}

export interface IQuestions {
        questionId: string;
        question: string;
}
export interface IAnswer {
        questionId: string;
        answer: string;
}
