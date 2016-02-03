function updateLists(){
	var lists = $(".list");

	lists.each(function(){
		var $list = $(this);
		var $cards = $list.find(".list-card");
		var $visibleCards = $cards.not(".hide");

		if($visibleCards.length === $cards.length){
			return;
		}

		var message = $visibleCards.length
			+ ($visibleCards.length > 1 ? " cards (" : " card (")
			+ $cards.length
			+ " in total)";

		$list
			.find(".list-header-num-cards")
			.text(message);
	});
}

window.setTimeout(function(){
	window.setInterval(function(){
		updateLists();
	}, 500);
}, 4000);
