import React, { useState, createContext } from "react";
import ApiService from "../services/api.service";

export const BlogContext = createContext();


const initialArticleState = {
  title: "",
  body: "",
  cover: "https://res.cloudinary.com/practicaldev/image/fetch/s--TEPvioEK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/29y48mfj8qolyt2mi1ow.png",
  taglists: [],
  categories: []
}

const BlogContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [categoryList, setCategoryList] = useState([]);
  const [tagList, setTagList] = useState([]);

  const [article, setArticle] = useState(initialArticleState)

  const getResource = (resource, value) => {
    switch (resource) {
      case "tag":
        return "/articles/tag/" + value
      case "top":
          return "/articles/top/" + value
      case "category":
        return "/articles/category/" + value
      default:
        return "/articles"
    }
  }

  const GetPosts = (resource, value) => {
    setLoading(true);
    setError(false);

    ApiService.get(getResource(resource, value) + "?sort=-createdAt")
      .then((res) => {
        setLoading(false);
        setPosts(res.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  const GetPost = (slug) => {
    setLoading(true);
    setError(false);

    ApiService.get("/articles/" + slug)
      .then((res) => {
        setLoading(false);
        setPost(res.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  const GetCategoryList = () => {
    setLoading(true);
    setError(false);

    ApiService.get("/categories/")
      .then((res) => {
        setLoading(false);
        setCategoryList(res.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  const GetTagList = () => {
    setLoading(true);
    setError(false);

    ApiService.get("/tags/")
      .then((res) => {
        setLoading(false);
        setTagList(res.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  const AddArticleProperty = (key, value) => {
    setArticle({
      ...article,
      [key]: [...article[key], value]
    });
  }

  const RemoveArticleProperty = (key, value) => {
    setArticle({
      ...article,
      [key]: [...article[key].filter(item => item != value)]
    });
  }

  const HandleArticleProperty = (key, value) => {

    if(article[key].find(item => item === value))
      RemoveArticleProperty(key, value)
    else
      AddArticleProperty(key, value)
      
  }

  const ComposeArticle = () => {
    setLoading(true);
    setError(false);

    ApiService.post("/articles", article)
    .then((res) => {
      console.log('res', res.data)
      setLoading(false);
      setArticle(res.data);
    })
    .catch((error) => {
      setLoading(false);
      setError(error.message);
    });

  }

  const values = { 
    
    // Blog data
    GetPosts, GetPost, GetCategoryList, GetTagList, posts, post, 
    
    // Create or edit articles
    ComposeArticle,
    categoryList,
    tagList,
    article,
    setArticle,
    HandleArticleProperty,
        // fetching states
    loading, error

  }

  return (
    <BlogContext.Provider value={values}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
