import { PromptTypeAPI, errorsTypeAPI } from './../../types/api/index';
import { APIObjectType, sendAllProps } from '../../types/api/index';
import axios, { AxiosResponse } from "axios";

export async function getAll():Promise<AxiosResponse<APIObjectType>> {
    // return await axios.get(`/all`);
    return await axios({
        method: 'get',
        url: '/all.json',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function sendAll(data:sendAllProps) {
    return await axios.post(`/predict`, data);
}

export async function checkCode(code:string):Promise<AxiosResponse<errorsTypeAPI>>{

    return await axios.post('/validate/code',{code})
}

export async function checkPrompt(template:string):Promise<AxiosResponse<PromptTypeAPI>>{

    return await axios.post('/validate/prompt',{template})
}