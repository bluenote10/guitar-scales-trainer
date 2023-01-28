const SEMITONE_SCALE_FACTOR = 1.0594630943592953;

export class Geometry {
	height: number;
	sumFretFactors: number[];

	constructor(public width: number, public numStrings: number, public numFrets: number) {
		const heightRatio = (0.064 / 0.48) * (numStrings / 6);
		this.height = width * heightRatio;

		// In theory this might be calculated via https://en.wikipedia.org/wiki/Faulhaber%27s_formula
		// but not really practical.
		const sumFretFactors = [0.0];
		let sumFretFactor = 0.0;
		for (let i = 0; i <= numFrets; ++i) {
			sumFretFactor += SEMITONE_SCALE_FACTOR ** -i;
			sumFretFactors.push(sumFretFactor);
		}
		this.sumFretFactors = sumFretFactors;
	}

	getStringY(i: number): number {
		return (this.height * (i + 0.5)) / this.numStrings;
	}

	getFretX(i: number): number {
		// return ((i + 1) / (this.numFrets + 1)) * this.width;
		return (
			(this.sumFretFactors[i] / this.sumFretFactors[this.sumFretFactors.length - 1]) * this.width
		);
	}

	getFingerX(i: number): number {
		return 0.5 * (this.getFretX(i - 1) + this.getFretX(i));
	}
}
