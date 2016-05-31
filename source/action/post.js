import { createAction } from 'redux-actions';
import * as types from '../constant/actiontype';
import * as postService from '../service/postService';

export const getPostByCategory = createAction(
  types.FETCH_POSTS_BY_CATEGORY, 
  async(category, params)=> {
    return await postService.getPostByCategory(category, {
      pageIndex: 1
    });
  }, 
  (category)=> {
    return {
      pending: true,
      category
    }
  }
);

export const getPostByCategoryWithPage = createAction(
  types.FETCH_POSTS_BY_CATEGORY_WITHPAGE, 
  async(category, params)=> {
    return await postService.getPostByCategory(category, params);
  }, 
  (category)=> {
    return {
      pending: true,
      category
    }
  }
);

export const getPostById = createAction(types.FETCH_POST_BY_ID, 
  async(category, id)=>{
    return await postService.getPostById(category, id);
  }, 
  (category, id)=> {
    return {
      pending: true,
      category,
      id
    }
  }
);

export const getPostByAuthor = createAction(
  types.FETCH_POSTS_BY_AUTHOR, 
  async(size)=> {
    return await postService.getPostByAuthor({
      pageIndex: 1
    });
  },
  ()=> {
    return {
      pending: true
    }
  }
);

export const getPostByAuthorWithPage = createAction(
  types.FETCH_POSTS_BY_AUTHOR_WITHPAGE, 
  async(params)=> {
    return await postService.getPostByAuthor(params);
  },
  ()=> {
    return {
      pending: true
    }
  }
);