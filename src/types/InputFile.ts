import { ReadStream } from 'fs';
import { FileOptions } from '../index';

/**
 * ##
 * InputFile
 * This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
 * @see https://core.telegram.org/bots/api#inputfile
 */
export type InputFile = ReadStream | Buffer | File | FileOptions;
