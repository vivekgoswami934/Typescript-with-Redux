import { ArticleAction, DispatchType, IArticle } from "../constraints/type";
import { ADD_ARTICLE, REMOVE_ARTICLE } from "./actionType";




export function simulateHttpRequest(action: ArticleAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action);
        }, 900);
    };
}

export function addArticle(article: IArticle) {

    const action: ArticleAction = { type: ADD_ARTICLE, article };

    return simulateHttpRequest(action)
}

export function removeArticle(article: IArticle) {

    const action: ArticleAction = { type: REMOVE_ARTICLE, article };

    return simulateHttpRequest(action);

}