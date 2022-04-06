if (document.referrer && document.referrer.indexOf("lldetail") - document.referrer.indexOf("://") != 3 &&
document.referrer.indexOf("konoutagoe") - document.referrer.indexOf("://") != 3 &&
document.referrer.indexOf("061092234140") - document.referrer.indexOf("://") != 3) {
	let div = document.createElement("div");
	div.style = "position: fixed; border: 1px solid black; right: 0px; z-index:114514; background: #80808080";
	div.innerHTML = "<a href='/Lovelive' target='_top'>（ラブライブ！）ホームへ</a>";
	document.body.prepend(div);
}