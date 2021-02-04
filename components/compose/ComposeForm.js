import { useState, useEffect, useContext} from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

import { BlogContext } from '../../context/blogContext';


const ComposeForm = () => {

    const { article, setArticle, ComposeArticle, GetCategoryList, GetTagList, loading } = useContext(BlogContext);

    const handleField = e => {
        const { name, value } = e.target;
        setArticle({
            ...article,
            [name]: value
        })
    }

    const handleChange = value => {
        setArticle({
            ...article,
            body: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        ComposeArticle();
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="article">Title</label>
                <input onChange={handleField} className="form-control" type="text" name="title" id="article"/>
                <span className="help-text"></span>
            </div>

            <ReactQuill onChange={handleChange}/>


            <div className="form-group text-right mt-4">
                <button disabled={loading} type="submit" className="btn btn-primary">Post article</button>
            </div>
        </form>
    </div>
    )
}

export default ComposeForm;