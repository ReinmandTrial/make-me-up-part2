
<style>
.accordiontoggle{
	cursor: pointer;
	position: relative;
}
.accordiontoggle:after{
	content: '+';
	font-weight: bold;
	font-size: inherit;
	position: absolute;
	right: 10px;
	top: 0;
	color: #358fd9;
}
.accordiontoggle.open:after{
	content: '-';
	font-weight: bold;
	font-size: inherit;
	right: 13px;
}
.text-wrap h2.accordiontoggle {
    font-weight: normal;
    font-size: 26px;
    color: #358fd9;
    margin: 10px 0;
}

 .accordion{
	display: none;
 }
</style>
<script>
$(document).ready(function(){
	$(document).on('click','.accordiontoggle',function(e){
		$(this).toggleClass('open');
		$(this).next('.accordion').slideToggle('fast');
		
		$('.accordiontoggle').not(this).each(function(){
			if($(this).hasClass('open')){
				$(this).removeClass('open');
				$(this).next('.accordion').slideUp('fast');
			}
		})
		
		e.preventDefault();
	})
})
</script>