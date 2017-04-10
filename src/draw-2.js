
const sketch = (p) =>
{
	var img;
	var halfImage;
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
	}

	p.draw = () => {
		p.background(introControls.background);
		p.image(img, 0, 0);
		for (var j=0; j<img.height; j++) {
			for (var i=0; i<img.width; i++) {
				var c = img.get(i,j);
				if (c[3] > 0) {
						p.ellipse(i*7, j*7, c[3]/20, c[3]/20)
				}
			}
		}
	}

	window.onload = () => {
		gui = new dat.GUI();
		gui.addColor(introControls, 'background');
	}


}
new p5(sketch);
