import axios from "../../axios";

class PostService{
    createPost = async (data) => {
        const promise = new Promise((resolve, reject)=> {
            axios.post("users", data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }
}
export default new PostService();