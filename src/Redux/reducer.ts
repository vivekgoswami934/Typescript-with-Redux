import { ArticleAction, ArticleState, IArticle } from "../constraints/type";
import { ADD_ARTICLE, REMOVE_ARTICLE } from "./actionType";


const initialState: ArticleState = {
    articles: [
        {
            id: 1,
            title: "post 1",
            body: "Body 1"
        },
        {
            id: 2,
            title: "post 2",
            body:
                "body"
        }
    ]
};


const reducer = (state: ArticleState = initialState, action: ArticleAction) => {

    const { type, article } = action;

    switch (type) {

        case ADD_ARTICLE: return { ...state, articles: [...state.articles, article] }

        case REMOVE_ARTICLE:
            const updatedArticles: IArticle[] = state.articles.filter((item) => item.id !== action.article.id);

            return { ...state, articles: updatedArticles };

        default: return state

    }

}

export default reducer;