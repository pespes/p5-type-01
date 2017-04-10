
const sketch = (p) =>
{
	var img;
	var imgPix = new Set();
	var canvas;
	var gui;
	var introControls = {
		background: '#ffae23',
	}


  p.preload = () => {
		img = p.loadImage("assets/hello.png");
	}

	p.setup = () => {
		canvas = p.createCanvas(1024, 768);
		canvas.position(0,0);
		img.loadPixels();
		console.log(img.pixels);
		for (var j=0; j<img.height; j++) {
			for (var i=0; i<img.width; i++) {
				var c = img.get(i,j);
				imgPix.add({x:i, y:j, r:c[0], g:c[1], b:c[2], a:c[3]});
			}
		}
	}

	p.draw = () => {
		p.background(introControls.background);
		p.image(img, 0, 0);
		for (let pixel of imgPix) {
			var alpha = pixel.a
			if (alpha > 0) {
					p.ellipse(pixel.x*7, pixel.y*7, alpha/20, alpha/20)
			}
		}
	}

	window.onload = () => {
		gui = new dat.GUI();
		gui.addColor(introControls, 'background');
	}


}
new p5(sketch);
