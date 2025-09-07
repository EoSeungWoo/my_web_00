let like = 0;
function increase_like() {
    like = like + 1;
    document.getElementById("like_count").innerText = "좋아요 : " + like;
}