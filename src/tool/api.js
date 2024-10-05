//made by @domekisuzi at 2024/10/5:13:43


import {instance,collect} from "@/tool/axios.js";

export const insertData =  async (data) =>{
    return instance.post('/insertData',data,{
            headers: {
                'Content-Type': ' application/json'
            }
        }
    )
}

export  const getData = async () =>{
    return collect.get("/")
}