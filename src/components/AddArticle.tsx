import * as React from "react";
import { IArticle } from "../constraints/type";

type Props = {
    saveArticle: (article: IArticle | any) => void;
};

export const AddArticle = ({ saveArticle }: Props) => {
    const [article, setArticle] = React.useState<IArticle | {}>();

    const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
        setArticle({ ...article, [e.currentTarget.id]: e.currentTarget.value });
    };

    console.log(article)

    const addNewArticle = (e: React.FormEvent) => {
        e.preventDefault();
        saveArticle(article);
    };

    return (
        <form onSubmit={addNewArticle} className="Add-article">
            <input
                type="text"
                id="title"
                placeholder="Title"
                onChange={handleArticleData}
            />
            <input
                type="text"
                id="body"
                placeholder="Description"
                onChange={handleArticleData}
            />
            <button disabled={article === undefined ? true : false}>
                Add article
            </button>
        </form>
    );
};
