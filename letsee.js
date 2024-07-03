function verify(){
    let nas = parseInt(document.getElementById("po").textContent)+1;
    be = nas.toString();
    document.getElementById("po").textContent = be;
    if(be == 5){
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
    }
    let a = 0;
    let n = document.getElementById("name").value;
    let s = document.getElementById("spann");
    let p = document.getElementById("pass").value;
    let s1 = document.getElementById("spann1");
    if (n.length == 0 ){
        s.textContent = "please enter your gmail";
        a=1;
    }
    else if(n.indexOf("@") == -1 || !n.endsWith(".com")) {
        s.textContent = "gmail is invalid , try again";
        a=1;
    }
    else{
        s.textContent = ''
    }
    if (p.length == 0 ){
        s1.textContent = "please enter your password";
        a=1;
    }
    else{
        s1.textContent = "invalid password"
    }
    if (a==1){
        return false;
    }
    else{
        document.getElementById("ml").textContent = "something went wrong , please try again later"
        return true;
    }
}