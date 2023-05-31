//app
//project này mình sẽ thao tác với api của github
//dăng ký quyền sử dụng api viwus guthub
//Client_ID = "8e7cf71ee36de467310b"
//client_secret ="a5ae2b5ce3fe1e9e9c2fa519f7eeb9b6793f4383"
window.addEventListener("DOMContentLoaded", ()=>{
    document
        .querySelector("#form-search")
        .addEventListener("submit", async (event) => {
            event.preventDefault();
            const username = document.querySelector("#username").value;
            let http = new Api();
            let ui = new Ui();
            try{
                const {profile, repos} = await http.getInfor(username);
                ui.render(profile, repos);
                ui.alert("Thành công rồi");
            }catch(error){
                ui.alert("Không có user đó tồn tại", "danger");
            }
        });
})
