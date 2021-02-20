import {setOutputFormat} from './codec';
import {Concurrency, setConcurrency} from './concurrency';
import {
	overrideWebpackConfig,
	WebpackConfiguration,
	WebpackOverrideFn,
} from './override-webpack';
import {setOverwriteOutput} from './overwrite';
import {PixelFormat, setPixelFormat} from './pixel-format';
import {setQuality} from './quality';

export const Config = {
	Bundling: {
		/**
		 * Pass in a function which takes the current Webpack config
		 * and return a modified Webpack configuration.
		 * Docs: http://remotion.dev/docs/webpack
		 */
		overrideWebpackConfig,
	},
	Rendering: {
		/**
		 * Sets how many Puppeteer instances will work on rendering your video in parallel.
		 * Default: `null`, meaning half of the threads available on your CPU.
		 */
		setConcurrency,
		/**
		 * Set the JPEG quality for the frames.
		 * Must be between 0 and 100.
		 * Must be between 0 and 100.
		 * Default: 80
		 */
		setQuality,
	},
	Output: {
		/**
		 * If the video file already exists, should Remotion overwrite
		 * the output? Default: false
		 */
		setOverwriteOutput,
		/**
		 * Sets the pixel format in FFMPEG.
		 * See https://trac.ffmpeg.org/wiki/Chroma%20Subsampling for an explanation.
		 * You can override this using the `--pixel-format` Cli flag.
		 */
		setPixelFormat,
		/**
		 * Specify what kind of output you, want, either 'mp4' (is an alias for 'h264') or 'h265' or 'png' or 'vp8' or 'vp8'.
		 * Default: 'mp4' (uses the default h264 codec)
		 */
		setOutputFormat,
	},
} as const;

export {Codec, getFinalOutputCodec} from './codec';
export type {PixelFormat, Concurrency, WebpackConfiguration, WebpackOverrideFn};
