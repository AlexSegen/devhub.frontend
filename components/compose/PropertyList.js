import { useState, useEffect, useContext} from 'react';
import { BlogContext } from '../../context/blogContext';

import styles from './propertyList.module.scss'

const PropertyList = () => {

    const { GetCategoryList, GetTagList, tagList, categoryList, HandleArticleProperty, article } = useContext(BlogContext);



    const isActive = (key, value) => {
        return article[key].some(item => item === value);
    }

    useEffect(() => {

        GetCategoryList();

        GetTagList();

    }, [])

    return (
        <>

            <div className="dh__box mb-3">
                <h5 className="">Categories</h5>

                <div className="list">
                    {
                        categoryList.map(item => (
                            <button key={item._id} type="button" 
                            onClick={() => HandleArticleProperty("categories", item._id)} 
                            className={`btn btn-link d-block w-100 text-left ${isActive("categories", item._id) ? styles.isActive : ""}`}>{item.name}</button>
                        ))
                    }
                </div>

            </div>

            <div className="dh__box mb-3">
                <h5 className="">Tags</h5>

                <div className="list">
                    {
                        tagList.map(item => (
                            <button key={item._id} type="button" 
                            onClick={() => HandleArticleProperty("taglists", item._id)} 
                            className={`btn btn-link d-block w-100 text-left ${isActive("taglists", item._id) ? styles.isActive : ""}`}>{item.name}</button>
                        ))
                    }
                </div>

            </div>
        </>
    )
}


export default PropertyList;