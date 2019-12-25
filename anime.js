function animeate(obj, target){
				clearInterval(obj.time)
			obj.time = setInterval(function(){
				var stpe = (target - obj.offsetLeft)/10;
				  stpe > 0 ?stpe = Math.ceil(stpe) : stpe =Math.floor(stpe);
					if(obj.offsetLeft == target){
						clearInterval(obj.time)
					}else{
						obj.style.left = obj.offsetLeft + stpe +'px';
					}
					
				},15);
			}
