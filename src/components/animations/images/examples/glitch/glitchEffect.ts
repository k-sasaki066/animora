import p5 from "p5";

type FlowLine = {
    pixels: Uint8ClampedArray | null;
    t1: number;
    speed: number;
    randX: number;
};

export class GlitchEffect {
    private channelLen = 4;
    private copyData: Uint8ClampedArray;

    private flowLineImgs: FlowLine[] = [];
    private shiftLineImgs: (Uint8ClampedArray | null)[] = [];
    private shiftRGBs: (Uint8ClampedArray | null)[] = [];
    private scatImgs: { img: p5.Image | null; x: number; y: number }[] = [];

    private throughFlag = true;

    constructor(private p: p5, private img: p5.Image) {
        img.loadPixels();
        this.copyData = new Uint8ClampedArray(img.pixels);

        // flow line
        this.flowLineImgs.push({
            pixels: null,
            t1: p.floor(p.random(0, 1000)),
            speed: p.floor(p.random(4, 24)),
            randX: p.floor(p.random(24, 80)),
        });

        // shift line
        for (let i = 0; i < 6; i++) this.shiftLineImgs.push(null);

        // shift rgb
        this.shiftRGBs.push(null);

        // scatter
        for (let i = 0; i < 3; i++) {
            this.scatImgs.push({ img: null, x: 0, y: 0 });
        }
    }

    public resizeCanvasAndImage(newWidth: number, newHeight: number) {
        this.p.resizeCanvas(newWidth, newHeight);
        this.img.resize(newWidth, newHeight);
        this.img.loadPixels();
        this.copyData = new Uint8ClampedArray(this.img.pixels);

        // 状態もリセット
        this.throughFlag = true;
        this.shiftLineImgs = new Array(6).fill(null);
        this.shiftRGBs = [null];
        this.scatImgs.forEach(o => (o.img = null));

        // flow line を再生成
        this.flowLineImgs = [{
            pixels: null,
            t1: this.p.floor(this.p.random(0, 1000)),
            speed: this.p.floor(this.p.random(4, 24)),
            randX: this.p.floor(this.p.random(24, 80)),
        }];
    }

    private replaceData(src: Uint8ClampedArray) {
        for (let i = 0; i < this.img.pixels.length; i++) {
            this.img.pixels[i] = src[i];
        }
        this.img.updatePixels();
    }

    private flowLine(obj: FlowLine) {
        const src = this.img.pixels;
        const dest = new Uint8ClampedArray(src);

        obj.t1 = (obj.t1 + obj.speed) % this.img.height;
        const y = this.p.floor(obj.t1);

        const scale = this.p.width / 800; // 基準幅に応じたスケーリング
        const randXScaled = obj.randX * scale;

        for (let x = 0; x < this.img.width; x++) {
            const idx = (y * this.img.width + x) * this.channelLen;
            dest[idx] = src[idx] + randXScaled;
            dest[idx + 1] = src[idx + 1] + randXScaled;
            dest[idx + 2] = src[idx + 2] + randXScaled;
        }

        return dest;
    }

    private shiftLine() {
        const src = this.img.pixels;
        const dest = new Uint8ClampedArray(src);

        const rangeH = this.img.height;
        const rangeMin = this.p.floor(this.p.random(0, rangeH));
        const rangeMax = rangeMin + this.p.floor(this.p.random(1, rangeH - rangeMin));
        const offsetX =
        this.channelLen * this.p.floor(this.p.random(-40, 40));

        for (let y = rangeMin; y < rangeMax; y++) {
            for (let x = 0; x < this.img.width; x++) {
                const idx = (y * this.img.width + x) * this.channelLen;
                const idx2 = (idx + offsetX + src.length) % src.length;
                dest[idx] = src[idx2];
                dest[idx + 1] = src[idx2 + 1];
                dest[idx + 2] = src[idx2 + 2];
            }
        }

        return dest;
    }

    private shiftRGB() {
        const src = this.img.pixels;
        const dest = new Uint8ClampedArray(src);
        const range = 16;

        const rOff =
            this.p.floor(this.p.random(-range, range)) *
            this.img.width *
            this.channelLen;
        const gOff =
            this.p.floor(this.p.random(-range, range)) *
            this.img.width *
            this.channelLen;
        const bOff =
            this.p.floor(this.p.random(-range, range)) *
            this.img.width *
            this.channelLen;

        for (let i = 0; i < src.length; i += 4) {
            dest[i] = src[(i + rOff + src.length) % src.length];
            dest[i + 1] = src[(i + gOff + src.length) % src.length];
            dest[i + 2] = src[(i + bOff + src.length) % src.length];
        }

        return dest;
    }

    private getRandomRectImg() {
        const startX = this.p.floor(this.p.random(0, this.img.width - 30));
        const startY = this.p.floor(this.p.random(0, this.img.height - 50));
        const rectW = this.p.floor(this.p.random(30, this.img.width - startX));
        const rectH = this.p.floor(this.p.random(1, 50));
        const img = this.img.get(startX, startY, rectW, rectH);
        img.loadPixels();
        return img;
    }

    private drawCentered() {
        this.p.push();
        const scaleX = this.p.width / this.img.width;
        const scaleY = this.p.height / this.img.height;
        this.p.translate(
            (this.p.width - this.img.width * scaleX) / 2,
            (this.p.height - this.img.height * scaleY) / 2
        );
        this.p.scale(scaleX, scaleY);
        this.p.image(this.img, 0, 0);
        this.p.pop();
    }

    show() {
        // restore
        this.replaceData(this.copyData);

        if (this.p.random() > 0.75 && this.throughFlag) {
            this.throughFlag = false;
            setTimeout(
                () => (this.throughFlag = true),
                this.p.random(40, 400)
            );
        }

        if (!this.throughFlag) {
            this.drawCentered();
            return;
        }

        // flow
        this.flowLineImgs.forEach((f) => {
            this.replaceData(this.flowLine(f));
        });

        // shift line
        this.shiftLineImgs.forEach((v, i, arr) => {
            if (this.p.random() > 0.5) {
                arr[i] = this.shiftLine();
                this.replaceData(arr[i]!);
            } else if (arr[i]) {
                this.replaceData(arr[i]!);
            }
        });

        // shift rgb
        this.shiftRGBs.forEach((_, i, arr) => {
            if (this.p.random() > 0.65) {
                arr[i] = this.shiftRGB();
                this.replaceData(arr[i]!);
            }
        });

        this.drawCentered();

        // scatter
        this.scatImgs.forEach((o) => {
        if (this.p.random() > 0.8) {
            o.x = this.p.floor(
                this.p.random(-this.img.width * 0.3, this.img.width * 0.7)
            );
                o.y = this.p.floor(
                this.p.random(-this.img.height * 0.1, this.img.height)
            );
            o.img = this.getRandomRectImg();
        }
            if (o.img) this.p.image(o.img, o.x, o.y);
        });
    }
}