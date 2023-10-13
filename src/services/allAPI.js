import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//upload a Video
export const uploadVideo = async (reqBody)=>{
    //make post http request to http://localhost:4000/videos to add video in json server and return response to Add component
    return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

//get all videos from json server
export const getAllVideos = async ()=>{
    //make get http request to http://localhost:4000/videos to get all videos from json server and return response to View component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

//get a video from json server
export const getAVideo = async (id)=>{
    //make get http request to http://localhost:4000/videos/id to get a video from json server and return response to CardView component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")

}

//remove a video from json server
export const deleteAVideo = async (id)=>{
    //make delete http request to http://localhost:4000/videos/id to delete a video from json server and return response to CardView component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

//store watching video history to json server
export const addToHistory = async (videoDetails)=>{
    //make post http request to http://localhost:4000/history to add a video in json server and return response to CardView component
    return await commonAPI("POST",`${serverURL}/history`,videoDetails)

}

//get all watching video history from json server
export const getAllHistory = async (videoDetails)=>{
    //make get http request to http://localhost:4000/history to get  video from json server and return response to watch history component
    return await commonAPI("GET",`${serverURL}/history`,"")

}

//add a category to json server
export const addCategory = async (reqBody)=>{
    //make post http request to http://localhost:4000/categories to add category in json server and return response to category component
    return await commonAPI("POST",`${serverURL}/categories`,reqBody)

}

//get all category to json server
export const getAllCategory = async ()=>{
    //make get http request to http://localhost:4000/categories to get all category from json server and return response to category component
    return await commonAPI("GET",`${serverURL}/categories`,"")

}

//remove a category to json server
export const deleteCategory = async (id)=>{
    //make delete http request to http://localhost:4000/categories/id to delete a category from json server and return response to category component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})

}

//update a category from json server
export const updateCategory = async (id,body)=>{
    //make put http request to http://localhost:4000/categories/id to update a particular category from json server and return response to category component
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)

}

//delete watch history from json server
export const deleteHistory = async (id)=>{
    //make delete http request to http://localhost:4000/history/id to delete watch history from json server and return response to watch history component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})

}