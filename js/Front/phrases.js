function phrases_import()
{
	for (var i = 0; i < phrases.length; i++) {
		
		let img 	= phrases[i]['img'];
		let tag 	= phrases[i]['tag'];
		let name 	= translate_item[tag];
		let info 	= translate_item[tag + "-txt"];


		let create 	= `	<div class="d-block float-left mt-3 w-100">
							<div class="d-inline-block float-left w-80px h-80px rounded-10px p-2 bg-info--light">
								<img src="img/phrases/` + img + `" class="img-fluid">
							</div>
							<div class="d-inline-block float-left h-80px pt-0 pb-0 ml-10px w-calc-90px">
								<div class="d-block float-left w-100 p-0">
									<label>` + name + `</label>
								</div>

								<div class="d-block float-left w-100">
									<label><small class="m-0 p-0 text-10px">` + info + `</small></label>
								</div>
							</div>
						</div>`;

		$(create).appendTo("#phrase-items");
	}
}