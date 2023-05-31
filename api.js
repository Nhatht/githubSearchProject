//api
//Client_ID = "8e7cf71ee36de467310b"
//client_secret ="a5ae2b5ce3fe1e9e9c2fa519f7eeb9b6793f4383"
//tạo class chuyên xử lí api
//tham khảo api của git tại : https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps

//Fetch Profile: https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}

//Fetch Repo: https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}
class Api{
    constructor(){
        this.client_id = "8e7cf71ee36de467310b"
        this.client_secret ="a5ae2b5ce3fe1e9e9c2fa519f7eeb9b6793f4383"
    }
    async getInfor(username){
        const [profile, repos] = await Promise.all([
            fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
            ).then(response =>{
                if(response.ok){
                    return response.json();
                }else{
                    throw new Error(response.statusText);
                }
            }),
            fetch(`https://api.github.com/users/${username}/repos?client_secret=${this.client_secret}`
            ).then(response =>{
                if(response.ok){
                    return response.json();
                }else{
                    throw new Error(response.statusText);
                }
            }),
        ]);

        return {
            profile,
            repos,
        }
    }
}
//test code
// let http = new Api();
// http.getInfor("Nhatht")
//     .then((value) => {
//         console.log(value);
// })
//     .catch((error) =>{
//         console.log(error);
// })

